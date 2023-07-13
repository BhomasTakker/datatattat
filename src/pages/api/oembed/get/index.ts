import { API_REQUEST_TYPE } from "@/src/query/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { OEMBED_MAP } from "@/src/oembed/oembed-map";
import { NextApiRequest, NextApiResponse } from "next/types";

// Putting all embeds through iframely
// https://iframely.com/docs/iframely-api

// Just make the choice
// No embeds allowed that aren't thriugh a provider
async function oembedQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	console.log("OEMBED 1");

	const { query } = req;
	const { oembedId = "", endpoint = "" } = query;
	const quearyData = { ...query };
	delete quearyData.oembedId;

	console.log("OEMBED 2");

	const getConfigObject = OEMBED_MAP.get(oembedId.toString()) as (
		data: typeof quearyData
	) => API_REQUEST_TYPE;

	console.log({ oembedId });
	console.log({ quearyData });
	console.log("OEMBED 3");

	const oembedConfig = getConfigObject(quearyData);

	if (!oembedConfig) {
		return res.status(404).json("Bad request");
	}
	console.log("OEMBED 4");
	const { url: configUrl, headers, returns, data: queryParams } = oembedConfig;

	// use key with hash in browser
	// okay iframely does not work with anything
	// e.g. tiktok videos yes, profiles no it seems
	// We are going to have to if or if ?
	// return as part of the function
	// it is just parameters and url
	const iframelyParams = {
		api_key: `${process.env.IFRAMELY_API_KEY}`,
		iframe: 1,
		omit_script: 1,
		// lazy: 1, // something killed it!
		// consent: 1, //try 0
		maxheight: 600,
	};
	// console.log("API_KEY!!! ", { api_key: iframelyParams.api_key });
	const iframelyReadyParams = { ...queryParams, ...iframelyParams };

	console.log("OEMBED 5");

	const oembedUrl = new URL("https://cdn.iframe.ly/api/iframely");
	// const oembedUrl = new URL(configUrl);

	for (let param in iframelyReadyParams) {
		oembedUrl.searchParams.set(param, iframelyReadyParams[param] as string);
	}
	// for (let param in queryParams) {
	// 	oembedUrl.searchParams.set(param, queryParams[param] as string);
	// }
	// console.log({ oembedUrl: oembedUrl.toString() });

	//On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisApiFetch(oembedUrl, { ...headers });
	console.log({ oembedUrl });
	console.log({ result });

	res.status(200).json(result);
}

export default oembedQuery;
