import { CUSTOM_RSS_RSS_CREATOR } from "./custom/constants";
import { BBC_CREATORS } from "./news/BBC/constants";
import { GOOGLE_CREATORS } from "./news/Google/creators";
import { SKY_NEWS_RSS_CREATOR } from "./news/Sky/constants";
import { ALJAZEERA_NEWS_RSS_CREATOR } from "./news/aljazeera/constants";
import { GBNEWS_CREATORS } from "./news/gbnews/creators";
import { NYTIMES_CREATORS } from "./news/nytimes/creators";

// @ts-ignore
export const RSS_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["skyNews", SKY_NEWS_RSS_CREATOR],
	["aljazeera", ALJAZEERA_NEWS_RSS_CREATOR],
	...GOOGLE_CREATORS,
	...BBC_CREATORS,
	...GBNEWS_CREATORS,
	...NYTIMES_CREATORS,

	["customRss", CUSTOM_RSS_RSS_CREATOR],
]);
