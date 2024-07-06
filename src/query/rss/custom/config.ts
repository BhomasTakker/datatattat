import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { RedisCacheTime, RedisCacheTimeOptions } from "@/src/lib/redis/types";
import { baseRSSConversion } from "@/src/query/rss/rss-feed.config";

const urlInput = {
	type: EditInputs.text,
	id: "url",
	label: "url",
	info: "The Rss URL",
};

const urlsInput = {
	id: "urls",
	type: EditInputs.array,
	label: "Add URLs",
	info: "URLs array",
	title: "Select URLs",
	// We need to allow an object 'shape'
	input: {
		type: EditInputs.text,
		id: "url",
		label: "url",
		info: "The Rss URL",
	},
};

const typeSelect = {
	type: EditInputs.select,
	id: "contentType",
	label: "Content type",
	options: ["article"],
	info: "The Content Type.",
};

const cacheExpiry = {
	type: EditInputs.select,
	id: "cacheExpiry",
	label: "Cache Expiry",
	options: RedisCacheTimeOptions,
	info: "How often this data should be updated.",
};

export const CUSTOM_RSS_CONFIG_OBJECT = {
	/** Form ID I believe */
	id: "custom_endpoint",

	// head scratcher - IF this is the input used
	/** Shown Label - if this is an input */
	label: "Select Endpoint",

	/** Type */
	// type is for our input type
	// if none then there is none
	// in this case we are just using params
	// because it is just a value and not a route?

	/** Unique and descriptive identifier / to get CREATOR Object */
	queryId: "customRss",

	/** Available parameters for this endpoint */
	params: [urlsInput, typeSelect, cacheExpiry], // required? / yes

	/** Unused - The info string / md text */
	info: "id or explanation - or just an explanation",

	// object default conversion, & list
	/** Our list of conversions */
	conversions: baseRSSConversion,
};
