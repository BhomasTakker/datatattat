import {
	BASE_URL,
	ENDPOINTS,
	HEADERS,
} from "@/src/query/api/bing/news/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const options = HEADERS;

async function headlines(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const endpoint = new URL(`${BASE_URL}${ENDPOINTS.HEADLINES}`);
	for (let param in req.query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	//Cache both api response object and the response object structure?
	const result = await redisApiFetch(endpoint, options);

	res.status(200).json(result);
}

export default headlines;
