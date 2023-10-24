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
			id: "title",
			type: "text",
			label: "Title",
			info: "ArticleListtTitle",
		},
		{
			id: "description",
			type: "text",
			label: "Description",
			info: "ArticleListDescription",
		},
		{
			id: "useAvatar",
			type: "switch",
			default: true,
			label: "Avatar",
			info: "ArticleListUseAvatar",
		},
		{
			id: "showDescription",
			type: "switch",
			default: true,
			label: "Show Description",
			info: "ArticleListshowDescription",
		},
		{
			id: "showPublished",
			type: "switch",
			default: false,
			label: "Show Published At",
			info: "ArticleListShowPublished",
		},
		{
			id: "showAuthor",
			type: "switch",
			default: false,
			label: "Show Author",
			info: "ArticleListShowAuthor",
		},
		{
			id: "showPublisher",
			type: "switch",
			default: false,
			label: "Show Publisher",
			info: "ArticleListShowPublisher",
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
} as const;
