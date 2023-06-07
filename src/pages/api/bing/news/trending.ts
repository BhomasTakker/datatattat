import { BASE_URL, ENDPOINTS, HEADERS } from "@/src/api/bing/news/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

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

	const result = await redisApiFetch(endpoint, options);

	res.status(200).json(result);
}

export default trending;
