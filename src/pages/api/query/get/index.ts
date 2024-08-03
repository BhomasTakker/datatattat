import { API_CREATOR_MAP, QueryCreator } from "@/src/query/api/api-map";
import { redisDataFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";

type QueryId = string | string[];
type QueryData = {
	[x: string]: string | string[] | undefined;
};

const getQueryConfig = (queryId: QueryId, quearyData: QueryData) => {
	const getConfigObject = API_CREATOR_MAP.get(queryId.toString()) as (
		data: typeof quearyData
	) => QueryCreator;

	return getConfigObject ? getConfigObject(quearyData) : null;
};

async function apiQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { queryId = "", conversion = "{}", conversions = "[]" } = query;

	const parsedConversions = JSON.parse(conversions as string);

	if (!queryId) {
		// log situation
		return res.status(404).json("Bad request");
	}
	// do better
	const quearyData = { ...query };
	delete quearyData.queryId;
	delete quearyData.conversion;

	const queryConfig = getQueryConfig(queryId, quearyData);

	if (!queryConfig) {
		return res.status(404).json("Bad request");
	}

	const { url, headers, returns, queryParams, cacheExpiry, ...rest } =
		queryConfig;

	const queryUrl = new URL(url);

	for (let param in queryParams) {
		queryUrl.searchParams.set(param, queryParams[param] as string);
	}

	try {
		// This may also be why we still have two connections!!!!
		// Not 100% why this errored / assume it's a double json.parse or something
		// const result = await fetchRedis({ url: queryUrl, fetchId: "fetch" });
		// console.log("6767", { result });
		const result = await redisDataFetch({
			endpoint: queryUrl.toString(),
			options: { ...headers },
			getResult: fetchAPI,
			defaultCacheExpire: cacheExpiry,
		});
		const newResponse = convertResponse(result, parsedConversions);
		return res.status(200).json(newResponse);
	} catch (err) {
		return res.status(500).json("[ERROR] Could not fetch data from cache.");
	}
}

export default apiQuery;
