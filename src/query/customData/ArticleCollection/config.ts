import { EditInputs } from "@/src/components/edit/inputs/input.map";

const urlsInput = {
	id: "items",
	type: EditInputs.array,
	label: "Add URLs",
	info: "URLs array",
	title: "Select URLs",
	// We need to allow an object 'shape'
	input: {
		type: EditInputs.inputList,
		id: "article",
		label: "article source",
		info: "The article source",
		inputs: [
			{
				type: EditInputs.text,
				id: "src",
				label: "src",
				info: "The Rss URL",
			},
		],
	},
};

export const ARTICLE_COLLECTION_CONFIG_OBJECT = {
	/** Form ID I believe */
	id: "custom_data",

	// head scratcher - IF this is the input used
	/** Shown Label - if this is an input */
	label: "Input data",

	/** Available parameters for this endpoint */
	params: [urlsInput], // required? / yes

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",
};
