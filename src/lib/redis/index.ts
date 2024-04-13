import { RedisCacheTime } from "./types";
import redis from "./create-redis-connection";
// import redis from "./global-redis";

type Result = any;

interface RedisDataFetch {
	endpoint: string;
	options: RequestInit;
	cacheExpire?: RedisCacheTime;
	getResult: (endpoint: string, options: RequestInit) => Result;
}

/** Generic redis fetch
 *
 * Pass in function (endpoint: string, options) => JSON
 *
 * --------------------------------------------------------
 *
 * rss example: src\queries\data\rss\fetch-rss.ts
 *
 * api: src\queries\data\api\fetch-api.ts
 *
 * meta: src\queries\data\meta\fetch-meta.ts
 */
export const redisDataFetch = async ({
	endpoint,
	options,
	cacheExpire = RedisCacheTime.WEEK,
	getResult,
}: RedisDataFetch) => {
	if (!redis) {
		throw new Error("Redis not instantiated");
	}
	// We should be sure this is a string post refactor
	const url = endpoint.toString();
	const cachedValue = await redis.get(url);

	if (cachedValue) {
		return JSON.parse(cachedValue);
	}

	const result = await getResult(url, options);

	await redis.set(endpoint.toString(), JSON.stringify(result));
	//need to set cache expire to a provided value or use a default / not integrated into edit yet
	await redis.expire(endpoint.toString(), cacheExpire);

	return result;
};
