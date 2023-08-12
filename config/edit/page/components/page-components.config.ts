// This should be from a database 100%
export const GRID = {
	id: "grid",
	info: "Grid",
	title: "Grid",
	props: [
		{
			max: 10,
			min: 1,
			info: "",
			// never use type!
			type: "text",
			id: "gridRows",
			label: "Grid Rows",
			key: "gridRows",
		},
		{
			max: 10,
			min: 1,
			info: "",
			type: "text",
			id: "gridColumns",
			label: "Grid Columns",
			key: "gridColumns",
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
	components: [],
} as const;

export const STACK = {
	id: "stack",
	info: "stack",
	title: "Stack",
	props: [
		{
			type: "text", // select
			id: "direction",
			label: "Direction",
			key: "direction",
		},
	],
	components: [],
} as const;

export const DISPLAY = {
	id: "display",
	info: "display",
	title: "Display",
	props: [
		{
			type: "text", // select
			id: "displayType",
			label: "Display Type",
			key: "displayType",
			// probably use props for type props
		},
	],
	components: [],
} as const;
