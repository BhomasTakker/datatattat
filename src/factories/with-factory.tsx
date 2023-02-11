import { API_LIST } from "../api";
import { HEADERS, PATH } from "../api/bing/news/constants";
import { toArticleList } from "../api/bing/news/returns";
import { clientsideFetch, ClientSideFetchType } from "../api/clientside-fetch";
import { SimpleList } from "../components/data/list/SimpleList";
import { withQuery } from "../hoc/query/withQuery";

//Some helpers / utils / Query builder or something
// We're going to have a lot of these?
//We can union type or generic withObject
const createQueryObject = (queryObject: any) => {
	//type

	const { queryId, apiId, url, response, params, options } = queryObject;

	const config = API_LIST[apiId];
	const returnFn = config.returns[response];

	const searchObject = {
		url: config.url,
		searchParams: params,
		returnFn,
		options: {},
	};

	const query = {
		queryFn: () => clientsideFetch(searchObject),
		queryId,
		//this is seperate to pagination state but includes
		state: params,
		options,
	};

	return query;
};

//Probably convert to a hash
export const withFactory = (componentObject: any, withObject: any) => {
	// partial
	// console.log({ type: withObject.type });
	//if error return Component as given and display error
	switch (withObject.type) {
		case "query":
			//queryObject = createQueryObject()
			// console.log("IN QUERY");
			const _queryObject = createQueryObject(withObject.query);
			return withQuery(componentObject, _queryObject);

		default:
			// console.log("IN DEFAULT");
			const { component: Component, props } = componentObject;
			return Component;
	}
};
