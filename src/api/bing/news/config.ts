import { BASE_URL, ENDPOINTS } from "./constants";
import { mainParams } from "./params";

enum BING_ENDPOINTS {
	search = "search",
	headlines = "headlines",
	trending = "trending",
}

const searchObject = {
	id: "bing_news_search_endpoint",
	setState: false,
	apiId: "bingNewsSearch",

	// baseUrl: `${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`,
	// postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const headlinesObject = {
	id: "bing_news_headlines_endpoint",
	setState: false,
	apiId: "bingNewsHeadlines",
	// baseUrl: `${BASE_URL}${ENDPOINTS.HEADLINES}`,
	// postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const trendingObject = {
	id: "bing_news_trending_endpoint",
	setState: false,
	apiId: "bingNewsTrending",
	// Pass id / we don't want to show the api on the front end
	// baseUrl: `${BASE_URL}${ENDPOINTS.TRENDING}`,
	// postfix: "",
	// type: "select",
	// endpoints: ENDPOINTS,
	// defaultEndpoint: "home",
	params: mainParams,
};

const inputObject = {
	id: "bing_news_endpoint",
	label: "Select Endpoint",
	setState: true, //default

	type: "select",
	endpoints: BING_ENDPOINTS,

	defaultEndpoint: "search",

	endpointObjects: {
		search: searchObject,
		headlines: headlinesObject,
		trending: trendingObject,
	},
};

export const BING_NEWS_API_CONFIG_OBJECT = {
	// endpoints: ENDPOINTS,
	endpointInput: inputObject,
};
