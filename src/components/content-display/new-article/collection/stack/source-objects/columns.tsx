import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import styles from "../styles/columns.module.scss";
import { ScreenWidth } from "@/src/hooks/useWidth";
import {
	ArticleComponentOptions,
	getComponent,
} from "../configs/article-components";
import { addCssClasses } from "../../../utils";
import { ElementType, ReactElement } from "react";
import { RenderObjectReturn } from "../../../types";

const renderStack =
	(
		// config: any,
		size: ScreenWidth,
		showDisplay: boolean,
		card: ArticleComponentOptions = "card-display"
	) =>
	(articles: CollectionItem[]) => {
		return articles.map(({ src }, index) => {
			let props;
			if (showDisplay && index === 0) {
				props = getComponent("card-display");
			} else {
				props = getComponent(card);
			}

			// think we don't want props object but actualt values
			return <ArticleContainer key={src} src={src} props={props} />;
		});
	};

type Props = {
	display?: boolean;
	columns?: number;
	card?: ArticleComponentOptions;
};
type Test = {
	size: string;
	display: boolean;
	card: string;
};

export const getColumnsRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<"div"> => {
	const { display = false, columns = 4, card = "card-t2b" } = props || {};
	return {
		// config,
		renderList: renderStack(size, display, card),
		// renderFunction: undefined,
		styles: addCssClasses(
			styles.columns,
			styles[size],
			display ? styles.display : "",
			styles["columns-" + columns],
			styles[card]
		),
		styleSheet: null,
		as: "div",
	};
};
