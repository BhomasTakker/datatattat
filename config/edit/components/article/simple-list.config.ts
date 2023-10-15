// Elsewhere but keep all available / different sets?
// Elsewhere but We can group then use a set to build and exclude crossover
const LIST_ITEMS = ["SimpleItem", "TitleItem", "DisplayItem"];

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
			// Need to be a component select type
			// Load component config for props etc
			type: "select",
			label: "List Component",
			info: "ListComponentInfo",
			options: LIST_ITEMS,
		},
	],
} as const;
