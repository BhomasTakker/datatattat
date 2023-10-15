// Elsewhere but keep all available / different sets?
// Elsewhere but We can group then use a set to build and exclude crossover
const STACK_ITEMS = ["DisplayItem"];
const DIRECTION = ["row", "column", "row-reverse", "column-reverse"];

export const SIMPLE_STACK = {
	id: "SimpleArticleList",
	info: "SimpleArticleList",
	title: "Simple Article List",

	// FIX ME
	// Need props else blow up
	props: [
		// Common component props
		// Add details component etc
		{
			id: "title",
			type: "text",
			label: "Title",
			info: "SimpleStackTitle",
		},
		{
			id: "description",
			type: "text",
			label: "Description",
			info: "SimpleStackDescription",
		},
		{
			id: "direction",
			// Need to be a component select type
			// Load component config for props etc
			default: "column",
			required: true,
			type: "select",
			label: "Stack Direction",
			info: "StackDirectionInfo",
			options: DIRECTION,
		},
		{
			id: "component",
			// Need to be a component select type
			// Load component config for props etc
			type: "select",
			label: "Stack Component",
			info: "StackComponentInfo",
			options: STACK_ITEMS,
		},
	],
} as const;
