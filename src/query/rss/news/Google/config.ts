//https://stackoverflow.com/questions/51537063/url-format-for-google-news-rss-feed

import { baseRSSConversion } from "../../rss-feed.config";

// This would be top news
// https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en
// default adds language and location
const BASE_URL = "https://news.google.com/news/rss";
const POSTFIX = "";

// if endpoint = text then text
// if object do more

// You shouldn't use enums like a hash
// This is just an easy one of these
enum ENDPOINTS {
	Headlines = "headlines",
	Topics = "/headlines/section/topic/",
	"Custom Topic" = "/topics/",
	Location = "/headlines/section/geo/",
	Search = "search",
}

enum TOPICS {
	WORLD = "WORLD",
	NATION = "NATION",
	BUSINESS = "BUSINESS",
	TECHNOLOGY = "TECHNOLOGY",
	ENTERTAINMENT = "ENTERTAINMENT",
	SPORTS = "SPORTS",
	SCIENCE = "SCIENCE",
	HEALTH = "HEALTH",
}

// wider type
// https://www.iban.com/country-codes
enum COUNTRY_CODES {
	Afghanistan = "AF",
	HAITI = "HT",
	UK = "GB",
	USA = "US",
}

//https://www.labnol.org/code/19899-google-translate-languages
enum LANGUAGE_CODES {
	Afrikaans = "af",
	Irish = "ga",
	English = "en",
	Welsh = "cy",
	Esperanto = "eo",
	"Haitian Creole" = "ht",
}

const baseParamsArray = [
	{
		type: "select",
		id: "google_country_code",
		label: "Country Code",
		options: COUNTRY_CODES,
		defaultValue: "UK",
		key: "hl",
		prefix: "hl=",
		postfix: "",
		info: "",
	},
	{
		type: "select",
		id: "google_language_code",
		label: "Language Code",
		options: LANGUAGE_CODES,
		defaultValue: "English",
		key: "gl",
		prefix: "gl=",
		postfix: "",
		info: "",
	},
];

// include baseUrl at the inputObject level
// more flexible and scalable ??
// include an id to use for form
// at the moment it is endpoint
// does top level have to be something or it just doesn't matter? / feels easier to have a set forst level?

const topic_param = {
	type: "select",
	id: "topic",
	label: "topic",
	key: "topic",
	options: TOPICS,
	// need add
	defaultEndpoint: "WORLD",
};

const custom_topic_param = {
	type: "text",
	id: "custom_topic",
	label: "topic",
	key: "custom_topic",
};

const location_param = {
	type: "text",
	id: "location",
	label: "location",
	key: "location",
};

const search_param = {
	type: "text",
	id: "q",
	label: "search",
	key: "q",
};

const ENDPOINT_OBJECTS = {
	Headlines: {
		id: "google_news_headlines_endpoint",
		/** Shown Label - if this is an input */
		label: "There isn't one",
		queryId: "google_headlines",

		/** Unused - The info string / md text */
		info: "id or explanation - or just an explanation",

		// object default conversion, & list
		/** Our list of conversions */
		// Google want's it's own conversion - because of course it does
		// NOTE:- Google does want it's own conversion
		// It also provides more data
		// So you could very well make a larger piece of content from it
		// So if we add a 'content' parameter to our Collection Item
		// We can use this etc
		conversions: baseRSSConversion,
		params: baseParamsArray,
	},
	Topics: {
		id: "google_topics",
		label: "Select Topic",
		queryId: "google_topics",
		info: "id or explanation - or just an explanation",
		// baseUrl: "https://news.google.com/news/rss/headlines/section/topic/",
		// postfix: "",
		// type: "select",
		// endpoints: TOPICS,
		// defaultEndpoint: "WORLD",
		params: [topic_param, ...baseParamsArray],
		conversions: baseRSSConversion,
	},
	["Custom Topic"]: {
		id: "google_custom_topic",
		label: "Custom Topic",
		queryId: "google_custom_topic",
		info: "id or explanation - or just an explanation",
		params: [custom_topic_param, ...baseParamsArray],
		conversions: baseRSSConversion,

		// baseUrl: "https://news.google.com/rss/topics/",
		// postfix: "",
		// type: "text",
		// params: baseParamsArray,
	},
	Location: {
		label: "Location",
		id: "google_location",
		queryId: "google_location",
		info: "id or explanation - or just an explanation",
		params: [location_param, ...baseParamsArray],
		conversions: baseRSSConversion,
	},
	Search: {
		label: "Search",
		id: "google_search",
		queryId: "google_search",
		info: "id or explanation - or just an explanation",
		params: [search_param, ...baseParamsArray],
		conversions: baseRSSConversion,
	},
};

export const GOOGLE_RSS_CONFIG_OBJECT = {
	// baseUrl: BASE_URL,
	// // endpoints: ENDPOINTS,
	// // defaultEndpoint: ["News"],
	// postfix: POSTFIX,

	// endpointInput: inputObject,

	type: "select",
	id: "google_endpoint",
	label: "Select Endpoint",
	endpoints: ENDPOINTS,
	defaultEndpoint: "Headlines",
	baseUrl: "Im a Base URL",
	postfix: "Im a postfix",

	info: "we need a description of what this does",

	params: baseParamsArray,

	endpointObjects: ENDPOINT_OBJECTS,
};

// Major topics
// https://news.google.com/news/rss/headlines/section/topic/{topic}
// There may be more?
// WORLD NATION BUSINESS TECHNOLOGY ENTERTAINMENT SPORTS SCIENCE HEALTH

// custom topics
// i.e. create your own or use somebody elses
// https://news.google.com/rss/topics/{id}?hl={lang}

// geolocation
// https://news.google.com/news/rss/headlines/section/geo/{location}
//
// https://news.google.com/news/rss/headlines/section/geo/SanFrancisco
// https://news.google.com/news/rss/headlines/section/geo/California

// search
// https://news.google.com/rss/search?q={query}

// if you use the non-geo search, you can specify a 7-day window by adding +when:7d to your search.
// e.g. https://news.google.com/rss/search?q={key_words}+when:7d

// can add language / country to anything
// hl=sv&gl=SE&ceid=SE%3Asv
// hl={lang} / might help in some cases to specify ??

// There is no postfix for google...
// We shouldn't need to specify an empty string really?
