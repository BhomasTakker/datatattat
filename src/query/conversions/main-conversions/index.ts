import {
	distinct,
	distinctKey,
	equals,
	first,
	greaterThan,
	includes,
	last,
	lastN,
	lessThan,
	skipLastN,
	skipN,
	topN,
} from "./filter";
import { alphanumeric, numericDescending, numericAscending } from "./sort";

// back end functions list
export const TRANSFORM = new Map<string, object>([]);

export const SORT = new Map<string, object>([
	["alphanumeric", alphanumeric],
	["numericDescending", numericDescending],
	["numericAscending", numericAscending],
]);

export const FILTER = new Map<string, object>([
	// ["top5", top5],
	// These should be SAMPLE - called at end of filters and sorts etc
	["first", first],
	["last", last],
	["topN", topN],
	["lastN", lastN],
	["skipN", skipN],
	["skipLastN", skipLastN],

	//
	["distinct", distinct],
	["distinctKey", distinctKey],
	////////////////////////////
	["includes", includes],
	["greaterThan", greaterThan],
	["lessThan", lessThan],
	["equals", equals],
]);

type ConversionTypes = "TRANSFORM" | "FILTER" | "SORT"; // ?

export const MAIN_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	// absolutely possible - look at min funnily enough
	// https://app.pluralsight.com/course-player?clipId=8dc4a14b-c62e-43cd-8273-03891c4acde1
	["SORT", SORT],
]);
