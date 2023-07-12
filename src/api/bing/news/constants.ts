import { returns } from "./returns";

// these should be deprecated
export const SEARCH = "api/bing/news/search"; //LOCAL_PATH
export const HEADLINES = "api/bing/news/headlines";
export const TRENDING = "api/bing/news/trending";

export const BASE_URL = "https://api.bing.microsoft.com/v7.0";
export enum ENDPOINTS {
	NEWS_SEARCH = "/news/search",
	HEADLINES = "/news",
	TRENDING = "/news/trendingtopics",
}

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Ocp-Apim-Subscription-Key", process.env.BING_API_KEY || "");
//More InitObject
//sort out the error...
//Is this protected from client side?
//need check and remove to seperate file if need be
// don't export directly?
export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

/////////////// Server Only /////////////

const search = (queryParams: any) => ({
	url: `${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`,
	headers: HEADERS,
	returns, // <- this needs a big work
	queryParams,
});
const trending = (queryParams: any) => ({
	url: `${BASE_URL}${ENDPOINTS.TRENDING}`,
	headers: HEADERS,
	returns, // <- this needs a big work
	queryParams,
});
const headlines = (queryParams: any) => ({
	url: `${BASE_URL}${ENDPOINTS.HEADLINES}`,
	headers: HEADERS,
	returns, // <- this needs a big work
	queryParams,
});

export const BING_NEWS_API_CREATORS = {
	search,
	trending,
	headlines,
};
