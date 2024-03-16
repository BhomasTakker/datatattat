const amount = {
	type: "text", // change to number
	id: "amount",
	label: "amount",
	key: "amount",
};

export const topN = [
	{
		...amount,
		info: "Take the top N results of returned data.",
	},
];

export const lastN = [
	{
		...amount,
		info: "Take the top N results of returned data.",
	},
];

export const skipN = [
	{
		...amount,
		info: "Skip the first N results of returned data.",
	},
];

export const skipLastN = [
	{
		...amount,
		info: "Skip the last N results of returned data.",
	},
];

export const distinctKey = [
	{
		type: "text",
		id: "key",
		label: "key",
		key: "key",
		info: "Select the object key to be distinct. Filter will take the first encountered.",
	},
];

export const includes = [
	{
		type: "text",
		id: "key",
		label: "key",
		key: "key",
		info: "Select the object key to be distinct. Filter will take the first encountered.",
	},
	{
		// should be array
		type: "text",
		id: "values",
		label: "values",
		key: "values",
		info: "Create the list of included values ",
	},
];

export const numberConditional = [
	{
		type: "text",
		id: "key",
		label: "key",
		key: "key",
		info: "Select the object property to be filtered against.",
	},
	{
		// should be array
		type: "number",
		id: "n",
		label: "value",
		key: "n",
		info: "The number to filter against.",
	},
];
// in this instance?
export const distinct = [];
export const first = [];
export const last = [];
