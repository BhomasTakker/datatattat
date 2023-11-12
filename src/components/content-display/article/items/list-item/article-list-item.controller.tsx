import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleListItem } from "./aticle-list-item";
import {
	ArticleListItemVariant,
	getArticleListItemConfig,
} from "./article-list-item.config";

export interface ArticleListItemControllerProps {
	item: CollectionItem;
	variant: ArticleListItemVariant;
}

// effectively pass in config list
export const ArticleListItemController = ({
	item,
	variant,
}: ArticleListItemControllerProps) => {
	const props = getArticleListItemConfig(variant);

	return <ArticleListItem {...props} item={item} />;
};
