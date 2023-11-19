import { ArticleCard } from "../article-card";

import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { DisplayCardVariant, getConfig } from "./config/display-card.config";

export interface ArticleCardWrapperProps {
	item: CollectionItem;
	variant: DisplayCardVariant;
}

export const DisplayCard = ({ item, variant }: ArticleCardWrapperProps) => {
	const props = getConfig(variant);

	return <ArticleCard {...props} item={item} />;
};
