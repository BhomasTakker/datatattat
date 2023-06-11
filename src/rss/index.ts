import { BBCRssNewsFeedEdit } from "./news/BBC/RssFeedEdit";
import { BBC_RSS_CONFIG_OBJECT } from "./news/BBC/config";
import { BBC_NEWS_RSS_OBJECT } from "./news/BBC/constants";
import { SkyRssNewsFeedEdit } from "./news/Sky/RssFeedEdit";
import { SKY_NEWS_RSS_CONFIG_OBJECT } from "./news/Sky/config";

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
	googleNews: BBC_RSS_CONFIG_OBJECT,
	custom: BBC_RSS_CONFIG_OBJECT,
};
