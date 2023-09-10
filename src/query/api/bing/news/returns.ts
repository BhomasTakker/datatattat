import { toArticleList } from "./conversions";
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

////////////////////////////////////////
//string identifier for an array value works
//which makes it easier to dynamically apply a value to a return
////////////////////////////////////////////////
// Effectivly we need a to A set object
// need protections/defaults for data
// export const toArticleList = (data: BingNewsSearchResponse) => {
// 	const articleList = data.value.map((article) => {
// 		return {
// 			title: article.headline || article.name,
// 			description: article.description,
// 			author: article.provider["0"]?.name, //should drop all if
// 			pubDate: article.datePublished,
// 			//url might be article.url + article.name in some instances
// 			link: article.url,
// 			// no match in this instance?
// 			source: {
// 				url: article.url,
// 			}, // should drop all if
// 			category: article.category,
// 			guid: article.id,
// 			image: {
// 				url: article.image?.thumbnail?.contentUrl,
// 				title: article.headline || article.name,
// 				link: article.url,
// 			},

// 			// I don't think we would from here?
// 			// enclosure: article.video ? {
// 			// 	type: 'video/mp4',// need check type in metadata?
// 			// 	length: '',
// 			// } : undefined,

// 			//url might be article.url + article.name in some instances
// 			// url: article.url,
// 			// image: article.image ? article.image.thumbnail.contentUrl : "", //need better working of all this / no image killed me

// 			// published: article.datePublished,
// 		};
// 	});
// 	return {
// 		items: articleList,
// 	};
// };

export const returns = {
	toArticleList,
};

export const toPaginatedArticleList = (data: BingNewsSearchResponse) => {};

export const toInfiniteScrollArticleList = (data: BingNewsSearchResponse) => {};
