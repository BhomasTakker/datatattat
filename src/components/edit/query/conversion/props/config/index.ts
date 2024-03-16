import {
	distinct,
	distinctKey,
	first,
	includes,
	last,
	lastN,
	skipLastN,
	skipN,
	topN,
	numberConditional,
} from "./filter";
import { simpleNumberSort } from "./sort";

export const CONVERSION_PROPS_MAP = new Map<string, object>([
	// SAMPLE
	["first", first],
	["last", last],
	["topN", topN],
	["lastN", lastN],
	["skipN", skipN],

	["skipLastN", skipLastN],

	// FILTER
	["distinct", distinct],
	["distinctKey", distinctKey],
	["includes", includes],
	["greaterThan", numberConditional],
	["lessThan", numberConditional],
	["equals", numberConditional],

	// SORT
	["numericAscending", simpleNumberSort],
	["numericDescending", simpleNumberSort],
]);
