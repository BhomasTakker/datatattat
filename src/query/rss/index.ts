import { CUSTOM_RSS_CONFIG_OBJECT } from "../../rss/custom/config";
import { YOUTUBE_RSS_CONFIG_OBJECT } from "../../rss/youtube/config";
import { BBC_RSS_CONFIG_OBJECT } from "./news/BBC/config";
import { GOOGLE_RSS_CONFIG_OBJECT } from "./news/Google/config";
import { SKY_NEWS_ROOT } from "./news/Sky/config";
import { ALJAZEERA_NEWS_ROOT } from "./news/aljazeera/config";

// FIX ME:
// @ts-ignore / okay this is annoying - what is this?
export const RSS_CONFIG_LIST: Map<string, any> = new Map([
	["skyNews", SKY_NEWS_ROOT],
	["aljazeera", ALJAZEERA_NEWS_ROOT],
	["bbcNews", BBC_RSS_CONFIG_OBJECT],
	["googleNews", GOOGLE_RSS_CONFIG_OBJECT],
	["youtube", YOUTUBE_RSS_CONFIG_OBJECT],
	["custom", CUSTOM_RSS_CONFIG_OBJECT],
]);
