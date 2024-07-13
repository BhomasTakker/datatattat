import { map } from "rxjs";
import { BingNewsArticle, BingNewsSearchResponse } from "./types";
import { Collection } from "@/src/types/data-structures/collection/collection";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";

// bingResponseToCollection type = article
// bingItemToItem

const toCollection = (props: any) => {
	return map((data: BingNewsSearchResponse): Collection => {
		const { id, totalEstimatedMatches, value } = data;
		// console.log("TO COLLECTION ", { props });
		// pagination: {}
		return {
			title: id,
			src: "www.bing.com",
			description: "",
			guid: "",
			variant: "article",
			items: value as unknown as CollectionItem[],
			pagination: {
				results: totalEstimatedMatches,
			},
		};
	});
};

const toCollectionItem = (props: any) => {
	return map((data: BingNewsArticle): CollectionItem => {
		const {
			id,
			description,
			headline,
			datePublished,
			provider,
			url,
			category,
			image,
			name,
		} = data;
		const publishers = provider.map(({ name }) => name);
		return {
			title: name,
			src: url,
			description,
			guid: "",
			variant: "article",
			details: {
				published: datePublished,
				categories: category ? [category] : [],
				publishers,
			},
			avatar: {
				src: image?.thumbnail?.contentUrl,
				alt: headline || name,
				// link: url,
			},
		};
	});
};

// probably don't wrap in map here but ...
export const toArticleList = (props: any) =>
	map((data: BingNewsSearchResponse) => {
		// console.log("TO ARTICLE LIST");
		return {
			items: data.value,
		};
	});
// go over
const toArticle = (props: any) =>
	map((data: BingNewsArticle) => {
		// console.log("TO ARTICLE");
		return {
			title: data.headline || data.name,
			description: data.description,
			author: data.provider?.["0"]?.name, //should drop all if
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
	["toCollection", toCollection],
	["toCollectionItem", toCollectionItem],
]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([]);

export const BING_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
