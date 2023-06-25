import { BASE_URL, ENDPOINTS } from "./constants";

enum BING_ENDPOINTS {
	search = "search",
	headlines = "headlines",
	trending = "trending",
}

const mainParams = [
	{
		type: "text",
		id: "q",
		label: "q",
		key: "q",
		info: "",
	},
];

const searchObject = {
	id: "bing_news_search_endpoint",
	baseUrl: `${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`,
	postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const headlinesObject = {
	id: "bing_news_headlines_endpoint",
	baseUrl: `${BASE_URL}${ENDPOINTS.HEADLINES}`,
	postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const trendingObject = {
	id: "bing_news_trending_endpoint",
	// Pass id / we don't want to show the api on the front end
	baseUrl: `${BASE_URL}${ENDPOINTS.TRENDING}`,
	postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const inputObject = {
	id: "bing_news_endpoint",
	label: "Select Endpoint",

	type: "select",
	endpoints: BING_ENDPOINTS,

	defaultEndpoint: "search",

	endpointObjects: {
		search: searchObject,
		headlines: headlinesObject,
		trending: trendingObject,
	},
};

export const BING_NEWS_RSS_CONFIG_OBJECT = {
	// endpoints: ENDPOINTS,
	endpointInput: inputObject,
};
