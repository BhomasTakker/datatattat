import { carouselMap } from "./carousel/carousel.map";
import { gridMap } from "./grid/grid.map";
import { listMap } from "./list/list.map";
import { mediaDisplayMap } from "./mediaDisplay/mediaDisplay.map";
import { ArticleVariant } from "./stack/configs/article-components";
import { stackMap } from "./stack/stack.map";

// @ts-ignore / types - props are incompatible - fix me
const articleCollectionMap = new Map([
	...stackMap,
	...listMap,
	...carouselMap,
	...gridMap,
	...mediaDisplayMap,
]);

export default function getArticleCollection(id: ArticleVariant) {
	return articleCollectionMap.get(id);
}
