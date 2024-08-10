import { EditInputs } from "@/src/components/edit/inputs/input.map";

export const COMPONENT_DETAILS = [
	{
		id: "showComponentTitle",
		type: EditInputs.show,
		label: "Show Title",
		info: "ArticleListtShowTitle",
		inputs: [
			{
				id: "componentTitle",
				type: EditInputs.text,
				label: "Component Title",
				info: "ArticleListtTitle",
			},
			{
				id: "align",
				type: EditInputs.select,
				label: "Align",
				options: ["left", "center", "right"],
				info: "Title alignment.",
			},
			{
				id: "componentTitleLink",
				type: EditInputs.text,
				label: "Title Link",
				info: "ArticleListtTitle",
			},
		],
	},
];
