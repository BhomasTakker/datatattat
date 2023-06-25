import { returns } from "./returns";

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
export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

export const BING_NEWS_SEARCH_API_OBJECT = {
	url: `${SEARCH}`,
	returns: returns,
};

export const BING_NEWS_HEADLINES_API_OBJECT = {
	url: `${HEADLINES}`,
	returns: returns,
};
export const BING_NEWS_TRENDING_API_OBJECT = {
	url: `${SEARCH}`,
	returns: returns,
};

/////////////// Server Only /////////////
const searchObject = {
	url: `${BASE_URL}${ENDPOINTS.NEWS_SEARCH}`,
	headers: HEADERS,
	returns, // <- this needs a big work
};
const trendingObject = {
	url: `${BASE_URL}${ENDPOINTS.TRENDING}`,
	headers: HEADERS,
	returns, // <- this needs a big work
};
const headlinesObject = {
	url: `${BASE_URL}${ENDPOINTS.HEADLINES}`,
	headers: HEADERS,
	returns, // <- this needs a big work
};

const blah = {
	wot: `${BASE_URL}${ENDPOINTS.HEADLINES}`,
	never: HEADERS,
	returns: {
		fluff: {},
	},
};

export const BING_NEWS_API_OBJECT = {
	search: searchObject,
	trending: trendingObject,
	headlines: headlinesObject,
	blah,
};
