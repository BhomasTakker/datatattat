import { CollectionItem } from "@/src/types/data-structures/collection/item/item";

// nerfed - we need to manage using multiples!
export const multiples = (multiple: number) => (articles: CollectionItem[]) => {
	const { length } = articles;
	const remainder = length % multiple;

	return articles.slice(0, multiple);
	return articles.slice(0, length - remainder);
};
