export const SIMPLE_ARTICLE_LIST = {
	id: "SimpleArticleList",
	info: "SimpleArticleList",
	title: "Simple Article List",

	// FIX ME
	// Need else blow up
	props: [
		{
			id: "title",
			type: "text",
			label: "Title",
			info: "SimpleListTitle",
		},
		{
			id: "description",
			type: "text",
			label: "Description",
			info: "SimpleListDescription",
		},
	],
} as const;
