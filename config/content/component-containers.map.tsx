import { ArticleList } from "@/src/components/content-display/article/lists/article-list";
import { SimpleArticleList } from "@/src/components/content-display/article/lists/simple-list";
import { ArticleStack } from "@/src/components/content-display/article/stacks/article-stack";
import { SimpleStack } from "@/src/components/content-display/article/stacks/simple-stack";

// 100% change to ArticleList
export const COMPONENTS_MAP = new Map<string, any>([
	["ArticleList", ArticleList],
	["ArticleStack", ArticleStack],

	//redundant
	["SimpleArticleList", SimpleArticleList],
	["SimpleStack", SimpleStack],
	// rem below

	["SimpleList", ArticleList],
]);
