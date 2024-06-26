import { ScreenWidth } from "@/src/hooks/useWidth";
import { Display, DisplayProps, RenderObjectReturn } from "../../../types";
import { ArticleCarousel } from "../ArticleCarousel";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import styles from "../styles/display-carousel.module.scss";

type Props = {
	limit?: number;
};

const displayItem: DisplayProps = {
	type: "display",
	media: "article",
	style: "",
	align: "align-top",
	justify: "justify-start",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "article",
};

const renderList = (limit: number) => (articles: CollectionItem[]) => {
	let returnArticles = articles;
	if (limit) {
		returnArticles = articles.slice(0, limit);
	}

	return returnArticles.map(({ src }, index) => {
		return <ArticleContainer key={index} src={src} props={displayItem} />;
	});
};

export const getDisplayCarouselRenderObject = (
	size: ScreenWidth,
	props: Props
): RenderObjectReturn<typeof ArticleCarousel> => {
	const { limit = 0 } = props || {};
	console.log("LIST ", { props });

	return {
		renderList: renderList(+limit),
		// problem here - we can't just replace css file
		// we have issues referencing class elements
		// unless you pass the whole file
		styles: "",
		styleSheet: styles,
		as: ArticleCarousel,
	};
};
