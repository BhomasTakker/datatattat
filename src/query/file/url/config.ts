const url = {
	type: "text",
	id: "url",
	label: "file url",
	key: "url",
};

export const FILE_BY_URL_ROOT = {
	id: "file_by_url_endpoint",
	label: "Select URL",

	queryId: "fileByUrl",

	// type
	params: [url], // required?

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: {},
};
