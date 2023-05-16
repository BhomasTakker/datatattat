//https://www.youtube.com/watch?v=-5RTyEim384

import { getEnvVar } from "@/src/utils/env";
import { Redis } from "ioredis";

export const redis = new Redis({
	host: getEnvVar("REDIS_HOST"),
	port: Number(getEnvVar("REDIS_PORT")),
	password: getEnvVar("REDIS_PASSWORD"),
});

//should be using generics to provide type
//redisApiFetch ?
//should be potentially in a seperate file
export const redisApiFetch = async (endpoint: URL, options: RequestInit) => {
	const cachedValue = await redis.get(endpoint.toString());

	//not sure we should be parsing?
	if (cachedValue) {
		console.log("RETURN CACHE");
		return JSON.parse(cachedValue);
	}

	const response = await fetch(endpoint, options);
	//Probably not here unless?
	const result = await response.json();

	console.log("SAVE CACHE");
	console.log({ result });
	//redis.set('key', 100, 'ex', 10) // where ex is seconds
	//we need take or use default
	//some way of managing how long this will be cached for
	await redis.set(endpoint.toString(), JSON.stringify(result));

	return result;
	//new Response(result);
};
