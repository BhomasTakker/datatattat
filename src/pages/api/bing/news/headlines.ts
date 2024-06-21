import {
	BASE_URL,
	ENDPOINTS,
	HEADERS,
} from "@/src/query/api/bing/news/constants";
import { redisDataFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";

const options = HEADERS;
// is this used?
// if so there are waaay better ways!
async function headlines(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const endpoint = new URL(`${BASE_URL}${ENDPOINTS.HEADLINES}`);
	for (let param in req.query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	// call fetch redis api route here

	//Cache both api response object and the response object structure?
	const result = await redisDataFetch({
		endpoint: endpoint.toString(),
		options,
		getResult: fetchAPI,
	});

	// const result = await fetchRedis({ url: endpoint, fetchId: "fetch" });

	res.status(200).json(result);
}

export default headlines;
