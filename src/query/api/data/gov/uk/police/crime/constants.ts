// https://www.football-data.org/documentation/quickstart/
const requestHeaders: HeadersInit = new Headers();
// requestHeaders.set("X-Auth-Token", process.env.FOOTBALL_DATA_ORG_API_KEY || "");

const BASE_URL = "https://data.police.uk/api/crimes-street";

export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

// type me
// lat, lng, date = latest, crime = all
// poly, date = latest, crime = all // [lat],[lng]:[lat],[lng]:[lat],[lng]
const uk_police_crime_data = (queryParams: any) => {
	const crime = "all_crime";
	const lat = "52.63543283768226";
	const lon = "-1.1325075476203084";
	// [-1.1325075476203084, 52.63543283768226]
	const date = "";

	const params = `?lat=${lat}&lng=${lon}`;

	// console.log("OMG:HERE?");

	// Do params get added by default?
	return {
		url: `${BASE_URL}/${crime}${params}`,
		headers: "",
		queryParams,
	};
};

export const POLICE_DATA_UK_API_CREATORS = {
	uk_police_crime_data,
};
