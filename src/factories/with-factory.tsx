import { API_LIST } from "../api";
import { clientsideFetch } from "../api/clientside-fetch";
import { withQuery } from "../hoc/query/withQuery";
import { EDIT_WITH } from "./with";

const API_QUERY_PATH = "api/query/get";
const RSS_QUERY_PATH = "api/rss";
const OEMBED_QUERY_PATH = "api/oembed/get";

// temp
const createNewQueryObject = (queryObject: any) => {
	//type
	//100% do away with query id - should be auto - at least for now/by default
	const { queryId, apiId, url, response, params, options } = queryObject;

	console.log("API 1", { queryObject });
	//API 'config'
	//If not found return error or whatever
	const config = API_LIST[apiId];
	const returnFn = config.returns[response]; // ??

	console.log("API 2", { config });

	const searchObject = {
		//url should be the same?
		url: API_QUERY_PATH,
		searchParams: { ...params, apiId },
		returnFn,
		options: {},
	};

	console.log("API 3", { searchObject });

	// query id should probably just be url + params
	// remove the option from users

	const query = {
		queryFn: () => clientsideFetch(searchObject),
		// just use the url+params to save this / wrong url
		queryId: `${API_QUERY_PATH}:${JSON.stringify(params)}`,
		//this is seperate to pagination state but includes
		state: params,
		options,
	};

	console.log("API 4", { query });

	return query;
};

//Some helpers / utils / Query builder or something
// We're going to have a lot of these?
//We can union type or generic withObject
// DEPRECATED
const createQueryObject = (queryObject: any) => {
	//type
	//100% do away with query id - should be auto - at least for now/by default
	const { queryId, apiId, url, response, params, options } = queryObject;

	//API 'config'
	//If not found return error or whatever
	// This shuldn't be required
	const config = API_LIST[apiId];
	const returnFn = config.returns[response];

	const searchObject = {
		//url should be the same?
		url: config.url,
		searchParams: params,
		returnFn,
		options: {},
	};

	// query id should probably just be url + params
	// remove the option from users

	const query = {
		queryFn: () => clientsideFetch(searchObject),
		// just use the url+params to save this
		queryId: `${config.url}:${JSON.stringify(params)}`,
		//this is seperate to pagination state but includes
		state: params,
		options,
	};

	return query;
};
// All needs a wild clean up and perhaps rethink
const createRssQueryObject = (queryObject: any) => {
	// route instead of resourceId
	const { queryId, rssId, url, response, params, options, route } = queryObject;

	console.log({ rssQuery: queryObject });
	//API 'config'
	//If not found return error or whatever
	// Okay this is a dog - perhaps wrong way to do all of this
	// We have a bug where params object is bleeding into this one
	// unless we specify a params object string we get the prevvious
	const searchUrl =
		params && typeof params === "string" ? `${route}${params}` : route;
	// const config = RSS_LIST[rssId];
	const returnFn = (data: any) => data; // config.returns[response];
	const searchObject = {
		url: RSS_QUERY_PATH, //add news etc
		searchParams: { url: searchUrl },
		returnFn,
		options: {},
	};
	const query = {
		queryFn: () => clientsideFetch(searchObject),
		queryId: route,
		//this is seperate to pagination state but includes
		state: {},
		options,
	};

	return query;
};

// We need to go over these
// they can definately be neater and more generic
const createOembedObject = (queryObject: any) => {
	// resourceId
	const { oembedId, params, options } = queryObject;

	const searchObject = {
		//url should be the same?
		url: OEMBED_QUERY_PATH,
		searchParams: { ...params, oembedId },
		returnFn: (data: any) => data,
		options: {},
	};

	// query id should probably just be url + params
	// remove the option from users

	const query = {
		queryFn: () => clientsideFetch(searchObject),
		// just use the url+params to save this
		queryId: `${OEMBED_QUERY_PATH}:${JSON.stringify(params)}`,
		//this is seperate to pagination state but includes
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
	// partial
	// console.log({ type: withObject.type });
	//if error return Component as given and display error
	// Doesn't need to be a switch - do you match with a function
	// else error
	switch (withObject.type) {
		case "new-api-query":
			// console.log("Did we come this way???");
			return withQuery(componentObject, createNewQueryObject(withObject.query));
		case "query":
		case "api-query": // api-query or whatever API_QUERY
			//queryObject = createQueryObject()
			// console.log("IN QUERY");

			return withQuery(componentObject, createQueryObject(withObject.query));

		case "rss-query":
			//return rssWithQueryComponent();//
			// console.log({ withObject });
			return withQuery(componentObject, createRssQueryObject(withObject.query));

		// We possibly wouldn't want or need oembed here
		// You would only use oembeds with oembed ites?
		case "oembed":
			return withQuery(componentObject, createOembedObject(withObject.query));
		default:
			// console.log("IN DEFAULT");
			const { component: Component, props } = componentObject;
			return Component;
	}
};

//This could easilly be a generic function
//just pass in object and id
export const withEditFactory = (id: string) => {
	const withEditElement = EDIT_WITH[id];

	// console.log({ withEditElement });

	return withEditElement;
};
