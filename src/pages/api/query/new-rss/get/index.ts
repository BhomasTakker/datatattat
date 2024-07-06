import { log } from "@/src/lib/logger";
import { redisDataFetch } from "@/src/lib/redis";
import { RedisCacheTime, RedisCacheTimeMap } from "@/src/lib/redis/types";
import { fetchRSS } from "@/src/queries/data/rss/fetch-rss";
import { convertResponse } from "@/src/query/conversions/response-conversion";
import { getRequestHeaders } from "@/src/query/request/headers";
import { stringIsAValidUrl } from "@/src/utils/url";
import { NextApiRequest, NextApiResponse } from "next/types";

// User gets options depending on if they pay - double check
async function rssRequest(req: NextApiRequest, res: NextApiResponse) {
	// We need guards - but - replace any checks with a shared function
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { url = "", cacheExpiry = "", urls = "" } = query;
	const { queryId = "", conversions = "[]" } = query;

	if (!urls || typeof urls !== "string") {
		return res.status(404).json("Misformed url");
	}

	//////////////////////////////////////////////////////////
	// SHOULD use the Request class
	// IF we need to add then pass in an array I guess
	// typescript errors - not actually using for now
	const headers = getRequestHeaders();
	const urlsArray = urls.split(",");

	let fetches: any[] = [];
	urlsArray.forEach((url) => {
		const isValid = stringIsAValidUrl(url);
		if (isValid) {
			try {
				const prom = redisDataFetch({
					endpoint: url,
					// seems okay
					options: { headers },
					getResult: fetchRSS,
					// We need to check this against the user account level
					cacheExpire:
						RedisCacheTimeMap.get(cacheExpiry.toString()) || RedisCacheTime.DAY,
				});
				fetches.push(prom);
			} catch (error) {
				log(
					{ code: "0000", context: "REDIS DATA FETCH", message: "ERROR" },
					url,
					headers,
					error
				);
			}
		}
	});

	const parsedConversions = JSON.parse(conversions as string);

	const myArray = await Promise.all(fetches);

	// Are there any error conditions we should worry about?
	const joinedArray = myArray.reduce(
		(acc, cur) => ({ ...acc, items: acc.items.concat(cur.items) || acc.items }),
		// We should merge all into the main return
		{ ...myArray[0] }
	);

	const newResponse = convertResponse(joinedArray, parsedConversions);
	return res.status(200).json(newResponse);
}

export default rssRequest;
