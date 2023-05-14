import { TIKTOK_BASE_URL } from "@/src/api/social-media/tik-tok/constants";
import { redisApiFetch } from "@/src/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const options = {};

async function getCreator(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	//if given url does not begin with @ then add @
	//Should also use user and convert to url

	const endpoint = new URL(TIKTOK_BASE_URL);
	const { query } = req;

	const user = query.user?.indexOf("@") === 0 ? query.user : `@${query.user}`;
	//probably not how we should do this but...
	const updatedQuery = { ...query };
	updatedQuery.url = `https://www.tiktok.com/${user}`;
	delete updatedQuery.user;

	for (let param in updatedQuery) {
		endpoint.searchParams.set(param, updatedQuery[param] as string);
	}

	const result = await redisApiFetch(endpoint, options);
	//Probably not here unless?
	// const result = await response.json();
	console.log({ updatedQuery });
	console.log({ TIKTOK: result });

	res.status(200).json(result);
}

export default getCreator;
