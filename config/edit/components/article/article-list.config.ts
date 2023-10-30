// argument to keep with component a-la article-list.edit.config.ts
export const ARTICLE_LIST = {
	id: "ArticleList",
	info: "ArticleList",
	title: "Article List",
	// Variants may not be a good idea
	// How would you change props for a variant?
	// Okay if you don't change available props
	/////////////////////////////////////////////
	// In this instance Variant should be css
	// What the layout is
	// how it responds to sizes etc
	////////
	// i.e. first of every three is 100% width else 50%
	// mobile view
	// opens you to a large number of variants
	// You can mix with Component?
	///////////////////////////////
	// It's one component effectively it doesn't matter
	// Fill your boots - if it doesn't work make a new one
	// That's kinda half the point
	// Should be easy to make
	// Best answer is porbably ArticleList is flex
	// ArticleGrid is grid controls / 'variants' to suit
	// Or just Article list 1,2,3,a,b,c,etc
	props: [
		{
			id: "componentTitle",
			type: "text",
			label: "Component Title",
			info: "ArticleListtTitle",
		},
		{
			id: "componentTitleVariant",
			type: "select",
			options: ["Primary", "Secondary"],
			label: "Component Title Variant",
			info: "ComponentTitleVariant",
		},
		{
			id: "componentDescription",
			type: "text",
			label: "Component Description",
			info: "ArticleListDescription",
		},
		{
			id: "componentDescriptionVariant",
			type: "select",
			options: ["Primary", "Secondary"],
			label: "Component Description Variant",
			info: "DescriptionVariant",
		},
		// Add title
		// If type = title just add a title as a divider
		// Add a horizontal rule etc
		{
			type: "title",
			title: "Item Props",
		},
		{
			id: "useAvatar",
			type: "switch",
			defaultValue: true,
			label: "Avatar",
			info: "ArticleListUseAvatar",
		},
		{
			id: "itemTitleVariant",
			type: "select",
			options: ["Primary", "Secondary"],
			label: "Item Title Variant",
			info: "ItemTitleVariant",
		},
		{
			// We need to type these?
			// this object is passed into the input component
			id: "itemTitleMaxLines",
			type: "number",
			label: "Item Title Max Lines",
			info: "ItemTitleMaxLines",
			min: 1,
		},
		{
			id: "showDescription",
			type: "switch",
			defaultValue: true,
			label: "Show Description",
			info: "ArticleListshowDescription",
		},
		{
			id: "itemDescriptionVariant",
			type: "select",
			options: ["Primary", "Secondary"],
			label: "Item Description Variant",
			info: "ItemDescriptionVariant",
		},
		{
			id: "itemDescriptionMaxLines",
			type: "number",
			label: "Item Description Max Lines",
			info: "ItemDescriptionMaxLines",
			min: 1,
		},
		{
			id: "itemDetailsVariant",
			type: "select",
			// get options from somewhere
			options: ["space-between", "stack"],
			label: "Item Details Variant",
			info: "itemDetailsVariant",
		},
		{
			id: "showPublished",
			type: "switch",
			defaultValue: false,
			label: "Show Published At",
			info: "ArticleListShowPublished",
		},
		{
			id: "showAuthor",
			type: "switch",
			defaultValue: false,
			label: "Show Author",
			info: "ArticleListShowAuthor",
		},
		{
			id: "showPublisher",
			type: "switch",
			defaultValue: false,
			label: "Show Publisher",
			info: "ArticleListShowPublisher",
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
} as const;
