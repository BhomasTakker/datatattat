import { mainParams } from "./params";
// Could call it a model perhaps
// Is more a model of the of the api structure
enum BING_ENDPOINTS {
	search = "search",
	headlines = "headlines",
	trending = "trending",
}

const searchObject = {
	id: "bing_news_search_endpoint",
	setState: false,
	apiId: "bingNewsSearch",
	params: mainParams,
};

const headlinesObject = {
	id: "bing_news_headlines_endpoint",
	setState: false,
	apiId: "bingNewsHeadlines",
	params: mainParams,
};

const trendingObject = {
	id: "bing_news_trending_endpoint",
	setState: false,
	// instead of setState say
	// use type: null || 'none'
	// existing property, logical, easy to understand

	apiId: "bingNewsTrending",
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
	endpointInput: inputObject,
};
