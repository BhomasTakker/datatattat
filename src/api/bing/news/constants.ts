export const PATH = "api/bing/news/search";
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
