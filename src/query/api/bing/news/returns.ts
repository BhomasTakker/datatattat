import { toArticleList } from "./conversions";
import { BingNewsSearchResponse } from "./types";

// An unused Reference - delete me and concept

export const testReturn = (data: BingNewsSearchResponse) => {
	return {
		data: data.value,
	};
};

export const returns = {
	toArticleList,
};

export const toPaginatedArticleList = (data: BingNewsSearchResponse) => {};

export const toInfiniteScrollArticleList = (data: BingNewsSearchResponse) => {};
