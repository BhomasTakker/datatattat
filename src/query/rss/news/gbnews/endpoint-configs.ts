import { baseRSSConversion } from "../../rss-feed.config";
import { GBNEWS_NEWS_ENDPOINTS, GBNEWS_POLITICS_ENDPOINTS } from "./endpoints";

const NEWS_ENDPOINT = {
	id: "gbnews_news_endpoint",
	/** Shown Label - if this is an input */
	type: "select",
	label: "Select News Endpoint",

	endpoints: GBNEWS_NEWS_ENDPOINTS,
	defaultEndpoint: "Top Stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};

const POLITICS_ENDPOINT = {
	id: "gbnews_politics_endpoint",
	/** Shown Label - if this is an input */
	type: "select",
	label: "Select Politics Endpoint",

	endpoints: GBNEWS_POLITICS_ENDPOINTS,
	defaultEndpoint: "Top Stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};

const US_ENDPOINT = {
	id: "gbnews_politics_endpoint",
	/** Shown Label - if this is an input */
	queryId: "gbnews_us",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const ROYAL_ENDPOINT = {
	id: "gbnews_royals_endpoint",
	queryId: "gbnews_royals",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const MONEY_ENDPOINT = {
	id: "gbnews_money_endpoint",
	queryId: "gbnews_money",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const OPINION_ENDPOINT = {
	id: "gbnews_opinion_endpoint",
	queryId: "gbnews_opinion",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const SPORT_ENDPOINT = {
	id: "gbnews_sport_endpoint",
	queryId: "gbnews_sport",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const CELEBRITY_ENDPOINT = {
	id: "gbnews_celebrity_endpoint",
	queryId: "gbnews_celebrity",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const PRESENTERS_ENDPOINT = {
	id: "gbnews_presenters_endpoint",
	queryId: "gbnews_presenters",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
//////////// NEWS /////////////
const NEWS_TOP_STORIES = {
	id: "gbnews_news_top_stories_endpoint",
	queryId: "gbnews_news_top_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const UK_NEWS_STORIES = {
	id: "gbnews_uk_news_stories_endpoint",
	queryId: "gbnews_uk_news_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const US_NEWS_STORIES = {
	id: "gbnews_us_news_stories_endpoint",
	queryId: "gbnews_us_news_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const WORLD_NEWS_STORIES = {
	id: "gbnews_world_news_stories_endpoint",
	queryId: "gbnews_world_news_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const WEATHER_STORIES = {
	id: "gbnews_weather_stories_endpoint",
	queryId: "gbnews_weather_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const MIGRANT_CRISIS = {
	id: "gbnews_migrant_crisis_endpoint",
	queryId: "gbnews_migrant_crisis_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const CANCEL_CULTURE = {
	id: "gbnews_cancel_culture_endpoint",
	queryId: "gbnews_cancel_culture_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const BREXIT = {
	id: "gbnews_brexit_endpoint",
	queryId: "gbnews_brexit_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const CRIME = {
	id: "gbnews_crime_endpoint",
	queryId: "gbnews_crime_stories",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
/////////////////////////////////////////
const POLITICS_TOP_STORIES = {
	id: "gbnews_politics_top_endpoint",
	queryId: "gbnews_politics_top_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const POLITICS_UK = {
	id: "gbnews_politics_uk_endpoint",
	queryId: "gbnews_politics_uk_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const POLITICS_US = {
	id: "gbnews_politics_us_endpoint",
	queryId: "gbnews_politics_us_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const RISHI_SUNAK = {
	id: "gbnews_rishi_sunak_endpoint",
	queryId: "gbnews_rishi_sunak_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const KEIR_STARMER = {
	id: "gbnews_keir_starmer_endpoint",
	queryId: "gbnews_keir_starmer_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const CONSERVATIVE = {
	id: "gbnews_conservative_endpoint",
	queryId: "gbnews_conservative_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const LABOUR = {
	id: "gbnews_labour_endpoint",
	queryId: "gbnews_labour_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};
const SNP = {
	id: "gbnews_snp_endpoint",
	queryId: "gbnews_snp_endpoint",

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
	params: [],
};

export const GBNEWS_MAIN_ENDPOINT_OBJECTS = {
	News: NEWS_ENDPOINT,
	Politics: POLITICS_ENDPOINT,
	US: US_ENDPOINT,
	Royal: ROYAL_ENDPOINT,
	Money: MONEY_ENDPOINT,
	Opinion: OPINION_ENDPOINT,
	Sport: SPORT_ENDPOINT,
	Celebrity: CELEBRITY_ENDPOINT,
	Presenters: PRESENTERS_ENDPOINT,
};

export const GBNEWS_NEWS_ENDPOINT_OBJECTS = {
	["Top Stories"]: NEWS_TOP_STORIES,
	["UK"]: UK_NEWS_STORIES,
	["US"]: US_NEWS_STORIES,
	World: WORLD_NEWS_STORIES,
	Weather: WEATHER_STORIES,
	["Migrant Crisis"]: MIGRANT_CRISIS,
	["Cancel Culture"]: CANCEL_CULTURE,
	Brexit: BREXIT,
	Crime: CRIME,
};

export const GBNEWS_POLITICS_ENDPOINT_OBJECTS = {
	["Top Stories"]: POLITICS_TOP_STORIES,
	UK: POLITICS_UK,
	US: POLITICS_US,
	["Rishi Sunak"]: RISHI_SUNAK,
	["Keir Starmer"]: KEIR_STARMER,
	Conservative: CONSERVATIVE,
	Labour: LABOUR,
	SNP: SNP,
};
