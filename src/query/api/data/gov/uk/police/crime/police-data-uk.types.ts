type Street = {
	id: number;
	name: string;
};

type Location = {
	latitude: string;
	longitude: string;
	street: Street;
};

type Outcome = {
	category: string; //but type
	date: string; // but date
};

export type StreetCrimeItem = {
	category: string;
	location_type: string;
	location: Location;
	context: string;
	outcome_status: Outcome;
	persistent_id: string;
	id: number;
	location_subtype: string;
	month: string; // date
};

export type StreetCrimeResponse = StreetCrimeItem[];
