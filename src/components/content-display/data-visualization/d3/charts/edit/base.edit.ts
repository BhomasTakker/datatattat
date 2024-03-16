export const D3_CHARTS_DETAILS = [
	{
		id: "title",
		type: "text",
		label: "Title",
		info: "The title to display - keep blank if none.",
	},
];

const textLabelFormatOptions = [
	{
		type: "title",
		title: "Text Label Format Options",
	},
	{
		type: "indent",
		inputs: [
			{
				id: "uppercase",
				type: "switch",
				label: "Uppercase",
				info: "Format text to be in uppercase.",
				// defaultValue: false,
			},
			{
				id: "lowercase",
				type: "switch",
				label: "Lowercase",
				info: "Format text to be in lowercase.",
				// defaultValue: false,
			},
			{
				id: "capitalise",
				type: "switch",
				label: "Capitalise",
				info: "Format text to be capitalised.",
				// defaultValue: false,
			},
			{
				id: "maxLength",
				type: "number",
				label: "Max Length",
				info: "Set a max length for the label.",
				// defaultValue: 100,
			},
			{
				id: "prefix",
				type: "text",
				label: "Prefix",
				info: "Add a prefix",
				// defaultValue: "",
			},
			{
				id: "postfix",
				type: "text",
				label: "Postfix",
				info: "Add a postfix.",
				// defaultValue: "",
			},
			{
				id: "replace",
				type: "text",
				label: "Replace",
				info: "Add two strings separated by a comma - temp measure until I do something properly.",
				// defaultValue: "",
			},
			{
				id: "trim",
				type: "switch",
				label: "Trim",
				info: "Trim whitespace from beginning and end.",
				// defaultValue: false,
			},
			{
				id: "trimStart",
				type: "switch",
				label: "Trim Start",
				info: "Trim whitespace from the beginning of the string only.",
				// defaultValue: false,
			},
		],
	},
];
const numberLabelFormatOptions = [
	{
		type: "title",
		title: "Number Label Format Options",
	},
	{
		type: "indent",
		inputs: [
			{
				id: "dp",
				type: "number",
				label: "Decimal Points",
				info: "Number of decimal points",
				min: 0,
				// defaultValue: 0,
			},
			{
				id: "integer",
				type: "switch",
				label: "Integer",
				info: "An integer is a whole value. There will be 0 decimal points.",
				// defaultValue: false,
			},
		],
	},
];
const dateLabelFormatOptions = [
	{
		type: "title",
		title: "Date Label Format Options",
	},
	{
		type: "indent",
		inputs: [
			{
				id: "format",
				type: "text",
				label: "Custom Format",
				info: "Create the format for the date. See https://d3js.org/d3-time-format",
			},
			{
				// This should almost certainly be a select
				// custom perhaps should be part of this?
				id: "dayWeekMonth",
				type: "switch",
				label: "Day/Week/Month",
				info: "Day/Week/Month - i.e. 22/2/2022",
				// defaultValue: false,
			},
		],
	},
];

type LabelFormOptions =
	| typeof textLabelFormatOptions
	| typeof numberLabelFormatOptions
	| typeof dateLabelFormatOptions;

const axisLabelsFormatMap = new Map<string, LabelFormOptions>([
	["string", textLabelFormatOptions],
	["number", numberLabelFormatOptions],
	["date", dateLabelFormatOptions],
]);

export const D3_CHARTS_AXIS = [
	{
		// it is not x and y axis
		// it is band and linear / or time? / square root / what else could there be?
		id: "yAxisValue",
		type: "text",
		label: "Y Axis Value",
		info: "We need to try and link this into expected data",
	},
	{
		id: "xAxisValue",
		type: "text",
		label: "X Axis Value",
		info: "xAxisValue",
	},
	{
		id: "yAxisLabel",
		type: "text",
		label: "Y Axis Label",
		info: "yAxisLabel",
	},
	{
		id: "xAxisLabel",
		type: "text",
		label: "X Axis Label",
		info: "xAxisLabel",
	},
	// Pretty much for all charts
	{
		// We need to be able to 'wrap' this in a 'namespace'
		// So we don't pollute the component with lots of vars
		// but provide an object with the necessaries
		id: "xAxisType",
		type: "object-select",
		// get from somewhere
		options: ["number", "string", "date"],
		optionId: "xAxisLabelFormatOptions",
		label: "X Axis Type",
		info: "The type of data used for the axis.",
		optionsMap: axisLabelsFormatMap,
	},
	{
		id: "xScaleType",
		type: "select",
		options: ["band", "linear", "time", "square-root", "sequential"],
		label: "X Scale Type",
		info: "Specifies what kind of scale is used to plot values against.",
	},
	{
		id: "yAxisType",
		type: "object-select",
		options: ["number", "string", "date"],
		optionId: "yAxisLabelFormatOptions",
		label: "Y Axis Type",
		info: "The type of data used for the axis.",
		optionsMap: axisLabelsFormatMap,
	},
	{
		id: "yScaleType",
		type: "select",
		options: ["band", "linear", "time", "square-root", "sequential"],
		label: "Y Scale Type",
		info: "Specifies what kind of scale is used to plot values against.",
	},
];
