import {
	API_CREATOR_MAP,
	API_REQUEST_TYPE,
	QueryCreator,
} from "@/src/query/api/api-map";
import { redisDataFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";

type QueryId = string | string[];
type QueryData = {
	[x: string]: string | string[] | undefined;
};

// not an acurate name
const getQueryConfig = (queryId: QueryId, quearyData: QueryData) => {
	// pass creatorMap in
	const getConfigObject = API_CREATOR_MAP.get(queryId.toString()) as (
		data: typeof quearyData
	) => QueryCreator;

	// console.log("HERE ", getConfigObject);

	// return getConfigObject(quearyData);
	return getConfigObject ? getConfigObject(quearyData) : null;
};

const createQuery = () => {};

// This needs massively cleaning up
// As most thins we've done do
// but this is very messy / need merge / reuse with others
async function apiQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	// console.log("apiQuery 1");

	const { query } = req;
	const { queryId = "", conversion = "{}", conversions = "[]" } = query;

	const parsedConversion = JSON.parse(conversion as string);
	const parsedConversions = JSON.parse(conversions as string);

	// console.log("apiQuery 1", { query });

	if (!queryId) {
		// log situation
		return res.status(404).json("Bad request");
	}
	// do better
	const quearyData = { ...query };
	delete quearyData.queryId;
	delete quearyData.conversion;

	// console.log("apiQuery 2", { quearyData });

	// pass / get list by type
	const queryConfig = getQueryConfig(queryId, quearyData);

	// console.log("apiQuery 3", { queryConfig });
	if (!queryConfig) {
		// log situation
		return res.status(404).json("Bad request");
	}
	// console.log("apiQuery 4", { queryConfig });
	const { url, headers, returns, queryParams } = queryConfig;

	const queryUrl = new URL(url);
	// console.log("apiQuery 5", { queryUrl });
	for (let param in queryParams) {
		queryUrl.searchParams.set(param, queryParams[param] as string);
	}

	//Here we need inject Redis
	//but also a generic function - pass in jazz
	//i.e. endpoint + searchParams
	//In this instance it should just be endpoint
	//i.e. you don't have a body on GET

	//This aproach we would have to add for every api
	//We need lookit and better
	//Call an API fetch helper that returns either the api response or the redis response

	//try catch response
	// const response = await fetch(endpoint, options);
	// const result = await response.json();
	// console.log("apiQuery 6", { queryParams });
	// On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// const result = await redisApiFetch(queryUrl, { ...headers });
	const result = await redisDataFetch({
		endpoint: queryUrl.toString(),
		options: { ...headers },
		getResult: fetchAPI,
	});
	// put result through transducers here
	// ultimately if a good enough member
	// console.log("apiQuery 7", { queryParams });
	/////////////////////////////////////////////////
	// pass conversion object into a function and return result
	// wrap api call so we have user or whatever
	// check has the chops
	// run data through transducers

	const newResponse = convertResponse(result, parsedConversions);
	return res.status(200).json(newResponse);
	// res.status(200).json(forNow(result));
}

export default apiQuery;
