//////////////////////////////////////////////////////////////
// Poor variation of
// https://github.com/orgs/vercel/discussions/1335
// Still doesn't seem to be one connection across all routes
//////////////////////////////////////////////////////////////
// I think the way to do this properly would be to have
// All redis requests go through the same route
// So meta, or whatever request then makes a redis api call
//////////////////////////////////////////////////////////////
import { getEnvVar } from "@/src/utils/env";
import Redis from "ioredis";

const REDIS_PASSWORD = getEnvVar("REDIS_PASSWORD");
const REDIS_HOST = getEnvVar("REDIS_HOST");
const REDIS_PORT = Number(getEnvVar("REDIS_PORT"));

let redisClient: Redis;
let redisClientPromise: Redis;

// if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
if (!global._redisClientPromise) {
	redisClient = new Redis({
		host: REDIS_HOST,
		port: REDIS_PORT,
		password: REDIS_PASSWORD,
	});
	console.info(`NextJS Redis client connected 111 ..`);
	global._redisClientPromise = redisClient as Redis;
}
redisClientPromise = global._redisClientPromise;
// } else {
// 	redisClientPromise = redisClient;
// }

export default redisClientPromise;
