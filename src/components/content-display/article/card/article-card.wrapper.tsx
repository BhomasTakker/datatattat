import { useAppSelector } from "@/src/store/hooks";
import { ArticleCard } from "./article-card";
import { screenSize } from "@/src/store/screen/screenSlice";
import { getConfig } from "./article-card.config";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { useWidth } from "@/src/hooks/useWidth";

export type ViewportSize = "xs" | "sm" | "md" | "lg" | "xl";
export type StackDirection =
	| "row"
	| "row-reverse"
	| "column"
	| "column-reverse";

export interface ArticleCardWrapperProps {
	item: CollectionItem;
	direction: StackDirection;
}

// Could be withComponent
// Could be Context
export const ArticleCardWrapper = ({
	direction,
	item,
}: ArticleCardWrapperProps) => {
	// const size = useAppSelector(screenSize);

	// We don't need here - it is an irrelevance
	// This is effectively just to 'show'
	// const size = useWidth();
	// We would need in a responsive wrapper i.e. list

	const props = getConfig({ variant: direction });

	return <ArticleCard {...props} item={item} />;
};
