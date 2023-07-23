import { BING_CONVERSIONS } from "../api/bing/news/conversions";
import { MAIN_CONVERSIONS } from "./main-conversions";

const emptyReturn = new Map([]);

export const CONVERSIONS_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["MAIN", MAIN_CONVERSIONS],
	["BING", BING_CONVERSIONS],
]);

export const getConversion = (id: string) => {
	// if CONVERSIONS_MAP.has(id) else empty
	return CONVERSIONS_MAP.get(id) ?? emptyReturn;
};

type MapType = Map<string, object>;

export const mergeConversion = (conversion1: MapType, conversion2: MapType) => {
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

	return new Map<string, object>([
		["TRANSFORM", transform],
		["FILTER", filter],
		["SORT", sort],
	]);
};