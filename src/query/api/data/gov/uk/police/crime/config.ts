import { ConversionObject } from "@/src/components/edit/query/conversion/types";

enum DATA_POLICE_UK_ENDPOINTS {
	"Street Crime" = "Street Crime",
}

//What the hell is all this...
// Map would / should be used for showing the shape of api no?
const responseMap = {};
const responseConversion: ConversionObject = {
	map: responseMap,
	defaultConversions: [{ id: "toGISFeatureCollection", type: "TRANSFORM" }],

	transform: {
		toGISFeatureCollection: "toGISFeatureCollection",
	},
};

const valueConversion: ConversionObject = {
	id: "data",
	iterable: true,
	map: {},
	defaultConversions: [{ id: "toGISFeatureCollectionItem", type: "TRANSFORM" }],

	sort: {},
	filter: {},
	transform: {
		toGISFeatureCollectionItem: "toGISFeatureCollectionItem",
	},
};

const standingsConversion = {
	conversionId: "DATA:POLICE:UK",
	response: responseConversion,
	// really sub objects array
	subConversions: [valueConversion],
	// iterable: valueConversion,
};

const streetCrime = {
	id: "data_police_uk_street_crime_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "data_police_uk_street_crime",
	params: [
		// lat
		// lon
		// date
		// by crime
	],

	conversions: standingsConversion,

	// notsure if should add to each but?
	// conversions: CONVERSIONS,
};

export const DATA_POLICE_UK = {
	id: "data_police_uk_endpoint",
	label: "Select Endpoint",

	// type?
	type: "select",
	endpoints: DATA_POLICE_UK_ENDPOINTS,

	defaultEndpoint: "Street Crime",

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	// technically shouldn't be one here as no endpoint?
	conversions: [], //ENDPOINTS

	endpointObjects: {
		["Street Crime"]: streetCrime,
	},
};
