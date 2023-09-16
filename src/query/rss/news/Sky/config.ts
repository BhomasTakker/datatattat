import { baseRSSConversion } from "../../rss-feed.config";

// not a config but rss initialisation object or something??
// Think about this - there will be a lot of these
// Technically could be DB data
// User Created

enum ENDPOINTS {
	home = "home",
	uk = "uk",
	world = "world",
	us = "us",
	business = "business",
	politics = "politics",
	technology = "technology",
	entertainment = "entertainment",
	strange = "strange",
}

const endpoint = {
	type: "select",
	id: "endpoint",
	label: "endpoint",
	key: "endpoint",
	options: ENDPOINTS,
	// need add
	defaultEndpoint: "home",
};

//////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// We need a type and/explainer !!
export const SKY_NEWS_ROOT = {
	/** Form ID I believe */
	id: "sky_news_endpoint",
	/** Shown Label - if this is an input */
	label: "Select Endpoint",

	/** Type */
	// type is for our input type
	// if none then there is none
	// in this case we are just using params
	// because it is just a value and not a route?

	/** Unique and descriptive identifier / to get CREATOR Object */
	queryId: "skyNews",

	/** Available parameters for this endpoint */
	params: [endpoint], // required? / yes

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	// object default conversion, & list
	/** Our list of conversions */
	conversions: baseRSSConversion,
};
