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
		type: "text", // change to number
		id: "key",
		label: "key",
		key: "key",
		info: "Select the object key to be distinct. Filter will take the first encountered.",
	},
];
// in this instance?
export const distinct = [];
export const first = [];
export const last = [];
