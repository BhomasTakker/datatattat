import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";

export const ARTICLE_GRID_STACK = {
	id: "ArticleGrid",
	info: "ArticleGrid",
	title: "Article Grid",

	props: [
		...COMPONENT_DETAILS,
		{
			type: "title",
			title: "Grid Props",
		},
		{
			id: "variant",
			type: "select",
			// input array from somewhere
			options: [
				"display1",
				"banner-list",
				"banner-row-columns",
				"column-columns",
			],
			label: "Grid Variant",
			info: "ArticleGridVariant",
		},
	],
};
