import { D3_CHARTS_AXIS, D3_CHARTS_DETAILS } from "../../edit/base.edit";

export const D3_SCATTER_CHART = {
	id: "ScatterChart",
	info: "Nothing here",
	title: "ScatterChart Component",
	props: [
		...D3_CHARTS_DETAILS,
		...D3_CHARTS_AXIS,
		{
			id: "colorKey",
			type: "text",
			label: "Color Key",
			info: "The identifier you want to use to distinguish color",
		},
		{
			id: "info1",
			type: "title",
			title:
				"We need to add data filters, parse, sort, etc. Or, that is better done befor the data gets loaded. You sort that - we'll sort this. For now at least",
		},
	],
};
