// Elsewhere but keep all available / different sets?
const LIST_ITEMS = ["SimpleItem", "TitleItem"];

export const SIMPLE_ARTICLE_LIST = {
	id: "SimpleArticleList",
	info: "SimpleArticleList",
	title: "Simple Article List",

	// FIX ME
	// Need props else blow up
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
		{
			id: "component",
			type: "select",
			label: "List Component",
			info: "ListComponentInfo",
			options: LIST_ITEMS,
		},
	],
} as const;
