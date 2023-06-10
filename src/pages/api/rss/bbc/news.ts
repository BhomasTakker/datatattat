import { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

async function query(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	// I believe they all take basically the same form
	// items and then
	const parser = new Parser();
	// const feed = await parser.parseURL("http://feeds.bbci.co.uk/news/rss.xml");
	// const feed = await parser.parseURL(
	// 	"https://feeds.skynews.com/feeds/rss/home.xml"
	// );
	// const feed = await parser.parseURL(
	// 	"https://www.mirror.co.uk/news/?service=rss"
	// );
	//The sun playing and channel4 have 'content:encoded'
	const feed = await parser.parseURL("https://www.thesun.co.uk/feed");
	// const feed = await parser.parseURL("https://www.channel4.com/news/feed");
	// const feed = await parser.parseURL(
	// 	"https://moxie.foxnews.com/google-publisher/latest.xml"
	// );
	// const feed = await parser.parseURL("https://www.yahoo.com/news/rss");
	// const feed = await parser.parseURL(
	// 	"https://news.google.com/rss/search?q=counter offensive"
	// );

	//radio
	// const feed = await parser.parseURL(
	// 	"https://www.radioheritage.com/category/latest-posts/feed/"
	// );

	console.log("hare");
	console.log({ feed });
	const { items } = feed;
	console.log({ items });
	res.status(200).json(feed);
}

export default query;
