export const D3_LINE_CHART = {
	id: "LineChart",
	info: "Nothing here",
	title: "LineChart Component",
	props: [
		{
			type: "title",
			title: "Line Chart Props",
		},
		{
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
			type: "text-toggle",
			label: "Y Axis Label",
			info: "yAxisLabel",
		},
		{
			id: "xAxisLabel",
			type: "text-toggle",
			label: "X Axis Label",
			info: "xAxisLabel",
		},
		{
			type: "title",
			title:
				"We need to add data filters, parse, sort, etc. Or, that is better done befor the data gets loaded. You sort that - we'll sort this. For now at least",
		},
	],
};
