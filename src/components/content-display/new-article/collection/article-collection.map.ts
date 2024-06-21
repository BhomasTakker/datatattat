import { stackMap } from "./stack/stack.map";

const articleCollectionMap = new Map([...stackMap]);

export default function getArticleCollection(id: string) {
	return articleCollectionMap.get(id);
}
