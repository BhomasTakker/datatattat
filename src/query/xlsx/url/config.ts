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
	conversions: {},
};
