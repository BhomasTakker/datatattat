// probably not here but...
// dynamic imports https://www.youtube.com/watch?v=ddVm53j80vc

import { clientsideFetch } from "../api/clientside-fetch";
import { withData } from "../hoc/query/withData";
import { withQuery } from "../hoc/query/withQuery";
import { EDIT_WITH } from "./with";

const API_PATH = "api/query/get";
const NEW_RSS_PATH = "api/query/new-rss/get";
const NEW_OEMBED_PATH = "api/query/new-oembed/get";
/////////////////////////////////
const RSS_PATH = "api/query/rss/get";
const XLSX_PATH = "api/query/xlsx/get";
const FILE_PATH = "api/query/file/get";
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
		// convert to queryCacheId - create a function fir this - and know when to clear?
		queryId: `${queryPath}:${queryId}:${JSON.stringify(
			params
		)}:${JSON.stringify(conversions)}`,

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
		case "new-rss-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, NEW_RSS_PATH)
			);
		case "api-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, API_PATH)
			);

		case "oembed-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, NEW_OEMBED_PATH)
			);
		default:
		case "custom-data":
			//Update this to make more sense in the context!
			const { query } = withObject || {};
			const { params } = query || {};
			return withData(componentObject, params);

		////////////////////////////////////
		case "rss-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, RSS_PATH)
			);

		// get rid
		case "iframely-oembed-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, OEMBED_PATH)
			);

		// go over - we can load an article with just this
		// meta to article conversion
		case "html-meta-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, METADATA_API_PATH)
			);

		case "xlsx-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, XLSX_PATH)
			);
		// This may just be json?
		case "file-query":
			return withQuery(
				componentObject,
				createQueryObject(withObject.query, FILE_PATH)
			);

		// default:
		// 	const { component: Component, props } = componentObject;
		// 	return Component;
	}
};

//This could easilly be a generic function
//just pass in object and id
export const withEditFactory = (id: string) => {
	const withEditElement = EDIT_WITH[id];

	return withEditElement;
};
