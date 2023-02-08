import { BingNewsSearchResponse } from "./types";

export const testReturn = (data: BingNewsSearchResponse) => {
	return {
		data: data.value,
	};
};

//string identifier for an array value works
//which makes it easier to dynamically apply a value to a return
export const toArticleList = (data: BingNewsSearchResponse) => {
	const articleList = data.value.map((article) => {
		return {
			title: article.headline || article.name,
			url: article.url,
			image: article.image.thumbnail.contentUrl,
			description: article.description,
			author: article.provider["0"]?.name, //should drop all if
			published: article.datePublished,
			source: article.provider["0"]?.name, // should drop all if
		};
	});
	return {
		data: articleList,
	};
};

export const returns = {
	toArticleList,
};

export const toPaginatedArticleList = (data: BingNewsSearchResponse) => {};

export const toInfiniteScrollArticleList = (data: BingNewsSearchResponse) => {};
