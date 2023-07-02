import { API_MAP, API_REQUEST_TYPE } from "@/src/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { OEMBED_MAP } from "@/src/oembed/oembed-map";
import { NextApiRequest, NextApiResponse } from "next/types";
import { env } from "process";

// Putting all embeds through iframely
// https://iframely.com/docs/iframely-api

async function oembedQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { oembedId = "", endpoint = "" } = query;
	const quearyData = { ...query };
	delete quearyData.oembedId;

	const getConfigObject = OEMBED_MAP.get(oembedId.toString()) as (
		data: typeof quearyData
	) => API_REQUEST_TYPE;

	console.log({ oembedId });
	console.log({ quearyData });

	const oembedConfig = getConfigObject(quearyData);

	if (!oembedConfig) {
		return res.status(404).json("Bad request");
	}

	const { url: configUrl, headers, returns, data: queryParams } = oembedConfig;

	// use key with hash in browser
	const iframelyParams = {
		api_key: `${process.env.IFRAMELY_API_KEY}`,
		iframe: 1,
		omit_script: 1,
		// lazy: 1, // something killed it!
		// consent: 1, //try 0
		maxheight: 600,
	};
	console.log("API_KEY!!! ", { api_key: iframelyParams.api_key });
	const iframelyReadyParams = { ...queryParams, ...iframelyParams };

	const oembedUrl = new URL("https://cdn.iframe.ly/api/iframely");

	for (let param in iframelyReadyParams) {
		oembedUrl.searchParams.set(param, iframelyReadyParams[param] as string);
	}

	console.log({ oembedUrl });

	//On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisApiFetch(oembedUrl, { ...headers });

	res.status(200).json(result);
}

export default oembedQuery;
