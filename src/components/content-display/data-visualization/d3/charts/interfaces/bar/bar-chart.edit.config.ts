import { D3_CHARTS_AXIS, D3_CHARTS_DETAILS } from "../../edit/base.edit";

export const D3_BAR_CHART = {
	id: "BarChart",
	info: "Nothing here",
	title: "BarChart Component",

	props: [
		{
			type: "title",
			title: "Bar Chart Props",
		},
		...D3_CHARTS_DETAILS,
		...D3_CHARTS_AXIS,
		{
			type: "title",
			title: "Select colors and color group",
		},
		{
			id: "colorKey",
			type: "text",
			label: "Color Key",
			info: "ColorScaleKey",
		},
		// {
		// 	// text-toggle has a buug - does not keep values / defaults to off it seems / if value be on
		// 	// needs to be array and color select
		// 	id: "colorRange",
		// 	type: "text",
		// 	label: "Color Range",
		// 	info: "ColorRange",
		// },
		// { type: "title", title: "Data Conversions" },
		// {
		// 	id: "dataConversions",
		// 	type: "conversions",
		// },
		// {
		// 	id: "testColor",
		// 	type: "color",
		// 	label: "Select Color",
		// 	info: "ColorSelect",
		// },
		{
			id: "colorRange",
			type: "array",
			label: "We need a title for this",
			info: "Array thing",
			title: "Select Colors",
			// We need to allow an object 'shape'
			input: {
				id: "arrayColor",
				type: "color",
				label: "Select Color",
				info: "ColorSelect",
			},
		},
	],
};
