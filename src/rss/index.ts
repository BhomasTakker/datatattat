import { CUSTOM_RSS_CONFIG_OBJECT } from "./custom/config";
import { BBC_RSS_CONFIG_OBJECT } from "./news/BBC/config";
import { BBC_NEWS_RSS_OBJECT } from "./news/BBC/constants";
import { GOOGLE_RSS_CONFIG_OBJECT } from "./news/Google/config";
import { SKY_NEWS_ROOT } from "./news/Sky/config";
import { YOUTUBE_RSS_CONFIG_OBJECT } from "./youtube/config";

export const RSS_CONFIG_LIST: any = {
	//need groups / here or prior to this set news / radio / etc
	bbcNews: BBC_RSS_CONFIG_OBJECT,
	skyNews: SKY_NEWS_ROOT,
	googleNews: GOOGLE_RSS_CONFIG_OBJECT,

	youtube: YOUTUBE_RSS_CONFIG_OBJECT,

	custom: CUSTOM_RSS_CONFIG_OBJECT,
};
