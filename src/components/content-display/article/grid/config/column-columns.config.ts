import { MARGINS } from "config/styles/styles.config";
import { ArticleGridConfig } from "./article-grid.controller.config";

export const columnColumnsLarge: ArticleGridConfig = {
	displays: [
		{
			item: 0,
			variant: "large-column",
		},
	],
	stacks: [
		{
			variant: "row",
			componentVariant: "small-column",
			limit: 3,
			items: [1, 4],
			justifyContent: "space-between",
			flexWrap: "nowrap",
		},
		{
			variant: "row",
			componentVariant: "small-column",
			limit: 3,
			items: [5, 8],
			justifyContent: "space-between",
			flexWrap: "nowrap",
		},
	],
	lists: [],
	// feature: {},

	gridTemplateAreas: '"display1 stack1" "display1 stack2"',

	gridTemplateColumns: "40% 60%",
	gridTemplateRows: "1fr",
	gap: MARGINS.MIDSMALL,
};

export const columnColumnsMid: ArticleGridConfig = {
	displays: [
		{
			item: 0,
			variant: "medium-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-row",
			limit: 3,
			items: [1, 4],
			height: "100%",
			justifyContent: "space-between",
			flexWrap: "nowrap",
		},
		{
			variant: "row",
			componentVariant: "small-column",
			limit: 4,
			items: [4, 8],

			justifyContent: "space-between",
			flexWrap: "nowrap",
		},
	],
	lists: [],
	// feature: {},

	gridTemplateAreas: '"display1 stack1" "stack2 stack2"',

	gridTemplateColumns: "55% 45%",
	gridTemplateRows: "1fr",
	gap: MARGINS.MIDSMALL,
};

export const columnColumnsMidSmall: ArticleGridConfig = {
	displays: [
		{
			item: 0,
			variant: "large-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-large-row",
			limit: 6,
			items: [1, 7],

			flexWrap: "nowrap",
		},
	],
	lists: [],
	// feature: {},

	gridTemplateAreas: '"display1" "stack1"',
	gridTemplateColumns: "100%",
	gridTemplateRows: "1fr",
	gap: MARGINS.MIDSMALL,
};

export const columnColumnsSmall: ArticleGridConfig = {
	displays: [
		{
			item: 0,
			variant: "medium-column",
		},
	],
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-row",
			limit: 6,
			items: [1, 7],

			flexWrap: "nowrap",
		},
	],
	lists: [],
	// feature: {},

	gridTemplateAreas: '"display1" "stack1"',
	gridTemplateColumns: "100%",
	gridTemplateRows: "1fr",
	gap: MARGINS.MIDSMALL,
};
