import { Collection } from "@/src/types/data-structures/collection/collection";
import { ArticleList } from "./article-list";
import { getArticleListConfig } from "./article-list.config";

export type ArticleListVariant =
	| "compact-standard"
	| "compact-scroll"
	| "expanded-standard"
	| "expanded-scroll";

export type ArticleListControllerProps = {
	data: Collection;
	variant: ArticleListVariant;
	limit?: number;
};

export const ArticleListController = ({
	data,
	variant,
	limit,
}: ArticleListControllerProps) => {
	const config = getArticleListConfig(variant);
	const { variant: listVariant, ...rest } = config;
	// Add children if want (children OR default)
	return (
		<ArticleList data={data} limit={limit} variant={listVariant} {...rest} />
	);
};
