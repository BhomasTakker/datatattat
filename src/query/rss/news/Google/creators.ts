const BASE_URL = "https://news.google.com";
const HEADLINES = "/news/rss";
const TOPIC_URI = "/news/rss/headlines/section/topic/";
const CUSTOM_TOPIC_URI = "/rss/topics/";
const LOCATION_URI = "/news/rss/headlines/section/geo/";
const SEARCH_URI = "/rss/search";

// pass in more than params
const GOOGLE_RSS_NEWS_HEADLINES_CREATOR = (queryParams: any) => {
	return {
		url: `${BASE_URL}${HEADLINES}`,
		headers: {},
		returns: (data: any) => {}, // Remove
		queryParams,
	};
};

//"https://news.google.com/news/rss/headlines/section/topic/",
// We know this - it ain't any
const GOOGLE_RSS_NEWS_TOPIC_CREATOR = (queryParams: any) => {
	const { topic } = queryParams;
	delete queryParams.topic;
	return {
		url: `${BASE_URL}${TOPIC_URI}${topic}`,
		headers: {},
		returns: (data: any) => {}, // Remove
		queryParams,
	};
};
//https://news.google.com/rss/topics/{id}?hl={lang}
const GOOGLE_RSS_NEWS_CUSTOM_TOPIC_CREATOR = (queryParams: any) => {
	const { custom_topic } = queryParams;
	delete queryParams.custom_topic;

	// console.log("OMG:HERE:TOPIC", {
	// url: `${BASE_URL}${CUSTOM_TOPIC_URI}${custom_topic}`,
	// });
	return {
		url: `${BASE_URL}${CUSTOM_TOPIC_URI}${custom_topic}`,
		headers: {},
		returns: (data: any) => {}, // Remove
		queryParams,
	};
};

// https://news.google.com/news/rss/headlines/section/geo/{location}
const GOOGLE_RSS_NEWS_CUSTOM_LOCATION_CREATOR = (queryParams: any) => {
	const { location } = queryParams;
	delete queryParams.location;
	// console.log("OMG:HERE:LOCATION", {
	// 	url: `${BASE_URL}${LOCATION_URI}${location}`,
	// });
	// console.log("OMG:HERE:SEARCH", { queryParams });

	return {
		url: `${BASE_URL}${LOCATION_URI}${location}`,
		headers: {},
		returns: (data: any) => {}, // Remove
		queryParams,
	};
};
// https://news.google.com/rss/search?q={query}
const GOOGLE_RSS_NEWS_CUSTOM_SEARCH_CREATOR = (queryParams: any) => {
	// console.log("OMG:HERE:SEARCH", { url: `${BASE_URL}${SEARCH_URI}` });
	// console.log("OMG:HERE:SEARCH", { queryParams });
	return {
		url: `${BASE_URL}${SEARCH_URI}`,
		headers: {},
		returns: (data: any) => {}, // Remove
		queryParams,
	};
};

export const GOOGLE_CREATORS = [
	["google_headlines", GOOGLE_RSS_NEWS_HEADLINES_CREATOR],
	["google_topics", GOOGLE_RSS_NEWS_TOPIC_CREATOR],
	["google_custom_topic", GOOGLE_RSS_NEWS_CUSTOM_TOPIC_CREATOR],
	["google_location", GOOGLE_RSS_NEWS_CUSTOM_LOCATION_CREATOR],
	["google_search", GOOGLE_RSS_NEWS_CUSTOM_SEARCH_CREATOR],
];
