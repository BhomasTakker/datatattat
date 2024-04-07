import {
	API_CREATOR_MAP,
	API_REQUEST_TYPE,
	QueryCreator,
} from "@/src/query/api/api-map";
import { redisDataFetch } from "@/src/lib/redis";
import { RSS_CREATOR_MAP } from "@/src/query/rss/rss-map";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";
import { fetchRSS } from "@/src/queries/data/rss/fetch-rss";
import { RedisCacheTime } from "@/src/lib/redis/types";
import { fetchRedis } from "@/src/lib/redis/fetch-redis";

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

	// Return only if we got the object otherwise?
	return getConfigObject ? getConfigObject(quearyData) : null;
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

	// // console.log("apiQuery 2", { quearyData });

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
	// const result = await redisRssFetch(queryUrl, { ...headers });
	// const result = await redisDataFetch({
	// 	endpoint: queryUrl.toString(),
	// 	options: { ...headers },
	// 	getResult: fetchRSS,
	// 	cacheExpire: RedisCacheTime.DAY,
	// });

	// Make a fetchRedis function and pass in xyz
	// const result = await fetch(`${baseUrl}/api/redis?endpoint=${queryUrl.href}`);
	// const resultToo = await result.json();

	const result = await fetchRedis({ url: queryUrl, fetchId: "fetchRSS" });
	// const result = await fetch(`/api/redis`);
	// put result through transducers here
	// ultimately if a good enough member

	// // console.log({ BING: result });
	// // console.log("apiQuery  ", { parsedConversion });

	/////////////////////////////////////////////////
	// pass conversion object into a function and return result
	// wrap api call so we have user or whatever
	// check has the chops
	// run data through transducers

	const newResponse = convertResponse(result, parsedConversions);
	return res.status(200).json(newResponse);
}

export default rssQuery;
