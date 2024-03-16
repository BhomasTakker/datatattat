import { map } from "rxjs";
import { StandingsResponse, TableEntry } from "./football-data-org.types";
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

export const XLSX_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
