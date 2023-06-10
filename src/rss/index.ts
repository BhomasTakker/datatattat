import { BBCRssNewsFeedEdit } from "./news/BBC/RssFeedEdit";
import { BBC_NEWS_RSS_OBJECT } from "./news/BBC/constants";
import { SkyRssNewsFeedEdit } from "./news/Sky/RssFeedEdit";

export const RSS_LIST: any = {
	bbcRssNewsFeed: BBC_NEWS_RSS_OBJECT,
};

export const RSS_EDIT_LIST: any = {
	bbcRssNewsFeed: BBCRssNewsFeedEdit,
	skyRssNewsFeed: SkyRssNewsFeedEdit,
};
