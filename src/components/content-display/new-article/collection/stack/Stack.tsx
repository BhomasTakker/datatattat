import { PropsWithChildren, ReactElement } from "react";
import styles from "./Stack.module.scss";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { useCssClasses } from "../../hooks/useCssClasses";

type Base = {
	classes?: string;
};
// better type? if renderList then no function
type ArticleStackRenderFunction = {
	articles: CollectionItem[];
	renderFunction: (item: CollectionItem) => ReactElement;
	// renderList?: (items: CollectionItem[]) => ReactElement[];
} & Base;

type ArticleStackRenderList = {
	articles: CollectionItem[];
	renderList: (items: CollectionItem[]) => ReactElement[];
	// renderFunction?: (item: CollectionItem) => ReactElement;
} & Base;

export const ArticleStack = (
	props: ArticleStackRenderFunction | ArticleStackRenderList
) => {
	// we want to be able to alternate styles
	// give alternating styles etc
	// We also want to be able to stack 'stacks'
	// i.e. a display followed by three cards in a row followed by x
	/////////////////////////////////////////////////////////
	// pass in a render function
	// So WE don't give a ...
	// WE are just the stack
	const { articles, classes } = props;
	const root = useCssClasses(styles.root, classes);

	if ("renderList" in props) {
		const { renderList } = props;
		return <div className={root}>{renderList(articles)}</div>;
	}

	const { renderFunction } = props;
	return <div className={root}>{articles.map(renderFunction)}</div>;
};
