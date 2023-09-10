import { ConversionObject } from "@/src/components/edit/query/conversion/types";

const BASE_URL = "https://feeds.skynews.com/feeds/rss/";
const POSTFIX = ".xml";

// not a config but rss initialisation object or something??

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
//Not input but endpoint or something
// whats the /middle-bit/ of a url called? - it is a subdirectory
// type subdirectoryObject
// topSubDirectoryObjetct, usSubDirectoryObject
//////////////////////////////////////////////
///////////////////////////////////////////
// Conversions test
const articleMap = {
	category: "string",
	datePublished: "string",
	description: "string",
	headline: "string",
	id: "string",
	image: "object",
	video: "object",
};

const itemsConversion: ConversionObject = {
	id: "items",
	iterable: true,
	map: articleMap,
	defaultConversions: [{ id: "toCollectionItem", type: "TRANSFORM" }],

	sort: {},
	filter: {},
	transform: {
		toCollectionItem: "toCollectionItem",
	},
};

// is this used?
const responseMap = {
	id: "string",
	totalEstimatedMatches: "number",
	value: "array",
};

const responseConversion: ConversionObject = {
	map: responseMap,
	defaultConversions: [{ id: "toCollection", type: "TRANSFORM" }],

	transform: {
		toCollection: "toCollection",
	},
};
const articleConversion = {
	conversionId: "RSS:2.0",
	// response: {
	// },
	// really sub objects array
	response: responseConversion,
	// really sub objects
	subConversions: [itemsConversion],
	// iterable: {
	// 	id: "items",
	// },
};

//////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// We need a type and/explainer
export const SKY_NEWS_ROOT = {
	id: "sky_news_endpoint",
	label: "Select Endpoint",

	// type?
	// type is for our input type
	// if none then there is none
	// in this case we are just using params
	// because it is just a value and not a route?

	queryId: "skyNews",

	params: [endpoint], // required? / yes

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: articleConversion,
};
