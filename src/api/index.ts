//Get from same file - barren export
import { BingNewsSearchEdit } from "./bing/news/BingNewsSearchEdit";
import {
	BING_NEWS_API_CONFIG_OBJECT,
	BING_NEWS_ROOT,
} from "./bing/news/config";
import {
	BING_NEWS_HEADLINES_API_OBJECT,
	BING_NEWS_SEARCH_API_OBJECT,
	BING_NEWS_TRENDING_API_OBJECT,
} from "./bing/news/constants";
//import from constants

//api configs
export const API_LIST: any = {
	//bing
	bingNewsSearch: BING_NEWS_SEARCH_API_OBJECT,
	bingNewsHeadlines: BING_NEWS_HEADLINES_API_OBJECT,
	bingNewsTrending: BING_NEWS_TRENDING_API_OBJECT,
};

export const API_EDIT_LIST: any = {
	//load news objects and spread
	bingNewsSearch: BingNewsSearchEdit,
	bingNewsHeadlines: BingNewsSearchEdit,
	bingNewsTrending: BingNewsSearchEdit,
};

export const API_CONFIG_LIST: any = {
	//need groups / here or prior to this set news / radio / etc
	bing: BING_NEWS_API_CONFIG_OBJECT,
	new_bing: BING_NEWS_ROOT,
};
