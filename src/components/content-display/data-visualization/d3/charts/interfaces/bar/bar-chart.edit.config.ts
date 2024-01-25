export const D3_BAR_CHART = {
	id: "BarChart",
	info: "Nothing here",
	title: "BarChart Component",

	props: [
		{
			type: "title",
			title: "Bar Chart Props",
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
			title: "We need to add data filters, parse, sort, etc",
		},
	],
};
