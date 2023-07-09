import { CUSTOM_RSS_CONFIG_OBJECT } from "./custom/config";
import { BBCRssNewsFeedEdit } from "./news/BBC/RssFeedEdit";
import { BBC_RSS_CONFIG_OBJECT } from "./news/BBC/config";
import { BBC_NEWS_RSS_OBJECT } from "./news/BBC/constants";
import { GOOGLE_RSS_CONFIG_OBJECT } from "./news/Google/config";
import { SkyRssNewsFeedEdit } from "./news/Sky/RssFeedEdit";
import { SKY_NEWS_RSS_CONFIG_OBJECT } from "./news/Sky/config";
import { YOUTUBE_RSS_CONFIG_OBJECT } from "./youtube/config";

// should be void
export const RSS_LIST: any = {
	bbcRssNewsFeed: BBC_NEWS_RSS_OBJECT,
	bbcNews: {},
};

// should be void
export const RSS_EDIT_LIST: any = {
	bbcRssNewsFeed: BBCRssNewsFeedEdit,
	skyRssNewsFeed: SkyRssNewsFeedEdit,
	bbcNews: {},
	skyNews: {},
	googleNews: {},
	custom: {},
};

export const RSS_CONFIG_LIST: any = {
	//need groups / here or prior to this set news / radio / etc
	bbcNews: BBC_RSS_CONFIG_OBJECT,
	skyNews: SKY_NEWS_RSS_CONFIG_OBJECT,
	googleNews: GOOGLE_RSS_CONFIG_OBJECT,

	youtube: YOUTUBE_RSS_CONFIG_OBJECT,

	custom: CUSTOM_RSS_CONFIG_OBJECT,
};
