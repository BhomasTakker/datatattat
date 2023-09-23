// https://www.bbc.co.uk/news/10628494
// http://feeds.bbci.co.uk/news/rss.xml
// Ask them what else there is once we have something?
//////////////////////////////////

import { returnBasicCreator } from "../../utils/creators";

// I think - all news urls have /news before them
const BASE_URL = "http://feeds.bbci.co.uk/news";
const POSTFIX = "/rss.xml";

const TOP_STORIES = "";
const WORLD = "/world";
const UK = "/uk";

export const BBC_CREATORS = [
	[
		"bbc_top_stories",
		returnBasicCreator(`${BASE_URL}${TOP_STORIES}${POSTFIX}`),
	],
	["bbc_news_world", returnBasicCreator(`${BASE_URL}${WORLD}${POSTFIX}`)],
	["bbc_news_uk", returnBasicCreator(`${BASE_URL}${UK}${POSTFIX}`)],
];
