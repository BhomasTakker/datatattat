import { map } from "rxjs";
import { BingNewsArticle, BingNewsSearchResponse } from "./types";

// probably don't wrap in map here but ...
const toArticleList = (props: any) =>
	map((data: BingNewsSearchResponse) => {
		console.log("TO ARTICLE LIST");
		return {
			items: data.value,
		};
	});

const toArticle = (props: any) =>
	map((data: BingNewsArticle) => {
		console.log("TO ARTICLE");
		return {
			title: data.headline || data.name,
			description: data.description,
			author: data.provider["0"]?.name, //should drop all if
			pubDate: data.datePublished,
			//url might be article.url + article.name in some instances
			link: data.url,
			// no match in this instance?
			source: {
				url: data.url,
			}, // should drop all if
			category: data.category,
			guid: data.id,
			image: {
				url: data.image?.thumbnail?.contentUrl,
				title: data.headline || data.name,
				link: data.url,
			},
		};
	});

export const TRANSFORM = new Map<string, object>([
	// spelling toArticle(s)List should change
	["toArticlesList", toArticleList],
	["toArticle", toArticle],
]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([]);

export const BING_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
