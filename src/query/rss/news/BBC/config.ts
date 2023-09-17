import { baseRSSConversion } from "../../rss-feed.config";

// const BASE_URL = "http://feeds.bbci.co.uk/";
// const POSTFIX = "/rss.xml";

// not a config but rss initialisation object or something??

//export BBC_ENDPOINTS
//////////////////////////////
//We need to split endpoints
// selecting news will load another object
// then can add World, etc
// Regions, etc
// Recursive components
/////////////////////////
// enum ENDPOINTS {
// 	"Top Stories" = "news",
// 	World = "news/world",
// 	UK = "news/uk",
// 	Africa = "news/africa",
// 	Asia = "news/asia",
// 	China = "news/asia/china",
// 	India = "news/asia/india",
// 	Australia = "news/australia",
// 	Europe = "news/europe",
// 	"Latin America" = "news/latin_america",
// 	"Middle East" = "news/middle_east",
// 	"US and Canada" = "news/us_and_canada",
// 	///////////////////////////////////
// 	//features
// 	"Ukraine War" = "world-60525350",
// 	//////////////////////////////////
// 	business = "news/business",
// 	politics = "news/politics",
// 	health = "news/health",
// 	education = "news/education",
// 	"Science and Environment" = "news/science_and_environment",
// 	technology = "news/technology",
// 	"Entertainment and Arts" = "news/entertainment_and_arts",
// 	///////////////////////////////////
// 	// Regions
// 	Leicester = "news/england/leicester",
// }

// enum UK_ENDPOINTS {
// 	"Top Stories" = "",
// 	England = "england",
// 	Scotland = "scotland",
// 	Wales = "wales",
// 	"N. Ireland" = "northern_ireland",
// 	Alba = "naidheachdan",
// 	Cymru = "cymrufyw",
// 	"Isle of Man" = "isle_of_man",
// 	Guernsey = "guernsey",
// 	Jersey = "jersey",
// }

// enum ENGLAND_ENDPOINTS {
// 	"Top Stories" = "",
// 	"North East" = "",
// 	"North West" = "",
// 	"Yorkshire & Lincolnshire" = "",
// 	"East Midlands" = "",
// 	"West Midlands" = "",
// 	"West & South West" = "",
// 	"East" = "",
// 	"South" = "",
// 	"London & South East" = "",
// 	"Isle of Man & Channel Islands" = "",
// }

// const englandDirectoryObject = {
// 	id: "bbc_england_directory",
// 	label: "Region",
// 	baseUrl: `${BASE_URL}news/england`,
// 	postfix: POSTFIX,
// 	type: "select",
// 	endpoints: ENGLAND_ENDPOINTS,
// 	defaultEndpoint: "Top Stories",
// 	params: [],
// };

// const ukDirectoryObject = {
// 	id: "bbc_uk_directory",
// 	label: "UK News",
// 	baseUrl: `${BASE_URL}news/uk`,
// 	postfix: POSTFIX,
// 	type: "select",
// 	endpoints: UK_ENDPOINTS,
// 	defaultEndpoint: "Top Stories",
// 	params: [],

// 	endpointObjects: {
// 		England: englandDirectoryObject,
// 	},
// };

// const inputObject = {
// 	id: "bbc_endpoint",
// 	label: "BBC Select Endpoint",
// 	baseUrl: BASE_URL,
// 	postfix: POSTFIX,
// 	type: "select",
// 	endpoints: ENDPOINTS,
// 	defaultEndpoint: "Top Stories",
// 	params: [],
// 	endpointObjects: {
// 		UK: ukDirectoryObject,
// 	},
// };

// export const BBC_RSS_CONFIG_OBJECT = {
// 	// baseUrl: BASE_URL,
// 	endpoints: ENDPOINTS,
// 	// defaultEndpoint: ["News"],
// 	// postfix: POSTFIX,

// 	endpointInput: inputObject,
// };

//We need an endpoint object
// if i.e. objects_news exists
// create it

//////////////////////////////////////////////////
// NEW //
///////////////////////////////////////////////////
// that this doesn't work with default values suggests a problem?
// If we are using the value then we should be using a map / surely
enum BBC_MAIN_ENDPOINTS {
	"Top Stories" = "Top Stories",
	World = "World",
	UK = "UK",
}

const MAIN_ENDPOINT_OBJECTS = {
	["Top Stories"]: {
		id: "bbc_news_top_stories_endpoint",
		/** Shown Label - if this is an input */
		label: "There isn't one",
		queryId: "bbc_top_stories",

		/** Unused - The info string / md text */
		info: "id or explanation - or just an explanation",

		conversions: baseRSSConversion,
		params: [],
	},
	World: {
		id: "bbc_news_world_endpoint",
		/** Shown Label - if this is an input */
		label: "There isn't one",
		queryId: "bbc_news_world",

		/** Unused - The info string / md text */
		info: "id or explanation - or just an explanation",

		conversions: baseRSSConversion,
		params: [],
	},
	UK: {
		id: "bbc_news_uk_endpoint",
		/** Shown Label - if this is an input */
		label: "There isn't one",
		queryId: "bbc_news_uk",

		/** Unused - The info string / md text */
		info: "id or explanation - or just an explanation",

		conversions: baseRSSConversion,
		params: [],
	},
};

// create a template or blank config
export const BBC_NEWS_ROOT = {
	id: "bbc_news_root",
	label: "Select Endpoint",
	type: "select",

	endpoints: BBC_MAIN_ENDPOINTS,
	defaultEndpoint: "Top Stories",
	// why is this here? rem
	baseUrl: "Im a Base URL",
	postfix: "Im a postfix",

	info: "we need a description of what this does",

	params: [],

	endpointObjects: MAIN_ENDPOINT_OBJECTS,
};
