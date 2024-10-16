import { DisplayItem } from "./display-item";
import { SimpleArticle } from "./simple-item";
import { TitleListItem } from "./title-list-item";

export const ListItemsMap = new Map([
	["SimpleItem", SimpleArticle],
	["TitleItem", TitleListItem],
	["DisplayItem", DisplayItem],
]);
