import { mainParams } from "./params";
// Could call it a model perhaps
// Is more a model of the of the api structure
enum BING_ENDPOINTS {
	search = "search",
	headlines = "headlines",
	trending = "trending",
}

const CONVERSIONS = {
	toArticleList: "toArticleList",
	toArticleList2: "toArticleList2",
	toArticleList3: "toArticleList3",
} as const;

/////////////////////////////////////////////
/////////////////////////////////////////////
const responseMap = {
	id: "string",
	totalEstimatedMatches: "number",
	value: "array",
};

const articleMap = {
	category: "string",
	datePublished: "string",
	description: "string",
	headline: "string",
	id: "string",
	image: "object",
	video: "object",
};

const searchConversion = {
	conversionId: "BING",
	response: {
		map: responseMap,
		defaultConversions: [{ id: "toArticlesList", type: "TRANSFORM" }],

		transform: {
			toArticlesList: "toArticlesList",
		},
	},
	// really sub objects array
	iterable: {
		id: "value",
		map: articleMap,
		defaultConversions: [{ id: "toArticle", type: "TRANSFORM" }],

		sort: {},
		filter: {},
		transform: {
			toArticle: "toArticle",
		},
	},
};

const headlinesConversion = {
	conversionId: "BING",

	response: {
		map: responseMap,
		defaultConversions: [{ id: "toArticlesList", type: "TRANSFORM" }],

		transform: {
			toArticlesList: "toArticlesList",
		},
	},
	// really sub objects
	iterable: {
		id: "value",
		map: articleMap,
		defaultConversions: [{ id: "toArticle", type: "TRANSFORM" }],

		sort: {},
		filter: {},
		transform: {
			toArticle: "toArticle",
		},
	},
};

const trendingConversion = {
	conversionId: "BING",

	response: {
		map: responseMap,
		defaultConversions: [{ id: "toArticlesList", type: "TRANSFORM" }],

		transform: {
			toArticlesList: "toArticlesList",
		},
	},
	// really sub objects
	iterable: {
		id: "value",
		map: articleMap,
		defaultConversions: [{ id: "toArticle", type: "TRANSFORM" }],

		sort: {},
		filter: {},
		transform: {
			toArticle: "toArticle",
		},
	},
};

const search = {
	id: "bing_news_search_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "bingNewsSearch",
	params: mainParams,

	conversions: searchConversion,

	// notsure if should add to each but?
	// conversions: CONVERSIONS,
};

const headlines = {
	id: "bing_news_headlines_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "bingNewsHeadlines",
	params: mainParams,

	conversions: headlinesConversion,
};

const trending = {
	id: "bing_news_trending_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "bingNewsTrending",
	params: mainParams,

	conversions: trendingConversion,
};

export const BING_NEWS_ROOT = {
	id: "bing_news_endpoint",
	label: "Select Endpoint",

	type: "select",
	endpoints: BING_ENDPOINTS,

	defaultEndpoint: "search",

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	// technically shouldn't be one here as no endpoint?
	conversions: CONVERSIONS,

	endpointObjects: {
		search,
		headlines,
		trending,
	},
};
