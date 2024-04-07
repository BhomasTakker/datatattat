import {
	BASE_URL,
	ENDPOINTS,
	HEADERS,
} from "@/src/query/api/bing/news/constants";
import { redisDataFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchAPI } from "@/src/queries/data/api/fetch-api";
import { fetchRedis } from "@/src/lib/redis/fetch-redis";

//We should initially form the data into a 'shape' we want?
//We might do further on the client side but we should
//strip away unrequired, or reform for our intented purposes
//We should expect a form back from every request?

const options = HEADERS;

//if we send ids as query parameters and then remove them
//we can specify mapping, filters, and sort, etc
//do that on the server rather than client side
//
//You can easily remove parameters once added to endpoint.searchParams
//with .delete or similar
//if you know there will always be a base-url,
//an endpoint, and an options_id you can ermove after auto adding
//And that will give you a truly dynamic api call

async function search(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;

	const endpoint = new URL(`${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`);
	for (let param in req.query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	//Here we need inject Redis
	//but also a generic function - pass in jazz
	//i.e. endpoint + searchParams
	//In this instance it should just be endpoint
	//i.e. you don't have a body on GET

	//This aproach we would have to add for every api
	//We need lookit and better
	//Call an API fetch helper that returns either the api response or the redis response

	//try catch response
	// const response = await fetch(endpoint, options);
	// const result = await response.json();

	//On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// const result = await redisApiFetch(endpoint, options);
	// const result = await redisDataFetch({
	// 	endpoint: endpoint.toString(),
	// 	options,
	// 	getResult: fetchAPI,
	// });
	const result = await fetchRedis({ url: endpoint, fetchId: "fetch" });
	// // console.log({ BING: result });

	res.status(200).json(result);
}

export default search;
