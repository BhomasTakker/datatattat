import { API_LIST } from "../api";
import { clientsideFetch, ClientSideFetchType } from "../api/clientside-fetch";
import { SimpleList } from "../components/data/list/SimpleList";
import { withQuery } from "../hoc/query/withQuery";
import { EDIT_WITH } from "./with";

//Some helpers / utils / Query builder or something
// We're going to have a lot of these?
//We can union type or generic withObject
const createQueryObject = (queryObject: any) => {
	//type

	const { queryId, apiId, url, response, params, options } = queryObject;

	//API 'config'
	//If not found return error or whatever
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

//This could easilly be a generic function
//just pass in object and id
export const withEditFactory = (id: string) => {
	const withEditElement = EDIT_WITH[id];

	// console.log({ withEditElement });

	return withEditElement;
};
