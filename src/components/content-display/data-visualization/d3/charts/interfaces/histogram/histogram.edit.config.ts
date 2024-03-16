import { D3_CHARTS_DETAILS, D3_CHARTS_AXIS } from "../../edit/base.edit";

export const D3_HISTOGRAM_CHART = {
	id: "Histogram",
	info: "Nothing here",
	title: "Histogram Chart Component",
	props: [
		{
			type: "title",
			title: "Histogram Chart Props",
		},
		...D3_CHARTS_DETAILS,
		...D3_CHARTS_AXIS,
		// Bin would have an object
		{
			id: "useBinnedData",
			type: "show",
			label: "Use Data Bin",
			info: "Create a data bin",
			inputs: [
				{
					id: "binDataKey",
					type: "text",
					label: "Value Key",
					info: "Key assigned to binned value.",
				},
				{
					id: "binSourceKey",
					type: "text",
					label: "Data Id",
					info: "Key of the data to be grouped.",
				},
				{
					id: "groupId",
					type: "select",
					options: ["timeMonths"],
					label: "Group operation",
					info: "The operation to create groups.",
				},
				{
					id: "operationId",
					type: "select",
					options: ["sum"],
					label: "Value operation",
					info: "The operation used on the grouped data to create a new data set.",
				},
			],
		},
	],
};
