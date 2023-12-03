import { BING_NEWS_API_CREATORS } from "./bing/news/constants";
import { FOOTBALL_DATA_ORG_API_CREATORS } from "./data/sport/football/football-data.org/constants";

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

// This feels wrong?
export const API_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["bingNewsSearch", BING_NEWS_API_CREATORS.search],
	["bingNewsHeadlines", BING_NEWS_API_CREATORS.headlines],
	["bingNewsTrending", BING_NEWS_API_CREATORS.trending],

	//
	["football_data_org_pl", FOOTBALL_DATA_ORG_API_CREATORS.premier_league],
]);
