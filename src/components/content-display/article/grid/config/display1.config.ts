import { MARGINS } from "config/styles/styles.config";
import { ArticleGridConfig } from "./article-grid.controller.config";

export const articleGridDisplay: ArticleGridConfig = {
	displays: [
		{
			item: 0,
			variant: "large-row",
		},
	],
	stacks: [
		{
			variant: "row",
			componentVariant: "small-column",
			limit: 4,
			items: [1, 5],

			flexWrap: "nowrap",
			maxWidth: 1200,
			minWidth: 800,
			width: "100%",
		},
		{
			variant: "column",
			componentVariant: "compact-2-line",
			limit: 8,
			items: [0, 10],

			height: "100%",
			minWidth: 200,
			width: "100%",
			justifyContent: "space-between",
		},
	],
	lists: [],
	// feature: {},

	gridTemplateAreas: '"display1 stack2" "stack1 stack2"',

	gridTemplateColumns: "80% 20%",
	gridTemplateRows: "2fr",
	gap: MARGINS.MIDSMALL,
};

export const articleGridDisplayExtraLarge: ArticleGridConfig = {
	...articleGridDisplay,
};

export const articleGridDisplayLarge: ArticleGridConfig = {
	...articleGridDisplay,
};

export const articleGridDisplayMedium: ArticleGridConfig = {
	...articleGridDisplay,
	displays: [
		{
			item: 0,
			variant: "large-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-row",
			limit: 4,
			items: [1, 5],

			flexWrap: "nowrap",
			// maxWidth: 800,
			// minWidth: 600,
			width: "100%",
		},
		{
			variant: "row",
			componentVariant: "compact-3-line",
			limit: 5,
			items: [0, 10],
			flexWrap: "nowrap",

			// height: "100%",
			minWidth: 200,
			// maxWidth: 250,
			width: "100%",
			justifyContent: "space-between",
		},
	],
	gridTemplateAreas: '"display1 stack1" "stack2 stack2"',

	gridTemplateColumns: "55% 45%",
	gridTemplateRows: "2fr",
};

export const articleGridDisplaySmall: ArticleGridConfig = {
	...articleGridDisplay,
	displays: [
		{
			item: 0,
			variant: "large-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-row",
			limit: 4,
			items: [1, 5],

			flexWrap: "nowrap",
			// maxWidth: 800,
			// minWidth: 600,
			width: "100%",
		},
		{
			variant: "column",
			componentVariant: "compact-column",
			limit: 5,
			items: [0, 5],
			// flexWrap: "nowrap",

			height: "100%",
			minWidth: 200,
			// maxWidth: 250,
			width: "100%",
			justifyContent: "center",
		},
	],
	gridTemplateAreas: '"display1 stack2" "stack1 stack2"',

	gridTemplateColumns: "65% 35%",
	gridTemplateRows: "2fr",
};

export const articleGridDisplayExtraSmall: ArticleGridConfig = {
	...articleGridDisplay,
	displays: [
		{
			item: 0,
			variant: "large-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-row",
			limit: 10,
			items: [0, 10],

			flexWrap: "nowrap",
			// maxWidth: 800,
			// minWidth: 600,
			width: "100%",
		},
		// {
		// 	variant: "column",
		// 	componentVariant: "compact-column",
		// 	limit: 0,
		// 	items: [0, 10],
		// 	// flexWrap: "nowrap",

		// 	height: "100%",
		// 	minWidth: 200,
		// 	// maxWidth: 250,
		// 	width: "100%",
		// 	justifyContent: "center",
		// },
	],
	gridTemplateAreas: '"display1" "stack1"',

	gridTemplateColumns: "100%",
	gridTemplateRows: "1fr",
};
