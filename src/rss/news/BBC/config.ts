const BASE_URL = "http://feeds.bbci.co.uk/";
const POSTFIX = "rss.xml";

// not a config but rss initialisation object or something??

//export BBC_ENDPOINTS
enum ENDPOINTS {
	news = "news",
}

const inputObject = {
	type: "select",
	endpoint: ENDPOINTS,
	default: ENDPOINTS.news,
	params: [],
};

export const BBC_RSS_CONFIG_OBJECT = {
	baseUrl: BASE_URL,
	endpoints: ENDPOINTS,
	defaultEndpoint: ENDPOINTS.news,
	postfix: POSTFIX,

	endpointInput: inputObject,
};

//We need an endpoint object
// if i.e. objects_news exists
// create it
