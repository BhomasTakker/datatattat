// https://www.football-data.org/documentation/quickstart/
const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("X-Auth-Token", process.env.FOOTBALL_DATA_ORG_API_KEY || "");

const BASE_URL = "https://api.football-data.org/v4/competitions/PL/standings";

export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

// type me
const premier_league = (queryParams: any) => {
	// console.log("WE ARE HERE");
	return { url: `${BASE_URL}`, headers: HEADERS, queryParams };
};

export const FOOTBALL_DATA_ORG_API_CREATORS = {
	premier_league,
};
