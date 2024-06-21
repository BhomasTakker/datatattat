const baseUrl = process.env.VERCEL_URL
	? "https://" + process.env.VERCEL_URL
	: "http://localhost:3000";

const REDIS_ENDPOINT = "api/redis";

type FetchRedis = { url: URL; fetchId: string };

export const fetchRedis = async ({ url, fetchId }: FetchRedis) => {
	const endpoint = `endpoint=${url.href}`;
	const fetcher = `fetchId=${fetchId}`;
	try {
		const result = await fetch(
			`${baseUrl}/${REDIS_ENDPOINT}?${endpoint}&${fetcher}`
		);

		const returnData = await result.json();
		return returnData;
	} catch (err) {
		throw new Error(`ERROR: Could not fetch data from cache ${err}`);
	}
};
