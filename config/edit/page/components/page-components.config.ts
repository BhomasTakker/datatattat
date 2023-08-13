// This should be from a database 100%
export const GRID = {
	id: "grid",
	info: "Grid",
	title: "Grid",
	components: "CONTENT:COMPONENTS",
	props: [
		{
			max: 10,
			min: 1,
			info: "",
			// never use type!
			type: "number",
			id: "gridRows",
			label: "Grid Rows",
			key: "gridRows",
		},
		{
			max: 10,
			min: 1,
			info: "",
			type: "number",
			id: "gridColumns",
			label: "Grid Columns",
			key: "gridColumns",
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
} as const;

export const STACK = {
	id: "stack",
	info: "stack",
	title: "Stack",
	components: "CONTENT:COMPONENTS",
	props: [
		{
			type: "text", // select
			id: "direction",
			label: "Direction",
			key: "direction",
		},
	],
} as const;

export const DISPLAY = {
	id: "display",
	info: "display",
	title: "Display",
	components: "CONTENT:COMPONENTS",
	props: [
		{
			type: "text", // select
			id: "displayType",
			label: "Display Type",
			key: "displayType",
			// probably use props for type props
		},
	],
} as const;
