// @ts-nocheck / renderObject and props

import { ElementType, PropsWithChildren, useMemo } from "react";
import { type ArticleCollection as ArticleCollectionProps } from "../types";

import { useWidth } from "@/src/hooks/useWidth";
import getArticleCollection from "./article-collection.map";
import { ArticleVariant } from "./stack/configs/article-components";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";

interface CollectionComponent<T extends ElementType> {
	articles: CollectionItem[];
	classes: string;
	as: T;
	styleSheet: {
		readonly [key: string]: string;
	} | null;
}

const CollectionComponent = <T extends ElementType>({
	articles,
	classes,
	as,
	children,
	styleSheet,
}: PropsWithChildren<CollectionComponent<T>>) => {
	const As = as;
	return (
		// ISSUE:0001
		// Perhaps props / we are adding articles as a prop where it may not be a valid prop / why?
		// Likely carousel or something / it is just for carousel at the moment
		// We should be able to test and apply if required / but yeah just for carousel this is not worth it
		<As className={classes} articles={articles} styleSheet={styleSheet}>
			{children}
		</As>
	);
};

export const ArticleCollection = ({
	data,
	variant = ArticleVariant.stack,
	variantTypeObject,
	...rest
}: ArticleCollectionProps) => {
	const { items: articles } = data;

	// Whereever possible do not use this
	// And for this we should be using container queries
	const screenWidth = useWidth();

	const { variantType } = variantTypeObject || {};

	const renderObject = useMemo(() => {
		return getArticleCollection(variantType);
	}, [variantType]);

	if (!renderObject) {
		return null;
	}

	const {
		renderList,
		styles,
		styleSheet,
		as = "div",
	} = renderObject(screenWidth, {
		...rest,
		...variantTypeObject,
	});

	return (
		<CollectionComponent
			classes={styles}
			articles={articles}
			as={as}
			styleSheet={styleSheet}
		>
			{renderList(articles)}
		</CollectionComponent>
	);
};
