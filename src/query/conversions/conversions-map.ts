import { BING_CONVERSIONS } from "../api/bing/news/conversions";
import { POLICE_DATA_UK_CONVERSIONS } from "../api/data/gov/uk/police/crime/police-data-uk.conversions";
import { FOOTBALL_DATA_ORG_CONVERSIONS } from "../api/data/sport/football/football-data.org/football-data-org.conversions";
import { RSS_2_0_CONVERSIONS } from "../rss/conversions";
import { MAIN_CONVERSIONS } from "./main-conversions";

const emptyReturn = new Map<string, object>([]);

// better way - this would get massive
// Yeah this seems unmanageable?
export const CONVERSIONS_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["MAIN", MAIN_CONVERSIONS],
	["BING", BING_CONVERSIONS],
	["RSS:2.0", RSS_2_0_CONVERSIONS],

	["FOOTBALL:DATA:ORG", FOOTBALL_DATA_ORG_CONVERSIONS],
	["DATA:POLICE:UK", POLICE_DATA_UK_CONVERSIONS],
]);

export const getConversion = (id: string) => {
	// if CONVERSIONS_MAP.has(id) else empty
	return CONVERSIONS_MAP.get(id) ?? emptyReturn;
};

type MapType = Map<string, object>;

export const mergeConversion = (
	conversion1: MapType = emptyReturn,
	conversion2: MapType = emptyReturn
) => {
	//Doesn't look like an eloquent solution available
	// return new Map(function*() { yield* conversion1; yield* conversion2; }());
	// // console.log({ conversion2 });
	// @ts-ignore - next config? tsconfig target es6/2015 or higher
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
