import { SKY_NEWS_RSS_CREATOR } from "./news/Sky/constants";
import { ALJAZEERA_NEWS_RSS_CREATOR } from "./news/aljazeera/constants";

export const RSS_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["skyNews", SKY_NEWS_RSS_CREATOR],
	["aljazeera", ALJAZEERA_NEWS_RSS_CREATOR],
]);