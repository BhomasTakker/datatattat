import { BING_NEWS_API_OBJECT } from "./bing/news/constants";

export type API_REQUEST_TYPE = {
	url: string;
	headers: object;
	returns: Function;
	data: any;
};

//Effectively regardless of organisation strategies this would have thousands+ no?
export const API_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["bingNewsSearch", BING_NEWS_API_OBJECT.search],
	["bingNewsHeadlines", BING_NEWS_API_OBJECT.headlines],
	["bingNewsTrending", BING_NEWS_API_OBJECT.trending],
]);
