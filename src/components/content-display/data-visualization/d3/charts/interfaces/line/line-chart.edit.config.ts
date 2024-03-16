import { D3_CHARTS_DETAILS, D3_CHARTS_AXIS } from "../../edit/base.edit";

export const D3_LINE_CHART = {
	id: "LineChart",
	info: "Nothing here",
	title: "LineChart Component",
	props: [
		{
			type: "title",
			title: "Line Chart Props",
		},
		...D3_CHARTS_DETAILS,
		...D3_CHARTS_AXIS,
		{
			id: "lineThickness",
			type: "number",
			label: "Line Thickness",
			info: "The thickness of the drawn line.",
		},
		{
			id: "lineColor",
			type: "color",
			label: "Line Color",
			info: "The color of the drawn Line.",
		},
		{
			id: "showPoints",
			type: "switch",
			defaultValue: false,
			label: "Show Points",
			info: "Show individual points on line",
		},
		{
			id: "pointRadius",
			type: "number",
			label: "Point Radius",
			info: "The radius of the rendered points.",
		},
		{
			id: "pointColor",
			type: "color",
			label: "Point Color",
			info: "The color of the rendered points.",
		},
	],
};
