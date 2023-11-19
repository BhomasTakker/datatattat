import { MARGINS } from "config/styles/styles.config";
import { ArticleGridConfig } from "./article-grid.controller.config";

export const bannerList: ArticleGridConfig = {
	feature: { item: 0 },
	lists: [
		{
			variant: "compact-standard",
			items: [1, 5],
			limit: 5,
		},
		{
			variant: "compact-standard",
			items: [6, 11],
			limit: 5,
		},
	],

	gridTemplateAreas: '"feature feature" "list1 list2"',

	gridTemplateColumns: "50% 50%",
	gridTemplateRows: "300px 1fr",
	gap: MARGINS.MIDSMALL,
};

export const bannerListSmall: ArticleGridConfig = {
	feature: { item: 0 },
	lists: [
		{
			variant: "compact-standard",
			items: [1, 11],
			limit: 10,
		},
	],

	gridTemplateAreas: '"feature feature" "list1 list2"',

	gridTemplateColumns: "100%",
	gridTemplateRows: "450px 1fr",
	gap: MARGINS.MIDSMALL,
};
