import { ScreenWidth } from "@/src/hooks/useWidth";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import {
	ArticleComponentOptions,
	getComponent,
} from "../configs/article-components";
import { ArticleContainer } from "../../../article/ArticleContainer";
import { addCssClasses } from "../../../utils";
import styles from "../styles/scroller.module.scss";
import { RenderObjectReturn } from "../../../types";

type CardSize = "sm" | "md" | "lg";
type Options = {
	limit?: number;
	card?: ArticleComponentOptions;
	cardSize?: CardSize;
};
type Props = {
	stackVariantObject: Options;
};

const renderStack =
	(
		size: ScreenWidth,
		limit: number,
		card: ArticleComponentOptions,
		cardSize: CardSize
	) =>
	(articles: CollectionItem[]) => {
		// make a function of me!
		let returnArticles = articles;
		if (limit) {
			returnArticles = articles.slice(0, limit);
		}
		return returnArticles.map(({ src }, index) => {
			return (
				<ArticleContainer
					key={src}
					src={src}
					props={{ ...getComponent(card), src }}
				/>
			);
		});
	};

export const getScrollerRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<"div"> => {
	// Not a fan - we may want to revisit this
	const { stackVariantObject } = props;
	const {
		limit = 0,
		card = "card-t2b",
		cardSize = "lg",
	} = stackVariantObject || {};
	console.log("7867", { props });
	return {
		// config,
		renderList: renderStack(size, limit, card, cardSize),
		// renderFunction: undefined,
		styles: addCssClasses(
			styles.root,
			styles[size],
			styles[card],
			styles[`card-${cardSize}`]
		),
		styleSheet: null,
		as: "div",
	};
};
