import { SortOptions } from "@/src/components/conversions/sort/sort-map";
import { testBin } from "./bin";
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
import { testGroup } from "./group";
import { simpleNumberSort } from "./sort";
import { testSummarize } from "./summarize";
import { FilterOptions } from "@/src/components/conversions/filter/filter-map";

export const CONVERSION_PROPS_MAP = new Map<string, object>([
	// SAMPLE
	[FilterOptions.first, first],
	[FilterOptions.last, last],
	[FilterOptions.topN, topN],
	[FilterOptions.lastN, lastN],
	[FilterOptions.skipN, skipN],

	[FilterOptions.skipLastN, skipLastN],

	// FILTER
	[FilterOptions.distinct, distinct],
	[FilterOptions.distinctKey, distinctKey],
	[FilterOptions.includes, includes],
	[FilterOptions.lessThan, numberConditional],
	[FilterOptions.greaterThan, numberConditional],
	[FilterOptions.equals, numberConditional],

	// SORT
	[SortOptions.numericAscending, simpleNumberSort],
	[SortOptions.numericDescending, simpleNumberSort],
	// need update - this object is just a key input and dumb text at that
	[SortOptions.dateTimeAscending, simpleNumberSort],
	[SortOptions.dateTimeDescending, simpleNumberSort],

	// GROUP
	["testGroup", testGroup],

	// BIN
	["testBin", testBin],

	// SUMMARIZE
	["testSummarize", testSummarize],
]);
