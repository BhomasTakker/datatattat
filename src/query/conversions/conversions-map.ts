import { BING_CONVERSIONS } from "../api/bing/news/conversions";
import { RSS_2_0_CONVERSIONS } from "../rss/conversions";
import { MAIN_CONVERSIONS } from "./main-conversions";

const emptyReturn = new Map<string, object>([]);

// better way - this would get massive
export const CONVERSIONS_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["MAIN", MAIN_CONVERSIONS],
	["BING", BING_CONVERSIONS],
	["RSS:2.0", RSS_2_0_CONVERSIONS],
]);

export const getConversion = (id: string) => {
	// if CONVERSIONS_MAP.has(id) else empty
	console.log("FEATURE:753", "GET:CONVERSION", "ID", { id });
	console.log("FEATURE:753", "GET:CONVERSION", "CONVERSION", {
		CONVERSION: CONVERSIONS_MAP.get(id) ?? emptyReturn,
	});
	return CONVERSIONS_MAP.get(id) ?? emptyReturn;
};

type MapType = Map<string, object>;

export const mergeConversion = (
	conversion1: MapType = emptyReturn,
	conversion2: MapType = emptyReturn
) => {
	//Doesn't look like an eloquent solution available
	// return new Map(function*() { yield* conversion1; yield* conversion2; }());
	console.log({ conversion2 });
	return new Map([...conversion1, ...conversion2]);
};

export const mergeConversions = (
	conversions1: MapType,
	conversions2: MapType
): Map<string, object> => {
	const transform = mergeConversion(
		conversions1.get("TRANSFORM") as Map<string, object>,
		conversions2.get("TRANSFORM") as Map<string, object>
	);
	const filter = mergeConversion(
		conversions1.get("FILTER") as Map<string, object>,
		conversions2.get("FILTER") as Map<string, object>
	);
	const sort = mergeConversion(
		conversions1.get("SORT") as Map<string, object>,
		conversions2.get("SORT") as Map<string, object>
	);

	console.log("ISSUE:305", "MERGE:CONVERSIONS", { transform });

	return new Map<string, object>([
		["TRANSFORM", transform],
		["FILTER", filter],
		["SORT", sort],
	]);
};
