import { CUSTOM_RSS_CONFIG_OBJECT } from "../../rss/custom/config";
import { YOUTUBE_RSS_CONFIG_OBJECT } from "../../rss/youtube/config";
import { BBC_NEWS_ROOT } from "./news/BBC/config";
import { GOOGLE_RSS_CONFIG_OBJECT } from "./news/Google/config";
import { SKY_NEWS_ROOT } from "./news/Sky/config";
import { ALJAZEERA_NEWS_ROOT } from "./news/aljazeera/config";
import { GBNEWS_ROOT } from "./news/gbnews/config";
import { NYTIMES_ROOT } from "./news/nytimes/config";

// What is the difference between me and
// src\query\rss\rss-map.ts
// why different files?

// FIX ME:
// @ts-ignore / okay this is annoying - what is this?
export const RSS_CONFIG_LIST: Map<string, any> = new Map([
	["skyNews", SKY_NEWS_ROOT],
	["aljazeera", ALJAZEERA_NEWS_ROOT],
	["bbcNews", BBC_NEWS_ROOT],
	["googleNews", GOOGLE_RSS_CONFIG_OBJECT],
	["gbnews", GBNEWS_ROOT],
	["New York Times", NYTIMES_ROOT],
	// ["youtube", YOUTUBE_RSS_CONFIG_OBJECT],
	// ["custom", CUSTOM_RSS_CONFIG_OBJECT],
]);
