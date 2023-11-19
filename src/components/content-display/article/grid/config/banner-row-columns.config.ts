import { MARGINS } from "config/styles/styles.config";
import { ArticleGridConfig } from "./article-grid.controller.config";

export const bannerRowColumns: ArticleGridConfig = {
	feature: { item: 0 },
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-large-row",
			// these?
			// need set these / use remainder
			items: [1, 5],
			limit: 5,
		},
		{
			variant: "column",
			componentVariant: "medium-large-row",
			items: [6, 11],
			limit: 5,
		},
	],

	gridTemplateAreas: '"feature feature" "stack1 stack2"',

	gridTemplateColumns: "50% 50%",
	gridTemplateRows: "450px 1fr",
	gap: MARGINS.MIDSMALL,
};

export const bannerRowColumnsSmall: ArticleGridConfig = {
	feature: { item: 0 },
	stacks: [
		{
			variant: "column",
			componentVariant: "medium-large-row",
			// these?
			items: [1, 11],
			limit: 10,
		},
	],

	gridTemplateAreas: '"feature" "stack1"',

	gridTemplateColumns: "100%",
	gridTemplateRows: "450px 1fr",
	gap: MARGINS.MIDSMALL,
};
