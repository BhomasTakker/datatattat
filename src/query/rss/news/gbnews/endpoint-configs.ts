import {
	createBasicEndpoint,
	createSelectEndpoint,
} from "../../utils/endpoints";
import { GBNEWS_NEWS_ENDPOINTS, GBNEWS_POLITICS_ENDPOINTS } from "./endpoints";

export const GBNEWS_MAIN_ENDPOINT_OBJECTS = {
	News: createSelectEndpoint({
		id: "gbnews_news_endpoint",
		label: "Select News Endpoint",
		endpoints: GBNEWS_NEWS_ENDPOINTS,
		defaultEndpoint: "Top Stories",
	}),
	Politics: createSelectEndpoint({
		id: "gbnews_politics_endpoint",
		label: "Select Politics Endpoint",
		endpoints: GBNEWS_POLITICS_ENDPOINTS,
		defaultEndpoint: "Top Stories",
	}),
	US: createBasicEndpoint({ id: "gbnews_us" }),
	Royal: createBasicEndpoint({ id: "gbnews_royals" }),
	Money: createBasicEndpoint({ id: "gbnews_money" }),
	Opinion: createBasicEndpoint({ id: "gbnews_opinion" }),
	Sport: createBasicEndpoint({ id: "gbnews_sport" }),
	Celebrity: createBasicEndpoint({ id: "gbnews_celebrity" }),
	Presenters: createBasicEndpoint({ id: "gbnews_presenters" }),
};

export const GBNEWS_NEWS_ENDPOINT_OBJECTS = {
	["Top Stories"]: createBasicEndpoint({ id: "gbnews_news_top_stories" }),
	["UK"]: createBasicEndpoint({ id: "gbnews_uk_news_stories" }),
	["US"]: createBasicEndpoint({ id: "gbnews_us_news_stories" }),
	World: createBasicEndpoint({ id: "gbnews_world_news_stories" }),
	Weather: createBasicEndpoint({ id: "gbnews_weather_stories" }),
	["Migrant Crisis"]: createBasicEndpoint({
		id: "gbnews_migrant_crisis_stories",
	}),
	["Cancel Culture"]: createBasicEndpoint({
		id: "gbnews_cancel_culture_stories",
	}),
	Brexit: createBasicEndpoint({ id: "gbnews_brexit_stories" }),
	Crime: createBasicEndpoint({ id: "gbnews_crime_stories" }),
};

export const GBNEWS_POLITICS_ENDPOINT_OBJECTS = {
	["Top Stories"]: createBasicEndpoint({ id: "gbnews_politics_top_endpoint" }),
	UK: createBasicEndpoint({ id: "gbnews_politics_uk_endpoint" }),
	US: createBasicEndpoint({ id: "gbnews_politics_us_endpoint" }),
	["Rishi Sunak"]: createBasicEndpoint({ id: "gbnews_rishi_sunak_endpoint" }),
	["Keir Starmer"]: createBasicEndpoint({ id: "gbnews_keir_starmer_endpoint" }),
	Conservative: createBasicEndpoint({ id: "gbnews_conservative_endpoint" }),
	Labour: createBasicEndpoint({ id: "gbnews_labour_endpoint" }),
	SNP: createBasicEndpoint({ id: "gbnews_snp_endpoint" }),
};
