import {
	API_CREATOR_MAP,
	API_REQUEST_TYPE,
	QueryCreator,
} from "@/src/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next/types";

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

	return getConfigObject(quearyData);
};

const createQuery = () => {};

// This needs massively cleaning up
// As most thins we've done do
// but this is very messy
async function apiQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	// console.log("apiQuery 1");

	const { query } = req;
	const { queryId = "", conversion = "{}" } = query;

	const parsedConversion = JSON.parse(conversion as string);

	console.log("apiQuery 1", { query });

	if (!queryId) {
		// log situation
		return res.status(404).json("Bad request");
	}
	// do better
	const quearyData = { ...query };
	delete quearyData.queryId;
	delete quearyData.conversion;

	console.log("apiQuery 2", { quearyData });

	// pass / get list by type
	const queryConfig = getQueryConfig(queryId, quearyData);

	if (!queryConfig) {
		// log situation
		return res.status(404).json("Bad request");
	}

	const { url, headers, returns, queryParams } = queryConfig;

	const queryUrl = new URL(url);

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

	// On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisApiFetch(queryUrl, { ...headers });

	// put result through transducers here
	// ultimately if a good enough member

	// console.log({ BING: result });
	console.log("apiQuery  ", { parsedConversion });

	/////////////////////////////////////////////////
	// pass conversion object into a function and return result
	// wrap api call so we have user or whatever
	// check has the chops
	// run data through transducers
	///////////////////////////////////////////////////
	// @ts-ignore
	const forNow = returns[`${parsedConversion?.id}`]
		? // @ts-ignore
		  returns[parsedConversion?.id]
		: (data: any) => data;
	///////////////////////////////////////////////

	console.log({ result });

	res.status(200).json(forNow(result));
}

export default apiQuery;
