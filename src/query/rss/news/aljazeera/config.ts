import { baseRSSConversion } from "../../rss-feed.config";

export const ALJAZEERA_NEWS_ROOT = {
	id: "aljazeera_news_endpoint",
	label: "There isn't one - can we omit?",

	queryId: "aljazeera",
	params: [],

	info: "id or explanation - or just an explanation",

	conversions: baseRSSConversion,
};
