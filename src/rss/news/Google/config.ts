//https://stackoverflow.com/questions/51537063/url-format-for-google-news-rss-feed

// This would be top news
// https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en
// default adds language and location
const BASE_URL = "https://news.google.com/news/rss";
const POSTFIX = "";

// if endpoint = text then text
// if object do more
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

	params: [],
	endpointObjects: {
		Topics: {
			id: "google_topics",
			label: "Select Topic",
			baseUrl: "https://news.google.com/news/rss/headlines/section/topic/",
			postfix: "",
			type: "select",
			endpoints: TOPICS,
			defaultEndpoint: "WORLD",
			params: [],
		},
		["Custom Topic"]: {
			id: "google_topics",
			label: "Topic Id",
			baseUrl: "https://news.google.com/rss/topics/",
			postfix: "",
			type: "text",
			params: [],
		},
		Location: {
			label: "Location",
			id: "google_rss_location",
			baseUrl: "https://news.google.com/news/rss/headlines/section/geo/",
			postfix: "",
			type: "text",
			params: [],
		},
		Search: {
			label: "Search",
			id: "google_rss_search",
			// use a parameter for search (q)
			baseUrl: "https://news.google.com/rss/search?q=",
			postfix: "",
			type: "text",
			params: [],
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
