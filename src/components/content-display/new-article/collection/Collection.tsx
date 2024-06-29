// @ts-nocheck

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
		// Fix this issue - we'll need to ts-ignore
		// @ts-ignore
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
