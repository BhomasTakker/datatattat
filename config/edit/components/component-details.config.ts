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
				id: "componentTitleVariant",
				type: EditInputs.select,
				options: ["Primary", "Secondary"],
				label: "Component Title Variant",
				info: "ComponentTitleVariant",
			},
			{
				id: "componentTitleLink",
				type: EditInputs.text,
				label: "Component Title",
				info: "ArticleListtTitle",
			},
		],
	},
	{
		id: "showComponentDescription",
		type: EditInputs.show,
		label: "Show Description",
		info: "ArticleListtShowDescription",
		inputs: [
			{
				id: "componentDescription",
				type: "text",
				label: "Component Description",
				info: "ArticleListDescription",
			},
			{
				id: "componentDescriptionVariant",
				type: "select",
				options: ["Primary", "Secondary"],
				label: "Component Description Variant",
				info: "DescriptionVariant",
			},
		],
	},
];
