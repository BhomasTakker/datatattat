import { QueryCreator } from "@/src/query/api/api-map";
import { redisDataFetch } from "@/src/lib/redis";
import { RSS_CREATOR_MAP } from "@/src/query/rss/rss-map";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";
import { fetchRSS } from "@/src/queries/data/rss/fetch-rss";
import { RedisCacheTime } from "@/src/lib/redis/types";

type QueryId = string | string[];
type QueryData = {
	[x: string]: string | string[] | undefined;
};

// not an acurate name
// Overly complicated - this was for generic apis
// We don't need that - we fetch an rss given a valid URL
// There should be no real variation
const getQueryConfig = (queryId: QueryId, quearyData: QueryData) => {
	// pass creatorMap in
	const getConfigObject = RSS_CREATOR_MAP.get(queryId.toString()) as (
		data: typeof quearyData
	) => QueryCreator;

	// Return only if we got the object otherwise?
	return getConfigObject ? getConfigObject(quearyData) : null;
};

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

	// this is really only for specific
	// pass / get list by type
	const queryConfig = getQueryConfig(queryId, quearyData);

	if (!queryConfig) {
		// log situation
		return res.status(404).json("Bad request");
	}

	// We only need url and possibly headers
	// We are passed one and the othe rshouldn't be variable
	const { url, headers, returns, queryParams } = queryConfig;

	const queryUrl = new URL(url);

	for (let param in queryParams) {
		queryUrl.searchParams.set(param, queryParams[param] as string);
	}

	// On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// const result = await redisRssFetch(queryUrl, { ...headers });
	const result = await redisDataFetch({
		endpoint: queryUrl.toString(),
		options: { ...headers },
		getResult: fetchRSS,
		// We need set this
		cacheExpire: RedisCacheTime.DAY,
	});

	const newResponse = convertResponse(result, parsedConversions);
	return res.status(200).json(newResponse);
}

export default rssQuery;
