import { ConversionObject } from "@/src/components/edit/query/conversion/types";

enum FOOTBALL_DATA_ORG_ENDPOINTS {
	"Premier League" = "Premier League",
}
/////////////////////////////////////
//What the hell is all this...
const responseMap = {
	id: "string",
	totalEstimatedMatches: "number",
	value: "array",
};
const responseConversion: ConversionObject = {
	map: responseMap,
	defaultConversions: [{ id: "toDataCollection", type: "TRANSFORM" }],

	transform: {
		toDataCollection: "toDataCollection",
	},
};

const valueConversion: ConversionObject = {
	id: "data",
	iterable: true,
	map: {},
	defaultConversions: [{ id: "toDataCollectionItem", type: "TRANSFORM" }],

	sort: {},
	filter: {},
	transform: {
		toDataCollectionItem: "toDataCollectionItem",
	},
};

// hmm / this all looks off to me / however required
const standingsConversion = {
	conversionId: "FOOTBALL:DATA:ORG",
	response: responseConversion,
	// really sub objects array
	subConversions: [valueConversion],
	// iterable: valueConversion,
};

// type me
const premierLeague = {
	id: "football_data_org_pl_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "football_data_org_pl",
	params: [],

	conversions: standingsConversion,

	// notsure if should add to each but?
	// conversions: CONVERSIONS,
};

// Type me
export const FOOTBALL_DATA_ORG = {
	id: "football_data_org_endpoint",
	label: "Select Endpoint",

	// type?
	type: "select",
	endpoints: FOOTBALL_DATA_ORG_ENDPOINTS,

	defaultEndpoint: "Premier League",

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	// technically shouldn't be one here as no endpoint?
	conversions: [], //ENDPOINTS

	endpointObjects: {
		["Premier League"]: premierLeague,
	},
};
