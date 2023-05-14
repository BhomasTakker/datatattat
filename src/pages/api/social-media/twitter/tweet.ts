import { TWITTER_BASE_URL } from "@/src/api/social-media/twitter/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const options = {};

async function getTweet(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}
	//Not setup for this yet
	const endpoint = new URL(TWITTER_BASE_URL);
	const { query } = req;
	query.url = `https://twitter.com/${query.user}/status/${query.url}`;
	for (let param in query) {
		endpoint.searchParams.set(param, query[param] as string);
	}

	// const response = await fetch(endpoint);
	//Need redis options - even just cache time
	const result = await redisApiFetch(endpoint, options);
	//Probably not here unless?
	// const result = await response.json();
	console.log({ TWITTER: result });

	res.status(200).json(result);
}

export default getTweet;
