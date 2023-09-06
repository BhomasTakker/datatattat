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

const CONVERSIONS = {
	toArticleList: "toArticleList",
	toArticleList2: "toArticleList2",
	toArticleList3: "toArticleList3",
} as const;

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
const articleConversion = {
	conversionId: "RSS:DEFAULT",
	// response: {
	// },
	// really sub objects array
	iterable: {
		id: "items",
	},
};

export const SKY_NEWS_ROOT = {
	id: "sky_news_endpoint",
	label: "Select Endpoint",

	//type?

	queryId: "skyNews",

	params: [endpoint], // required?

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: articleConversion,
};
