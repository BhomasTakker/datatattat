import { QueryCreator } from "@/src/query/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { OEMBED_CREATOR_MAP } from "@/src/query/oembed/oembed-map";
import { getEnvVar } from "@/src/utils/env";
import { NextApiRequest, NextApiResponse } from "next/types";
import { convertResponse } from "@/src/query/conversions/response-conversion";

const IFRAMELY_URL = "https://iframe.ly/api/iframely";

type QueryId = string | string[];
type QueryData = {
	[x: string]: string | string[] | undefined;
};

// not an acurate name
const getQueryConfig = (queryId: QueryId, quearyData: QueryData) => {
	// pass creatorMap in
	const getConfigObject = OEMBED_CREATOR_MAP.get(queryId.toString()) as (
		data: typeof quearyData
	) => QueryCreator;

	return getConfigObject(quearyData);
};

// This needs massively cleaning up
// As most thins we've done do
// but this is very messy
async function oembedQuery(req: NextApiRequest, res: NextApiResponse) {
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

	// pass / get list by type
	const queryConfig = getQueryConfig(queryId, quearyData);

	if (!queryConfig) {
		// log situation
		return res.status(404).json("Bad request");
	}

	const { url, headers, returns, queryParams } = queryConfig;

	const queryUrl = new URL(IFRAMELY_URL);

	for (let param in queryParams) {
		queryUrl.searchParams.set(param, queryParams[param] as string);
	}

	queryUrl.searchParams.set("omit_script", "1");
	queryUrl.searchParams.set("api_key", getEnvVar("IFRAMELY_API_KEY") as string);

	// On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisApiFetch(queryUrl, { ...headers });
	const newResponse = convertResponse(result, parsedConversions);
	res.status(200).json(result);
}

export default oembedQuery;
