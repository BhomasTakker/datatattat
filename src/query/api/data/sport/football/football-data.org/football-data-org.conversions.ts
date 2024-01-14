import { map } from "rxjs";
import { StandingsResponse, TableEntry } from "./football-data-org.types";

// what are props in this instance
const toDataCollection = (props: any) => {
	return map((data: StandingsResponse) => {
		const { standings, filters, area, competition, season } = data;
		// console.log("TO DATACOLLECTION ", { props });
		// pagination: {}
		return {
			filters,
			area,
			competition,
			season,
			variant: "data",
			// We just have the one table if groups we would need to show multiple tables
			data: standings[0].table,
		};
	});
};

// perhaps flatten?
// Probably shouldn't do this with data? I dunno
// Kinda just a default though?
// We can have various
const toDataCollectionItem = (props: any) => {
	return map((data: TableEntry) => {
		const {
			position,
			team,
			playedGames,
			form,
			won,
			draw,
			lost,
			points,
			goalsFor,
			goalsAgainst,
			goalDifference,
		} = data;

		return {
			position,
			name: team.name,
			shortName: team.shortName,
			playedGames,
			form,
			won,
			draw,
			lost,
			points,
			goalsFor,
			goalsAgainst,
			goalDifference,
		};
	});
};

// We would need different transform functions for world cup standings and league
// We could just check in map what it was
export const TRANSFORM = new Map<string, object>([
	// spelling toArticle(s)List should change
	["toDataCollection", toDataCollection],
	["toDataCollectionItem", toDataCollectionItem],
]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([]);

export const FOOTBALL_DATA_ORG_CONVERSIONS = new Map<
	string,
	Map<string, object>
>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
