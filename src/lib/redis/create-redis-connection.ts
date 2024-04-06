import { getEnvVar } from "@/src/utils/env";
import Redis from "ioredis";

/////////////////////////////////////////////////
// ISSUE
// We were creating a connection for every page visit or similar
// We may still have a connection per api route. We are not 1 connection
// But currently better
// Can see cinnections on redis cloud / app
////////////////////////////////////////////////////////////

let redis: Redis | null = null;

if (!redis) {
	redis = new Redis({
		host: getEnvVar("REDIS_HOST"),
		port: Number(getEnvVar("REDIS_PORT")),
		password: getEnvVar("REDIS_PASSWORD"),
	});
}

export default redis;
