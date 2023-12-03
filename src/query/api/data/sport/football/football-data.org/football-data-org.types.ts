interface Team {
	id: string;
	name: string;
	shortName: string;
	tla: string;
	crest: string;
}

export interface TableEntry {
	position: number;
	team: Team;
	playedGames: number;
	form: string | null;
	won: number;
	draw: number;
	lost: number;
	points: number;
	goalsFor: number;
	goalsAgainst: number;
	goalDifference: number;
}

interface Standings {
	stage: string;
	type: string;
	group: string;
	table: TableEntry[];
}

interface Filters {
	season: string;
}

interface Area {
	id: number;
	name: string; //Union
	code: string; //Union
	flag: string; // URL
}

interface Competition {
	id: number;
	name: string;
	code: string;
	type: string;
	emblem: string;
}

interface Season {
	id: number;
	startDate: string;
	endDate: string;
	currentMatchday: number;
	winner: string | number | null;
}

export type StandingsResponse = {
	filters: Filters;
	area: Area;
	competition: Competition;
	season: Season;
	standings: Standings[];
};
