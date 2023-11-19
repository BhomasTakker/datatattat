import { ArticleGridController } from "@/src/components/content-display/article/grid/article-grid.controller";
import { ArticleListController } from "@/src/components/content-display/article/list/article-list.controller";
import { ArticleList } from "@/src/components/content-display/article/lists/article-list";
import { SimpleArticleList } from "@/src/components/content-display/article/lists/simple-list";
import { ArticleDisplayStack } from "@/src/components/content-display/article/stacks/article-display-stack.wrapper";
import { ArticleStack } from "@/src/components/content-display/article/stacks/article-stack";
import { SimpleStack } from "@/src/components/content-display/article/stacks/simple-stack";

// 100% change to ArticleList
export const COMPONENTS_MAP = new Map<string, any>([
	["ArticleList", ArticleListController],
	["ArticleStack", ArticleDisplayStack],
	["ArticleGrid", ArticleGridController],

	// ["ArticleList", ArticleList],
	// ["ArticleStack", ArticleStack],

	//redundant
	["SimpleArticleList", SimpleArticleList],
	["SimpleStack", SimpleStack],
	// rem below

	["SimpleList", ArticleList],
]);
