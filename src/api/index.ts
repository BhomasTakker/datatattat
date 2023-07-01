//Get from same file - barren export
import { BingNewsSearchEdit } from "./bing/news/BingNewsSearchEdit";
import { BING_NEWS_API_CONFIG_OBJECT } from "./bing/news/config";
import {
	BING_NEWS_HEADLINES_API_OBJECT,
	BING_NEWS_SEARCH_API_OBJECT,
	BING_NEWS_TRENDING_API_OBJECT,
} from "./bing/news/constants";
//import from constants
import { TikTokCreatorOembedEdit } from "./social-media/tik-tok/CreatorEdit";
import { TikTokVideoOembedEdit } from "./social-media/tik-tok/VideoEdit";
import { TIKTOK_OEMBED_CONFIG_OBJECT } from "./social-media/tik-tok/config";
import {
	TIKTOK_CREATOR_OEMBED_OBJECT,
	TIKTOK_VIDEO_OEMBED_OBJECT,
} from "./social-media/tik-tok/constants";
import { TwitterListOembedEdit } from "./social-media/twitter/ListEdit";
import { TwitterProfileOembedEdit } from "./social-media/twitter/ProfileEdit";
import { TwitterTweetOembedEdit } from "./social-media/twitter/TweetEdit";
import { TWITTER_OEMBED_CONFIG_OBJECT } from "./social-media/twitter/config";
import {
	TWITTER_LIST_OEMBED_OBJECT,
	TWITTER_PROFILE_OEMBED_OBJECT,
	TWITTER_TWEET_OEMBED_OBJECT,
} from "./social-media/twitter/constants";

//api configs
export const API_LIST: any = {
	//bing
	bingNewsSearch: BING_NEWS_SEARCH_API_OBJECT,
	bingNewsHeadlines: BING_NEWS_HEADLINES_API_OBJECT,
	bingNewsTrending: BING_NEWS_TRENDING_API_OBJECT,

	//Twitter
	twitterProfileOembed: TWITTER_PROFILE_OEMBED_OBJECT,
	twitterListOembed: TWITTER_LIST_OEMBED_OBJECT,
	twitterTweetOembed: TWITTER_TWEET_OEMBED_OBJECT,

	//TikTok
	tiktokCreatorOembed: TIKTOK_CREATOR_OEMBED_OBJECT,
	tiktokVideoOembed: TIKTOK_VIDEO_OEMBED_OBJECT,
};

export const API_EDIT_LIST: any = {
	//load news objects and spread
	bingNewsSearch: BingNewsSearchEdit,
	bingNewsHeadlines: BingNewsSearchEdit,
	bingNewsTrending: BingNewsSearchEdit,

	//Social-media
	//twitter - load twitter object and spread
	twitterProfileOembed: TwitterProfileOembedEdit,
	twitterListOembed: TwitterListOembedEdit,
	twitterTweetOembed: TwitterTweetOembedEdit,

	//tiktok
	tiktokCreatorOembed: TikTokCreatorOembedEdit,
	tiktokVideoOembed: TikTokVideoOembedEdit,
};

export const API_CONFIG_LIST: any = {
	//need groups / here or prior to this set news / radio / etc
	bing: BING_NEWS_API_CONFIG_OBJECT,
	twitter: TWITTER_OEMBED_CONFIG_OBJECT,
	tiktok: TIKTOK_OEMBED_CONFIG_OBJECT,
};
