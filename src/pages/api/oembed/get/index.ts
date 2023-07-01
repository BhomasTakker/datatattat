import { API_MAP, API_REQUEST_TYPE } from "@/src/api/api-map";
import { redisApiFetch } from "@/src/lib/redis";
import { OEMBED_MAP } from "@/src/oembed/oembed-map";
import { NextApiRequest, NextApiResponse } from "next/types";

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

	const oembedConfig = getConfigObject(quearyData);

	if (!oembedConfig) {
		return res.status(404).json("Bad request");
	}

	const { url: configUrl, headers, returns, data: queryParams } = oembedConfig;

	const oembedUrl = new URL(configUrl);

	for (let param in queryParams) {
		oembedUrl.searchParams.set(param, queryParams[param] as string);
	}

	//On fail get stuck in a loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const result = await redisApiFetch(oembedUrl, { ...headers });

	res.status(200).json(result);
}

export default oembedQuery;
