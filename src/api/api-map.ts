import { BING_NEWS_API_OBJECT } from "./bing/news/constants";
import { TIKTOK_OEMBED_OBJECT } from "./social-media/tik-tok/constants";
import { TWITTER_OEMBED_CONFIG_OBJECT } from "./social-media/twitter/config";
import { TWITTER_OEMBED_OBJECT } from "./social-media/twitter/constants";

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
	// ["blah", BING_NEWS_API_OBJECT.blah],
	["twitterProfileOembed", TWITTER_OEMBED_OBJECT.profile],
	["twitterListOembed", TWITTER_OEMBED_OBJECT.list],
	["twitterTweetOembed", TWITTER_OEMBED_OBJECT.tweet],

	["tiktokCreatorOembed", TIKTOK_OEMBED_OBJECT.creator],
	["tiktokVideoOembed", TIKTOK_OEMBED_OBJECT.video],
]);
