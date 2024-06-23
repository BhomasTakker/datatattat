import { listMap } from "./list/list.map";
import { stackMap } from "./stack/stack.map";

const articleCollectionMap = new Map([...stackMap, ...listMap]);

export default function getArticleCollection(id: string) {
	return articleCollectionMap.get(id);
}
