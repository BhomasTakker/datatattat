import { NextApiRequest, NextApiResponse } from "next/types";
import Parser from "rss-parser";

async function rssQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const parser = new Parser();

	const { query } = req;

	//Just create the url and pass as a query param
	const { url } = query;
	// create an Rss redis database and redisRssFetch function
	// const result = await redisApiFetch(endpoint, options);

	const feed = await parser.parseURL(url as string);

	const { items } = feed;
	// console.log({ items });
	// console.log("WAH WAH WAH");
	//return default

	res.status(200).json(feed);
}

export default rssQuery;
