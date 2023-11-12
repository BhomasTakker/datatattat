import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";

export const ARTICLE_STACK = {
	id: "ArticleStack",
	info: "ArticleStack",
	title: "Article Stack",

	props: [
		...COMPONENT_DETAILS,
		// Colud be a generic / id could change but the rest the same
		{
			id: "stackDirection",
			type: "select",
			defaultValue: "row",
			options: ["row", "column", "row-reverse", "column-reverse"],
			label: "Stack Direction",
			info: "StackDirection",
		},
		{
			id: "alignItems",
			type: "select",
			defaultValue: "center",
			options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
			label: "Align Items",
			info: "AlignItems",
		},
		{
			id: "justifyContent",
			type: "select",
			defaultValue: "center",
			options: [
				"flex-start",
				"center",
				"flex-end",
				"space-between",
				"space-around",
				"space-evenly",
			],
			label: "Justify Content",
			info: "JustifyContent",
		},
		{
			id: "spacing",
			type: "number",
			defaultValue: 1,
			min: 0,
			label: "Spacing",
			info: "StackSpacing",
		},
		{
			id: "dividerVariant",
			type: "select",
			defaultValue: "none",
			options: ["none", "vertical", "horizontal"],
			label: "Divider Variant",
			info: "DividerVariant",
		},
		{
			type: "title",
			title: "Article Card Controls",
		},
	],
} as const;
