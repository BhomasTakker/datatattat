import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";

export const ARTICLE_DISPLAY_STACK = {
	id: "ArticleStack",
	info: "ArticleStack",
	title: "Article Stack",

	props: [
		...COMPONENT_DETAILS,
		{
			type: "title",
			title: "Stack Props",
		},
		{
			id: "variant",
			type: "select",
			// input array from somewhere
			options: ["column", "row", "column-scroll", "row-scroll"],
			label: "Stack Variant",
			info: "ArticleStackVariant",
		},
		{
			id: "componentVariant",
			type: "select",
			options: [
				"large-row",
				"large-column",
				"medium-row",
				"medium-column",
				"compact",
			],
			label: "Component Variant",
			info: "ArticleStackComponentVariant",
		},
		{
			id: "stackLimit",
			type: "number",
			label: "Limit",
			info: "ArticleStackLimit",
			min: 0,
			default: 0,
			defaultValue: 0,
		},
	],
};
