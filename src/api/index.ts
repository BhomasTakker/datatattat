//Get from same file - barren export
import { BingNewsSearchEdit } from "./bing/news/BingNewsSearchEdit";
import { BING_NEWS_SEARCH_API_OBJECT } from "./bing/news/constants";
import { TwitterListOembedEdit } from "./social-media/twitter/ListEdit";
import { TwitterProfileOembedEdit } from "./social-media/twitter/ProfileEdit";
import { TwitterTweetOembedEdit } from "./social-media/twitter/TweetEdit";
import {
	TWITTER_LIST_OEMBED_OBJECT,
	TWITTER_PROFILE_OEMBED_OBJECT,
	TWITTER_TWEET_OEMBED_OBJECT,
} from "./social-media/twitter/constants";

//api configs
export const API_LIST: any = {
	bingNewsSearch: BING_NEWS_SEARCH_API_OBJECT,

	//
	twitterProfileOembed: TWITTER_PROFILE_OEMBED_OBJECT,
	twitterListOembed: TWITTER_LIST_OEMBED_OBJECT,
	twitterTweetOembed: TWITTER_TWEET_OEMBED_OBJECT,
};

export const API_EDIT_LIST: any = {
	//load news objects and spread
	bingNewsSearch: BingNewsSearchEdit,
	//Social-media
	//twitter - load twitter object and spread
	twitterProfileOembed: TwitterProfileOembedEdit,
	twitterListOembed: TwitterListOembedEdit,
	twitterTweetOembed: TwitterTweetOembedEdit,
};
