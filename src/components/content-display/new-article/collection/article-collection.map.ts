import { carouselMap } from "./carousel/carousel.map";
import { listMap } from "./list/list.map";
import { stackMap } from "./stack/stack.map";

const articleCollectionMap = new Map([...stackMap, ...listMap, ...carouselMap]);

export default function getArticleCollection(id: string) {
	return articleCollectionMap.get(id);
}
