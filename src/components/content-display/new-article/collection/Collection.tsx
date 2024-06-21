import { useMemo } from "react";
import { type ArticleCollection as ArticleCollectionProps } from "../types";
import { ArticleStack } from "./stack/Stack";
import { ArticleList } from "./list/List";
import { ArticleGrid } from "./grid/Grid";
import { ArticleCarousel } from "./carousel/Carousel";

import { useWidth } from "@/src/hooks/useWidth";
import getArticleCollection from "./article-collection.map";
import { ArticleVariant } from "./stack/configs/article-components";

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

	const { renderFunction, renderList, styles, config } = renderObject(
		screenWidth,
		rest
	);
	// remove switch we can just build a component
	// We can just build a component for stack, grid, and list
	// Carousel - has buttons to interact
	// We almost certainly want to create an actual component
	switch (variant) {
		case "grid":
			return <ArticleGrid></ArticleGrid>;
		case "stack":
			// Remove
			return (
				<ArticleStack
					articles={articles}
					renderList={renderList}
					renderFunction={renderFunction}
					classes={styles}
				/>
			);
		case "list":
			return <ArticleList articles={[]} />;
		case "carousel":
			return <ArticleCarousel>{[]}</ArticleCarousel>;
	}
};
