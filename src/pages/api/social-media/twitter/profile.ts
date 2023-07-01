import { TWITTER_BASE_URL } from "@/src/oembed/twitter/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const options = {};

async function getProfile(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}
	const endpoint = new URL(TWITTER_BASE_URL);
	const { query } = req;

	const updatedQuery = { ...query };
	updatedQuery.url = `https://www.twitter.com/${query.user}`;
	delete updatedQuery.user;

	for (let param in updatedQuery) {
		endpoint.searchParams.set(param, updatedQuery[param] as string);
	}

	// const response = await fetch(endpoint);
	//Need redis options - even just cache time
	const result = await redisApiFetch(endpoint, options);
	//Probably not here unless?
	// const result = await response.json();
	console.log({ TWITTER: result });

	res.status(200).json(result);
}

export default getProfile;
