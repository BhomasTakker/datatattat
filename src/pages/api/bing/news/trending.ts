import {
	BASE_URL,
	ENDPOINTS,
	HEADERS,
} from "@/src/query/api/bing/news/constants";
import { redisDataFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";
import { fetchRedis } from "@/src/lib/redis/fetch-redis";

const options = HEADERS;

async function trending(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const endpoint = new URL(`${BASE_URL}${ENDPOINTS.TRENDING}`);
	//helpers / utils
	for (let param in req.query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	const result = await fetchRedis({ url: endpoint, fetchId: "fetch" });

	// const result = await redisApiFetch(endpoint, options);
	// const result = await redisDataFetch({
	// 	endpoint: endpoint.toString(),
	// 	options,
	// 	getResult: fetchAPI,
	// });
	res.status(200).json(result);
}

export default trending;
