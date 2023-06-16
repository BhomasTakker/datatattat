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

//Not input but endpoint or something
// whats the /middle-bit/ of a url called? - it is a subdirectory
// type subdirectoryObject
// topSubDirectoryObjetct, usSubDirectoryObject
const inputObject = {
	id: "sky_endpoint",
	label: "Select Endpoint",

	baseUrl: BASE_URL,
	postfix: POSTFIX,

	type: "select",
	endpoints: ENDPOINTS,
	defaultEndpoint: "home",
	params: [],

	endpointObjects: {
		us: {
			id: "sky_us_endpoint",
			baseUrl: BASE_URL,
			postfix: POSTFIX,
			type: "select",
			endpoints: ENDPOINTS,
			defaultEndpoint: "home",
			params: [],
		},
	},
};

export const SKY_NEWS_RSS_CONFIG_OBJECT = {
	// baseUrl: BASE_URL,
	endpoints: ENDPOINTS,
	// defaultEndpoint: ENDPOINTS.home,
	// postfix: POSTFIX,
	endpointInput: inputObject,
};
