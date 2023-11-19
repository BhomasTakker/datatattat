import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleDisplayItem } from "./display-item";
import { ArticleDisplayItemVariant, getConfig } from "./display-item.config";

export interface ArticleDisplayItemControllerProps {
	item: CollectionItem;
	variant: ArticleDisplayItemVariant;
}

export const ArticleDisplayItemController = ({
	item,
	variant,
}: ArticleDisplayItemControllerProps) => {
	const props = getConfig(variant);

	return <ArticleDisplayItem {...props} item={item} />;
};
