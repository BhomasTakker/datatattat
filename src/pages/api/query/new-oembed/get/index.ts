import { redisDataFetch } from "@/src/lib/redis";
import { RedisCacheTypes } from "@/src/lib/redis/types";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";
import { NEW_OEMBED_CREATOR_MAP } from "@/src/query/oembed/oembed-map";
import { NextApiRequest, NextApiResponse } from "next/types";

async function oembedQuery(req: NextApiRequest, res: NextApiResponse) {
	// wrap in a guard / decorator
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { queryId } = query;

	if (!queryId) {
		return res.status(404).json("Bad request");
	}

	const quearyData = { ...query, queryId: undefined, conversion: undefined };

	const getConfig = NEW_OEMBED_CREATOR_MAP.get(queryId as string);
	const config = getConfig?.({ quearyData });

	if (!config) {
		return res.status(404).json("Bad request");
	}

	const { baseUrl, url, headers, queryParams } = config;
	const queryUrl = new URL(baseUrl);

	for (let param in queryParams) {
		queryUrl.searchParams.set(param, queryParams[param] as string);
	}

	try {
		const result = await redisDataFetch({
			endpoint: queryUrl.toString(),
			options: { ...headers },
			getResult: fetchAPI,
			defaultCacheExpire: RedisCacheTypes.NO_CACHE,
		});

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json("Error requesting data" + error);
	}
}

export default oembedQuery;
