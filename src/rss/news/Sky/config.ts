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

const inputObject = {
	type: "select",
	endpoints: ENDPOINTS,
	default: ENDPOINTS.home,
	params: [],
};

export const SKY_NEWS_RSS_CONFIG_OBJECT = {
	baseUrl: BASE_URL,
	endpoints: ENDPOINTS,
	defaultEndpoint: ENDPOINTS.home,
	postfix: POSTFIX,
	endpointInput: inputObject,
};
