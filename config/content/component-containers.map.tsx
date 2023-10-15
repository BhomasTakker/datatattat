import { ArticleList } from "@/src/components/content-display/article/lists/article-list";
import { SimpleArticleList } from "@/src/components/content-display/article/lists/simple-list";
import { SimpleStack } from "@/src/components/content-display/article/stacks/simple-stack";

// 100% change to ArticleList
export const COMPONENTS_MAP = new Map<string, any>([
	["SimpleArticleList", SimpleArticleList],
	["SimpleStack", SimpleStack],
	// rem below
	["ArticleList", ArticleList],
	["SimpleList", ArticleList],
]);
