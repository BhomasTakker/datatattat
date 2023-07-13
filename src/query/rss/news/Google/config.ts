//https://stackoverflow.com/questions/51537063/url-format-for-google-news-rss-feed

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
	Headlines = "",
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
const inputObject = {
	type: "select",
	id: "google_endpoint",
	label: "Select Endpoint",
	endpoints: ENDPOINTS,
	defaultEndpoint: "Headlines",
	baseUrl: BASE_URL,
	postfix: "",

	info: "we need a description of what this does",

	params: baseParamsArray,

	endpointObjects: {
		Topics: {
			id: "google_topics",
			label: "Select Topic",
			baseUrl: "https://news.google.com/news/rss/headlines/section/topic/",
			postfix: "",
			type: "select",
			endpoints: TOPICS,
			defaultEndpoint: "WORLD",
			params: baseParamsArray,
		},
		["Custom Topic"]: {
			id: "google_topics",
			label: "Topic Id",
			baseUrl: "https://news.google.com/rss/topics/",
			postfix: "",
			type: "text",
			params: baseParamsArray,
		},
		Location: {
			label: "Location",
			id: "google_rss_location",
			baseUrl: "https://news.google.com/news/rss/headlines/section/geo/",
			postfix: "",
			type: "text",
			params: baseParamsArray,
		},
		Search: {
			label: "Search",
			id: "google_rss_search",
			// use a parameter for search (q)
			baseUrl: "https://news.google.com/rss/search?q=",
			postfix: "",
			type: "text",
			params: baseParamsArray,
		},
	},
};

export const GOOGLE_RSS_CONFIG_OBJECT = {
	baseUrl: BASE_URL,
	// endpoints: ENDPOINTS,
	// defaultEndpoint: ["News"],
	postfix: POSTFIX,

	endpointInput: inputObject,
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
