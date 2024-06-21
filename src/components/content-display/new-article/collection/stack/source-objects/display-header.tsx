import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import { Card, Display } from "../../../types";
import styles from "../styles/display-header.module.scss";
import { ScreenWidth } from "@/src/hooks/useWidth";
const display: Omit<Display, "meta"> = {
	type: "display",
	style: "",
	align: "align-top",
	justify: "justify-start",
	media: "article",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "div",
};

const stack: Omit<Card, "meta"> = {
	type: "card",
	style: "",
	media: "article",
	direction: "l2r",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "div",
};

const config = { stuff: "stuff" };
const renderStack =
	(config: any, size: ScreenWidth) => (articles: CollectionItem[]) => {
		console.log("CONFIG", { config });
		return articles.map(({ src }, index) => {
			let props;
			if (index === 0) {
				props = display;
			} else {
				props = stack;
			}
			// think we don't want props object but actualt values
			return <ArticleContainer key={src} src={src} props={props} />;
		});
	};

type Props = {};

export const getDisplayHeaderRenderObject = (size: ScreenWidth, _: Props) => {
	return {
		config,
		// what if you need to pass style to item?
		renderList: renderStack(config, size),
		renderFunction: undefined,
		// create a cssClasses joiner
		styles: styles.displayHeader,
	};
};
