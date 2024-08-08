import { RedisCacheTypes, RedisCacheTime } from "./types";
import redis from "./create-redis-connection";
import { fetchFeatures } from "@/src/services/features/feature-toggle";
import { FEATURES } from "@/src/pages/api/features";
// import redis from "./global-redis";

type Result = any;

interface RedisDataFetch {
	endpoint: string;
	options: RequestInit;
	cacheExpire?: RedisCacheTime | RedisCacheTypes;
	defaultCacheExpire?: RedisCacheTime | RedisCacheTypes;
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
// clean this up

export const redisDataFetch = async ({
	endpoint,
	options,
	defaultCacheExpire,
	cacheExpire = RedisCacheTime.WEEK,
	getResult,
}: RedisDataFetch) => {
	// we need a better way to do features
	const isRedisEnabled = process.env.FEATURE_REDIS_CACHING;

	// We should be sure this is a string post refactor
	const url = endpoint.toString();

	// We may want - in testing / dev
	// To completely avoid caching
	// We will hit limits more regularly
	// OR we should have dev and prod accounts
	// this being only for react components is a trip - fix this or redo
	// const isRedisEnabled = isEnabled(FEATURES.redis);
	if (!isRedisEnabled) {
		return await getResult(url, options);
	}

	if (!redis) {
		// return data
		// don't die
		throw new Error("Redis not instantiated");
	}

	///////////////////////////////////////////////
	// Get/Check cache, update expiry, and return
	///////////////////////////////////////////////
	let cachedValue;

	try {
		cachedValue = await redis.get(url);
	} catch (error) {
		// Cheap and dirty
		// When we hit our redis limit
		// or other error just don't use caching...
		const result = await getResult(url, options);
		return result;
	}
	// There is an issue with articles somewhere.
	// When originally loading we are perhaps timing out etc
	// No data is returned or due to rate limiting an empty object is returned

	if (cachedValue && JSON.stringify(cachedValue) != "{}") {
		if (
			cacheExpire &&
			cacheExpire !== RedisCacheTypes.NO_DELETE &&
			cacheExpire !== RedisCacheTypes.NO_CACHE
		) {
			// don't overwrite a lower cache
			await redis.expire(endpoint.toString(), cacheExpire, "lt");
		}
		return cachedValue;
		// return JSON.parse(cachedValue);
	}

	///////////////////////////////////////////////////////

	/////////////////////
	// Fetch data
	const result = await getResult(url, options);
	// We should check result and have an error check

	const resultString = JSON.stringify(result);
	/////////////////

	// Why an empty object though
	// why not array,
	if (!resultString || resultString === "{}") {
		// cheap and dirty check
		// but how are we going to check an erroneous response?
		return result;
	}

	///////////////////////////////
	// If no caching return without
	if (defaultCacheExpire === RedisCacheTypes.NO_CACHE) {
		// Do not cache
		return result;
	}
	////////////////////////////////

	////////////////////////////////
	// Set and cache
	await redis.set(endpoint.toString(), resultString);

	if (defaultCacheExpire && defaultCacheExpire !== RedisCacheTypes.NO_DELETE) {
		await redis.expire(endpoint.toString(), defaultCacheExpire, "lt");
	}

	if (
		cacheExpire !== RedisCacheTypes.NO_DELETE &&
		cacheExpire !== RedisCacheTypes.NO_CACHE
	) {
		// if this expiry is less than any already set then set it!
		await redis.expire(endpoint.toString(), cacheExpire, "lt");
	}
	////////////////////////////////////////////////

	// You could if no delete redis.persist(url);
	return result;
};
