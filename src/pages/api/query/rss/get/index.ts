import {
	API_CREATOR_MAP,
	API_REQUEST_TYPE,
	QueryCreator,
} from "@/src/query/api/api-map";
import { redisApiFetch, redisRssFetch } from "@/src/lib/redis";
import { RSS_CREATOR_MAP } from "@/src/query/rss/rss-map";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";

type QueryId = string | string[];
type QueryData = {
	[x: string]: string | string[] | undefined;
};

// not an acurate name
const getQueryConfig = (queryId: QueryId, quearyData: QueryData) => {
	// pass creatorMap in
	const getConfigObject = RSS_CREATOR_MAP.get(queryId.toString()) as (
		data: typeof quearyData
	) => QueryCreator;

	return getConfigObject(quearyData);
};

const createQuery = () => {};

// This needs massively cleaning up
// As most thins we've done do
// but this is very messy
async function rssQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { queryId = "", conversion = "{}", conversions = "[]" } = query;

	const parsedConversion = JSON.parse(conversion as string);
	const parsedConversions = JSON.parse(conversions as string);

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

	// On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisRssFetch(queryUrl, { ...headers });

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

	const newResponse = convertResponse(result, parsedConversions);

	res.status(200).json(forNow(result));
}

export default rssQuery;
