export const SIMPLE_LIST = {
	id: "simpleList",
	info: "SimpleList",
	title: "Simple List",
	props: [
		{
			id: "componentId",
			type: "select",
			label: "Component Id",
			//LIST_ITEM_COMPONENTS
			options: ["ArticleStub"],
		},
	],
	// default/required components perhaps?
	// you need this component input these props seems maybe plausible
} as const;
