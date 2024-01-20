import { CRIMES } from "./config";

// https://www.football-data.org/documentation/quickstart/
const requestHeaders: HeadersInit = new Headers();
// requestHeaders.set("X-Auth-Token", process.env.FOOTBALL_DATA_ORG_API_KEY || "");

const BASE_URL = "https://data.police.uk/api/crimes-street";

export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

type QueryParameters = {
	crime: CRIMES;
	latitude: string;
	longitude: string;
	year: string;
	month: string;
};

enum CrimeEndpoints {}

const crimeMap = new Map([
	[CRIMES.All, "all-crime"],
	[CRIMES["Anti Social Behaviour"], "anti-social-behaviour"],
	[CRIMES["Arson and Criminal Damage"], "criminal-damage-arson"],
	[CRIMES["Bicycle Theft"], "bicycle-theft"],
	[CRIMES.Burglary, "burglary"],
	[CRIMES.Drugs, "drugs"],
	[CRIMES.Other, "other-crime"],
	[CRIMES["Other Theft"], "other-theft"],
	[CRIMES["Public Order"], "public-order"],
	[CRIMES.Robbery, "robbery"],
	[CRIMES.Shoplifting, "shoplifting"],
	[CRIMES["Theft From Person"], "theft-from-the-person"],
	[CRIMES["Vehicle Crime"], "vehicle-crime"],
	[CRIMES["Violent Crime and Sexual Offences"], "violent-crime"],
	[CRIMES["Weapons Possession"], "possession-of-weapons"],
]);

// type me
// lat, lng, date = latest, crime = all
// poly, date = latest, crime = all // [lat],[lng]:[lat],[lng]:[lat],[lng]
const uk_police_crime_data = (queryParams: QueryParameters) => {
	const {
		crime: selectedCrime,
		latitude,
		longitude,
		year,
		month,
	} = queryParams || {};
	const crime = crimeMap.get(selectedCrime) || crimeMap.get(CRIMES.All);
	const lat = latitude;
	const lon = longitude;

	// [-1.1325075476203084, 52.63543283768226]
	const newMonth = month.length == 1 ? `0${month}` : month;
	const date = year && month ? `&date=${year}-${newMonth}` : "";

	const params = `?lat=${lat}&lng=${lon}${date}`;

	console.log({ date, params });

	return {
		url: `${BASE_URL}/${crime}${params}`,
		headers: "",
		queryParams: {},
	};
};

export const POLICE_DATA_UK_API_CREATORS = {
	uk_police_crime_data,
};
