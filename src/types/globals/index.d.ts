namespace NodeJS {
	interface ProcessEnv {
		MONGODB_URI: string;

		NEXTAUTH_SECRET: string;

		// Reid
		UPSTASH_REDIS_URL: string;
		UPSTASH_REDIS_TOKEN: string;

		// API keys / order and split
		I18_NEXUS_API_KEY: string;
		BING_API_KEY: string;
		NEWSAPI_APIKEY: string;
		FOOTBALL_DATA_ORG_API_KEY: string;

		BING_MAPS_API_KEY: string;
		MAP_BOX_API_KEY: string;

		// Public
		NEXT_PUBLIC_LOGGING: string;
	}
}
