import { returns } from "./returns";

export const PATH = "api/bing/news/search"; //LOCAL_PATH
export const BASE_URL = "https://api.bing.microsoft.com/v7.0";
export enum ENDPOINTS {
	NEWS_SEARCH = "/news/search",
}

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Ocp-Apim-Subscription-Key", process.env.BING_API_KEY || "");
//More InitObject
//sort out the error...
//Is this protected from client side?
//need cjheck and remove to seperate file if need be
export const HEADERS: RequestInit = {
	headers: requestHeaders,
};

export const BING_NEWS_SEARCH_API_OBJECT = {
	url: `${PATH}`,
	returns: returns,
};
