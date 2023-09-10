///// COLLECTION ///////
///// COLLECTION ITEM ///////

import { CollectionItem } from "./item/item";

export type Collection = BaseInfo & {
	////////////////////
	details?: Details;
	media?: Media;
	pagination?: Pagination;
	items: CollectionItem[];
};
