import { BING_NEWS_API_CREATORS } from "./bing/news/constants";

export type API_REQUEST_TYPE = {
	url: string;
	headers: object;
	returns: Function;
	data: any;
};

export type QueryCreator = {
	url: string;
	headers: object;
	returns: Function;
	queryParams: any;
};

export const API_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["bingNewsSearch", BING_NEWS_API_CREATORS.search],
	["bingNewsHeadlines", BING_NEWS_API_CREATORS.headlines],
	["bingNewsTrending", BING_NEWS_API_CREATORS.trending],
]);
