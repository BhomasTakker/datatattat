import { TWITTER_BASE_URL } from "@/src/api/social-media/twitter/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const options = {};

//https://twitter.com/TwitterDev/lists/national-parks
//https://twitter.com/i/lists/1305508946556456962

async function getList(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}
	const endpoint = new URL(TWITTER_BASE_URL);
	const { query } = req;
	// query.url = `https://twitter.com/i/lists/${query.url}`;

	const updatedQuery = { ...query };
	updatedQuery.url = `https://www.twitter.com/i/lists/${query.listId}`;
	delete updatedQuery.listId;

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

export default getList;
