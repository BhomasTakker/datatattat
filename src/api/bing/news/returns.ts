import { BingNewsSearchResponse } from "./types";

export const testReturn = (data: BingNewsSearchResponse) => {
	return {
		data: data.value,
	};
};

//just create a mod or whatever
//input obj
//label='My Title' ref = 'title'
//take the rest as a {} or dispose

//string identifier for an array value works
//which makes it easier to dynamically apply a value to a return
export const toArticleList = (data: BingNewsSearchResponse) => {
	const articleList = data.value.map((article) => {
		return {
			title: article.headline || article.name,
			url: article.url,
			image: article.image ? article.image.thumbnail.contentUrl : "", //need better working of all this / no image killed me
			description: article.description,
			author: article.provider["0"]?.name, //should drop all if
			published: article.datePublished,
			source: article.provider["0"]?.name, // should drop all if
		};
	});
	return {
		items: articleList,
	};
};

export const returns = {
	toArticleList,
};

export const toPaginatedArticleList = (data: BingNewsSearchResponse) => {};

export const toInfiniteScrollArticleList = (data: BingNewsSearchResponse) => {};
