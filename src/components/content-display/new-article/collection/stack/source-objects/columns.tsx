import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import styles from "../styles/columns.module.scss";
import { ScreenWidth } from "@/src/hooks/useWidth";
import {
	ArticleComponentOptions,
	getComponent,
} from "../configs/article-components";
import { addCssClasses } from "../../../utils";
import { RenderObjectReturn } from "../../../types";
import { UnknownObject } from "@/src/types";

const renderStack =
	(
		size: ScreenWidth,
		showDisplay: boolean,
		card: ArticleComponentOptions = "card-display",
		args: UnknownObject
	) =>
	(articles: CollectionItem[]) => {
		return articles.map(
			(
				{ src, variant, avatar, details, description, guid, title, ...rest },
				index
			) => {
				let props;
				// don't like
				if (showDisplay && index === 0) {
					props = getComponent("card-display");
				} else {
					props = getComponent(card);
				}

				// think we don't want props object but actualt values
				// True - but how possible is this?
				return (
					<ArticleContainer
						key={src}
						src={src}
						props={{
							...props,
							src,
							variant,
							avatar,
							description,
							details,
							guid,
							title,
							...rest,
							// jeez / what were we doing?
							...args,
						}}
					/>
				);
			}
		);
	};

type StackVariantObject = {
	display?: boolean;
	columns?: number;
	card?: ArticleComponentOptions;
};

type Props = {
	stackVariantObject: StackVariantObject;
};

export const getColumnsRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<"div"> => {
	const { stackVariantObject, ...rest } = props;
	// rest contains query data etc.
	// seems to be a mistake getting, taking, using, here
	const {
		card = "card-t2b",
		display = false,
		columns = 4,
	} = stackVariantObject || {};

	return {
		renderList: renderStack(size, display, card, rest),
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
