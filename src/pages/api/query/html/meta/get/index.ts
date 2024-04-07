import { redisDataFetch } from "@/src/lib/redis";
import { fetchRedis } from "@/src/lib/redis/fetch-redis";
import { fetchMetaFromHTML } from "@/src/queries/data/meta/fetch-meta";
import { NextApiRequest, NextApiResponse } from "next";

// Should specify this as a web scraper or pupeteer query
/////////////////////////////////////////////
// This cannot work out in the wild Surely?
/////////////////////////////////////////////
// May need to beef this guy up
// should get pupeteer 'script' id / i.e. getOGMetaData
/////////////////////////////////////////////
async function metaQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { url } = query;

	if (!url || typeof url !== "string") {
		return res.status(404);
	}

	// const response = await redisMetaDataFetch(url, {});
	// const response = await redisDataFetch({
	// 	endpoint: url,
	// 	options: {},
	// 	getResult: fetchMetaFromHTML,
	// });

	const response = await fetchRedis({
		url: new URL(url),
		fetchId: "fetchMeta",
	});

	return res.status(200).json(response);
}

export default metaQuery;
