import { ArticleList } from "@/src/components/content-display/article/lists/article-list";
import { SimpleArticleList } from "@/src/components/content-display/article/lists/simple-list";

// 100% change to ArticleList
export const COMPONENTS_MAP = new Map<string, any>([
	["SimpleArticleList", SimpleArticleList],
	["ArticleList", ArticleList],
	["SimpleList", ArticleList],
]);
