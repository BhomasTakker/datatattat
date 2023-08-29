export const ARTICLE_LIST = {
	id: "ArticleList",
	info: "ArticleList",
	title: "Article List",
	// Variants may not be a good idea
	// How would you change props for a variant?
	// Okay if you don't change available props
	props: [
		{
			id: "variant",
			type: "select",
			label: "Variant",
			info: "ArticleListVariant",
			//LIST_ITEM_COMPONENTS
			options: ["Variant1", "Variant2", "Variant3"],
		},
		{
			id: "component",
			type: "select",
			label: "Component",
			info: "ArticleListComponent",
			//LIST_ITEM_COMPONENTS
			options: ["Component1", "Component2", "Component3"],
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
} as const;
