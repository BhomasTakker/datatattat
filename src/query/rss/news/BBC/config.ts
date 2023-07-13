const BASE_URL = "http://feeds.bbci.co.uk/";
const POSTFIX = "/rss.xml";

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
	"Top Stories" = "news",
	World = "news/world",
	UK = "news/uk",
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

enum UK_ENDPOINTS {
	"Top Stories" = "",
	England = "england",
	Scotland = "scotland",
	Wales = "wales",
	"N. Ireland" = "northern_ireland",
	Alba = "naidheachdan",
	Cymru = "cymrufyw",
	"Isle of Man" = "isle_of_man",
	Guernsey = "guernsey",
	Jersey = "jersey",
}

enum ENGLAND_ENDPOINTS {
	"Top Stories" = "",
	"North East" = "",
	"North West" = "",
	"Yorkshire & Lincolnshire" = "",
	"East Midlands" = "",
	"West Midlands" = "",
	"West & South West" = "",
	"East" = "",
	"South" = "",
	"London & South East" = "",
	"Isle of Man & Channel Islands" = "",
}

const englandDirectoryObject = {
	id: "bbc_england_directory",
	label: "Region",
	baseUrl: `${BASE_URL}news/england`,
	postfix: POSTFIX,
	type: "select",
	endpoints: ENGLAND_ENDPOINTS,
	defaultEndpoint: "Top Stories",
	params: [],
};

const ukDirectoryObject = {
	id: "bbc_uk_directory",
	label: "UK News",
	baseUrl: `${BASE_URL}news/uk`,
	postfix: POSTFIX,
	type: "select",
	endpoints: UK_ENDPOINTS,
	defaultEndpoint: "Top Stories",
	params: [],

	endpointObjects: {
		England: englandDirectoryObject,
	},
};

const inputObject = {
	id: "bbc_endpoint",
	label: "BBC Select Endpoint",
	baseUrl: BASE_URL,
	postfix: POSTFIX,
	type: "select",
	endpoints: ENDPOINTS,
	defaultEndpoint: "Top Stories",
	params: [],
	endpointObjects: {
		UK: ukDirectoryObject,
	},
};

export const BBC_RSS_CONFIG_OBJECT = {
	// baseUrl: BASE_URL,
	endpoints: ENDPOINTS,
	// defaultEndpoint: ["News"],
	// postfix: POSTFIX,

	endpointInput: inputObject,
};

//We need an endpoint object
// if i.e. objects_news exists
// create it
