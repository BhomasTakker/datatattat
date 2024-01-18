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

const dataConversion = {
	conversionId: "DATA:POLICE:UK",
	response: responseConversion,
	// really sub objects array
	subConversions: [valueConversion],
	// iterable: valueConversion,
};

export enum CRIMES {
	All = "All",
	"Violent Crime and Sexual Offences" = "Violent Crime and Sexual Offences",
	Shoplifting = "Shoplifting",
	"Public Order" = "Public Order",
	"Arson and Criminal Damage" = "Arson and Criminal Damage",
	"Weapons Possession" = "Weapons Possession",
	"Other Theft" = "Other Theft",
	"Bicycle Theft" = "Bicycle Theft",
	"Anti Social Behaviour" = "Anti Social Behaviour",
	"Vehicle Crime" = "Vehicle Crime",
	Robbery = "Robbery",
	Drugs = "Drugs",
	Other = "Other",
	"Theft From Person" = "Theft From Person",
	Burglary = "Burglary",
}

const crime = {
	type: "select",
	id: "crime",
	label: "crime",
	key: "crime",
	options: CRIMES,
	// need add
	defaultEndpoint: "all-crime",
};

const lat = {
	type: "text",
	id: "latitude",
	label: "latitude",
	key: "latitude",
	max: 90,
	min: -90,
};

const lng = {
	// number does not work

	type: "text",
	// defaultValue: 0,
	id: "longitude",
	label: "longitude",
	key: "longitude",
	min: -180,
	max: 180,
};

const year = {
	type: "number",
	id: "year",
	label: "year",
	key: "year",
	min: 2000,
	// get current....
	max: 2024,
};

const month = {
	type: "number",
	id: "month",
	label: "month",
	key: "month",
	min: 1,
	max: 12,
};

// Street crime from point
const streetCrime = {
	id: "data_police_uk_street_crime_endpoint",
	info: `Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt 
	ut labore et dolore magna aliqua.`,

	queryId: "data_police_uk_street_crime",
	params: [crime, lat, lng, year, month],

	conversions: dataConversion,

	// notsure if should add to each but?
	// conversions: CONVERSIONS,
};

// There is stop and search data...
// Again we should look to collate this data ourselves and allow use
// Thinking this comes in with D3?
// select an area then view stats - crimes by number / resolutions by force, etc
// Go down to specific - this street had x amount of violent crimes and y amount of successful resolutions
// And this becomes our case study in an election year
// Think your query could throw a query at a DB
// return that data and use in components
///////////////////////////////////////////////
// outcome data & outcomes for a specific crime
// some other data, force data etc

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
