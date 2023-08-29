import { ARTICLE_LIST } from "./article/article-list.config";
import { SIMPLE_LIST } from "./lists/simple-list.config";
// we should be using Maps as standard no?
// Better name for what these are
export const CONTENT_COMPONENTS = {
	simplelist: SIMPLE_LIST,
	articlelist: ARTICLE_LIST,
} as const;
