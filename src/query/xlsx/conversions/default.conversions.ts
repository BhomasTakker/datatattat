import { map } from "rxjs";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";

// what are props in this instance
const toDataCollection = (props: any) => {
	return map((data: UnknownObject) => {
		return data;
	});
};

// perhaps flatten?
// Probably shouldn't do this with data? I dunno
// Kinda just a default though?
// We can have various
const toDataCollectionItem = (props: any) => {
	return map((data: UnknownObject) => {
		return data;
	});
};

// We would need different transform functions for world cup standings and league
// We could just check in map what it was
export const TRANSFORM = new Map<string, object>([
	// spelling toArticle(s)List should change
	// ["toDataCollection", toDataCollection],
	// ["toDataCollectionItem", toDataCollectionItem],
]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([]);

export const GROUP = new Map<string, object>([]);

export const BIN = new Map<string, object>([]);

export const SUMMARIZE = new Map<string, object>([]);

export const XLSX_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM], // https://d3js.org/d3-array/transform / we have options
	["FILTER", FILTER],
	["SORT", SORT], // https://d3js.org/d3-array/sort
	// BIN //https://d3js.org/d3-array/bin
	["GROUP", GROUP], // https://d3js.org/d3-array/group
	// SUMMARIZE //https://d3js.org/d3-array/summarize
	["BIN", BIN],
	["SUMMARIZE", SUMMARIZE],
]);
