import { ConversionObject } from "@/src/components/edit/query/conversion/types";

const responseConversion: ConversionObject = {
	map: {},
	defaultConversions: [],
	sort: {},
	filter: {},
	transform: {},
	// iterable: true,
};

const itemsConversion: ConversionObject = {
	id: "results",
	iterable: true,
	map: {},
	defaultConversions: [],

	sort: {},
	filter: {},
	transform: {},
};

// Conversion should be a default - or we split down type
// Default XXX conversion - Iterable Main
const defaultConversion = {
	conversionId: "DEFAULT:XLSX",
	response: responseConversion,
	// really sub objects array
	subConversions: [itemsConversion],
	// iterable: valueConversion,
};

const url = {
	type: "text",
	id: "url",
	label: "xlsx url",
	key: "url",
};

export const XLSX_BY_URL_ROOT = {
	id: "xlsx_by_url_endpoint",
	label: "Select URL",

	queryId: "xlsxByUrl",

	params: [url], // required?

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: defaultConversion,
};
