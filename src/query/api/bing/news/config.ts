import { ConversionObject } from "@/src/components/edit/query/conversion/types";
import { mainParams } from "./params";
// Could call it a model perhaps
// Is more a model of the of the api structure
enum BING_ENDPOINTS {
	search = "search",
	headlines = "headlines",
	trending = "trending",
}

// think unused / irrelevant
// const CONVERSIONS = {
// 	toArticleList: "toArticleList",
// 	toArticleList2: "toArticleList2",
// 	toArticleList3: "toArticleList3",
// } as const;

/////////////////////////////////////////////
/////////////////////////////////////////////
const responseMap = {
	id: "string",
	totalEstimatedMatches: "number",
	value: "array",
};

const responseConversion: ConversionObject = {
	map: responseMap,
	defaultConversions: [{ id: "toCollection", type: "TRANSFORM" }],

	transform: {
		toArticlesList: "toArticlesList",
		toCollection: "toCollection",
	},
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

const valueConversion: ConversionObject = {
	id: "value",
	iterable: true,
	map: articleMap,
	defaultConversions: [{ id: "toCollectionItem", type: "TRANSFORM" }],

	sort: {},
	filter: {},
	transform: {
		toCollectionItem: "toCollectionItem",
		toArticle: "toArticle",
	},
};

const imageConversion: ConversionObject = {
	id: "image",
	map: articleMap,
	defaultConversions: [],

	// available local convrsions was this?
	// probably not the best way?
	sort: {},
	filter: {},
	transform: {
		toCollectionItem: "toCollectionItem",
		toArticlesList: "toArticlesList",
		toCollection: "toCollection",
		toArticle: "toArticle",
	},
};

const searchConversion = {
	conversionId: "BING",
	response: responseConversion,
	// really sub objects array
	subConversions: [valueConversion, imageConversion],
	// iterable: valueConversion,
};

const headlinesConversion = {
	conversionId: "BING",

	response: responseConversion,
	// really sub objects
	subConversions: [valueConversion, imageConversion],
	// iterable: valueConversion,
};

const trendingConversion = {
	conversionId: "BING",

	response: responseConversion,
	// really sub objects
	subConversions: [valueConversion, imageConversion],
	// iterable: valueConversion,
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

	// type?
	type: "select",
	endpoints: BING_ENDPOINTS,

	defaultEndpoint: "search",

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	// technically shouldn't be one here as no endpoint?
	conversions: [], //ENDPOINTS

	endpointObjects: {
		search,
		headlines,
		trending,
	},
};
