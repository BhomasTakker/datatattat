// @ts-nocheck
import { carouselMap } from "./carousel/carousel.map";
import { gridMap } from "./grid/grid.map";
import { listMap } from "./list/list.map";
import { stackMap } from "./stack/stack.map";

// @ts-ignore / types - props are incompatible - fix me
const articleCollectionMap = new Map([
	...stackMap,
	...listMap,
	...carouselMap,
	...gridMap,
]);

export default function getArticleCollection(id: string) {
	return articleCollectionMap.get(id);
}
