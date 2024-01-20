// probably not here but...
// dynamic imports https://www.youtube.com/watch?v=ddVm53j80vc

import { clientsideFetch } from "../api/clientside-fetch";
import { withQuery } from "../hoc/query/withQuery";
import { EDIT_WITH } from "./with";

const API_PATH = "api/query/get";
const RSS_PATH = "api/query/rss/get";
const OEMBED_PATH = "api/query/oembed/get";
const METADATA_API_PATH = "api/query/html/meta/get";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Move this somewhere
//
const createQueryObject = (queryObject: any, queryPath: string) => {
	const {
		queryId,
		conversion = {},
		params,
		options,
		conversions = [],
	} = queryObject;
	// conversionId needs to be string | string[] -> reducer or reducer[]

	// console.log({ CONVERSION: conversion });
	// console.log({ CONVERSIONS_ARRAY: conversions });

	const url = queryPath;
	// this feels a little dutty for some reason
	const searchParams = {
		...params,
		queryId,
		conversion: JSON.stringify(conversion),
		conversions: JSON.stringify(conversions),
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
		queryId: `${queryPath}:${queryId}:${JSON.stringify(params)}`,

		// conversion: JSON.stringify(conversion),
		// need work with state
		state: params,
		options,
	};

	return query;
};

//////////////////////////////////////////////////
// Probably convert to a hash / maybe and a Map
// Thnk about this area - why are we different
// There is a better way / or it can be cleaner
// will we not end up with 100s / of these we probably shouldn't?
// withObject is the saved with data
/////////////////////
// you can basic type componentObject
export const withFactory = (componentObject: any, withObject: any) => {
	switch (withObject.type) {
		case "rss-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, RSS_PATH)
			);
		case "api-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, API_PATH)
			);

		case "iframely-oembed-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, OEMBED_PATH)
			);
		case "html-meta-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, METADATA_API_PATH)
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
