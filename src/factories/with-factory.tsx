import { clientsideFetch } from "../api/clientside-fetch";
import { withQuery } from "../hoc/query/withQuery";
import { EDIT_WITH } from "./with";

const QUERY_PATH = "api/query/get";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Move this somewhere
const createNewestQueryObject = (queryObject: any) => {
	const { queryId, conversion, params, options } = queryObject;
	// conversionId needs to be string | string[] -> reducer or reducer[]

	console.log({ CONVERSION: conversion });

	const url = QUERY_PATH;
	// this feels a little dutty for some reason
	const searchParams = {
		...params,
		queryId,
		conversion: JSON.stringify(conversion),
	};
	// return fn - client side conversion
	// we do want this - if some kind of member do on server side

	// http query legth could be a problem
	// if so we can arbitrarilly switch to POST to get around it
	// Or potentially because we are sending the request to our own server
	// configure the thing to allo over the 528 limit say
	const query = {
		// wrap client side fetch in a responseConversion
		// if conversionIds and you are a member of ill repute
		// client side conversion
		queryFn: () => clientsideFetch({ url, searchParams }),
		// convert to queryCacheId
		queryId: `${QUERY_PATH}:${queryId}:${JSON.stringify(params)}`,

		// conversion: JSON.stringify(conversion),
		// need work with state
		state: params,
		options,
	};

	return query;
};

//////////////////////////////
//Probably convert to a hash
// Thnk about this area - why are we different
// There is a better way / or it can be cleaner
// will we not end up with 100s
// withObject is the saved with data
export const withFactory = (componentObject: any, withObject: any) => {
	switch (withObject.type) {
		case "#rss-query":
		case "api-query":
			return withQuery(
				componentObject,
				createNewestQueryObject(withObject.query)
			);

		default:
			const { component: Component, props } = componentObject;
			return Component;
	}
};

//This could easilly be a generic function
//just pass in object and id
export const withEditFactory = (id: string) => {
	const withEditElement = EDIT_WITH[id];

	return withEditElement;
};
