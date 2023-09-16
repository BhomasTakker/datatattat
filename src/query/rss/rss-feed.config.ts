import { ConversionObject } from "@/src/components/edit/query/conversion/types";

// Check if we use this - need remove or rethink
// was for custome conversions / which may or even should be redundant?
const rssMap = {
	category: "string",
	datePublished: "string",
	description: "string",
	headline: "string",
	id: "string",
	image: "object",
	video: "object",
};

const itemsConversion: ConversionObject = {
	id: "items",
	iterable: true,
	map: rssMap,
	defaultConversions: [{ id: "toCollectionItem", type: "TRANSFORM" }],

	sort: {},
	filter: {},
	transform: {
		toCollectionItem: "toCollectionItem",
	},
};

// is this used?
const responseMap = {
	id: "string",
	totalEstimatedMatches: "number",
	value: "array",
};

const responseConversion: ConversionObject = {
	map: responseMap,
	defaultConversions: [{ id: "toCollection", type: "TRANSFORM" }],

	transform: {
		toCollection: "toCollection",
	},
};
/**
 * The Base Conversoin object for RSS Feeds
 * Are you an RSS feed?
 * Version 2.0?
 * Use this
 */
export const baseRSSConversion = {
	conversionId: "RSS:2.0",
	response: responseConversion,
	subConversions: [itemsConversion],
};
