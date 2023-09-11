import { ARTICLE_LIST } from "./article/article-list.config";
import { SIMPLE_ARTICLE_LIST } from "./article/simple-list.config";
import { SIMPLE_LIST } from "./lists/simple-list.config";
// we should be using Maps as standard no?
// Better name for what these are
export const CONTENT_COMPONENTS = {
	SimpleArticleList: SIMPLE_ARTICLE_LIST,
	SimpleList: SIMPLE_LIST,
	ArticleList: ARTICLE_LIST,
} as const;