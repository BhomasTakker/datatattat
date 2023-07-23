import { top5, topN } from "./filter";

// back end functions list
export const TRANSFORM = new Map<string, object>([]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([
	["top5", top5],
	["topN", topN],
]);

type ConversionTypes = "TRANSFORM" | "FILTER" | "SORT"; // ?

export const MAIN_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
