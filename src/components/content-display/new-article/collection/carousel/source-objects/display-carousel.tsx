import { ScreenWidth } from "@/src/hooks/useWidth";
import { Display, DisplayProps, RenderObjectReturn } from "../../../types";
import { ArticleCarousel } from "../ArticleCarousel";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleContainer } from "../../../article/ArticleContainer";
import styles from "../styles/display-carousel.module.scss";
import { displayItemStandard } from "../../../config/article-items/display";

type Props = {
	limit?: number;
};

const renderList = (limit: number) => (articles: CollectionItem[]) => {
	let returnArticles = articles;
	if (limit) {
		returnArticles = articles.slice(0, limit);
	}

	// We may need to format props
	// we need to add src...

	return returnArticles.map(({ src }, index) => {
		return (
			<ArticleContainer
				key={index}
				src={src}
				props={{ ...displayItemStandard, src }}
			/>
		);
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
