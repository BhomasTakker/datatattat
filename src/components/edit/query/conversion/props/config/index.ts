import {
	distinct,
	distinctKey,
	first,
	last,
	lastN,
	skipLastN,
	skipN,
	topN,
} from "./filter";

export const CONVERSION_PROPS_MAP = new Map<string, object>([
	["first", first],
	["last", last],
	["topN", topN],
	["lastN", lastN],
	["skipN", skipN],
	["skipLastN", skipLastN],
	["distinct", distinct],
	["distinctKey", distinctKey],
]);
