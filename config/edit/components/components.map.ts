import { ARTICLE_STACK } from "@/src/components/content-display/article/stacks/article-stack.edit.config";
import { ARTICLE_LIST } from "./article/article-list.config";
import { SIMPLE_ARTICLE_LIST } from "./article/simple-list.config";
import { SIMPLE_LIST } from "./lists/simple-list.config";
import { SIMPLE_STACK } from "./stack/simple-stack.config";
import { ARTICLE_DISPLAY_STACK } from "@/src/components/content-display/article/stacks/article-display-stack.edit.config";
import { ARTICLE_GRID_STACK } from "@/src/components/content-display/article/grid/article-grid.controller.edit.config";
// we should be using Maps as standard no?
// Better name for what these are
export const CONTENT_COMPONENTS = {
	ArticleList: ARTICLE_LIST,
	ArticleStack: ARTICLE_DISPLAY_STACK,
	ArticleGrid: ARTICLE_GRID_STACK,

	SimpleArticleList: SIMPLE_ARTICLE_LIST,
	SimpleStack: SIMPLE_STACK,
	// rem below
	SimpleList: SIMPLE_LIST,
} as const;
