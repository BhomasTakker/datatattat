export const D3_SCATTER_CHART = {
	id: "ScatterChart",
	info: "Nothing here",
	title: "ScatterChart Component",
	props: [
		{
			id: "scatterPropsTitle",
			type: "title",
			title: "Scatter Chart Props",
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
			id: "info1",
			type: "title",
			title:
				"We need to add data filters, parse, sort, etc. Or, that is better done befor the data gets loaded. You sort that - we'll sort this. For now at least",
		},
	],
};
