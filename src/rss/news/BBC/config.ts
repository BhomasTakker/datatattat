const BASE_URL = "http://feeds.bbci.co.uk/";
const POSTFIX = "rss.xml";

// not a config but rss initialisation object or something??

//export BBC_ENDPOINTS
//////////////////////////////
//We need to split endpoints
// selecting news will load another object
// then can add World, etc
// Regions, etc
// Recursive components
/////////////////////////
enum ENDPOINTS {
	News = "news",
	World = "news/world",
	Uk = "news/uk",
	Africa = "news/africa",
	Asia = "news/asia",
	China = "news/asia/china",
	India = "news/asia/india",
	Australia = "news/australia",
	Europe = "news/europe",
	"Latin America" = "news/latin_america",
	"Middle East" = "news/middle_east",
	"US and Canada" = "news/us_and_canada",
	///////////////////////////////////
	//features
	"Ukraine War" = "world-60525350",
	//////////////////////////////////
	business = "news/business",
	politics = "news/politics",
	health = "news/health",
	education = "news/education",
	"Science and Environment" = "news/science_and_environment",
	technology = "news/technology",
	"Entertainment and Arts" = "news/entertainment_and_arts",
	///////////////////////////////////
	// Regions
	Leicester = "news/england/leicester",
}

const inputObject = {
	type: "select",
	endpoints: ENDPOINTS,
	default: ENDPOINTS["News"],
	params: [],
};

export const BBC_RSS_CONFIG_OBJECT = {
	baseUrl: BASE_URL,
	endpoints: ENDPOINTS,
	defaultEndpoint: ["News"],
	postfix: POSTFIX,

	endpointInput: inputObject,
};

//We need an endpoint object
// if i.e. objects_news exists
// create it
