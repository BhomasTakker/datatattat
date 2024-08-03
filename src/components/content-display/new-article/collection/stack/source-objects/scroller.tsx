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
import { UnknownObject } from "@/src/types";

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
		cardSize: CardSize,
		args: UnknownObject
	) =>
	(articles: CollectionItem[]) => {
		// make a function of me!
		let returnArticles = articles;
		if (limit) {
			returnArticles = articles.slice(0, limit);
		}
		return returnArticles.map(
			(
				{ src, variant, avatar, details, description, guid, title, ...rest },
				index
			) => {
				return (
					<ArticleContainer
						key={src}
						src={src}
						props={{
							...getComponent(card),
							src,
							variant,
							avatar,
							description,
							details,
							guid,
							title,
							...rest,
							// should not need this
							...args,
						}}
					/>
				);
			}
		);
	};

export const getScrollerRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<"div"> => {
	// Not a fan - we may want to revisit this
	const { stackVariantObject, ...rest } = props;
	const {
		limit = 0,
		card = "card-t2b",
		cardSize = "lg",
	} = stackVariantObject || {};
	console.log("7867", { props });
	return {
		// config,
		renderList: renderStack(size, limit, card, cardSize, rest),
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
