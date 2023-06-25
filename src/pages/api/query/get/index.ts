import { API_MAP, API_REQUEST_TYPE } from "@/src/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next/types";
import Parser from "rss-parser";

async function apiQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	console.log("apiQuery 1");

	const { query } = req;
	const { apiId = "" } = query;
	const quearyData = { ...query };
	delete quearyData.apiId;
	console.log("apiQuery 2");
	// when would apiId be an array?
	// it just theoretically could be because it is a query parameter
	// We are going to expect something -
	const apiConfig: API_REQUEST_TYPE = API_MAP.get(
		apiId.toString()
	) as API_REQUEST_TYPE;
	console.log("apiQuery 3");
	// need test if get returns undefined
	if (!apiConfig) {
		return res.status(404).json("Bad request");
	}

	console.log("apiQuery 4");

	const { url, headers, returns } = apiConfig;

	const queryParams = quearyData; //JSON.parse(quearyData.toString());

	const endpoint = new URL(url);

	console.log("apiQuery 5");

	for (let param in queryParams) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	console.log("apiQuery 6");

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
	const result = await redisApiFetch(endpoint, { ...headers });

	// console.log({ BING: result });
	console.log("apiQuery 7");

	res.status(200).json(result);
}

export default apiQuery;
