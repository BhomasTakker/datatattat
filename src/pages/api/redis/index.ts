import { redisDataFetch } from "@/src/lib/redis";
import { redisFetchMap } from "@/src/lib/redis/fetch-functions-map";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";
import { NextApiRequest, NextApiResponse } from "next";

async function fetchRedis(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const { endpoint, fetchId = "fetch" } = query;

	const fetchFn = redisFetchMap.get(fetchId.toString());

	if (!endpoint) {
		return res.status(404).json("[ERROR] No endpoint provided");
	}

	try {
		const result = await redisDataFetch({
			endpoint: endpoint.toString(),
			options: {},
			getResult: fetchFn || fetchAPI,
		});

		return res.status(200).json(result);
	} catch (err) {
		throw new Error(`ERROR:- Failed to fetch`);
		// return res.status(500).json(`ERROR Failed to fetch ${err}`);
	}
}

export default fetchRedis;
