import {
	card_b2t,
	card_l2r,
	card_r2l,
	card_t2b,
} from "../../../config/article-items/card";
import { displayItemStandard } from "../../../config/article-items/display";
import { CardProps, DisplayProps } from "../../../types";

export const ArticleComponentOptions = [
	"card-t2b",
	"card-b2t",
	"card-l2r",
	"card-r2l",
	"card-display",
] as const;

export type ArticleComponentOptions =
	| "card-t2b"
	| "card-b2t"
	| "card-l2r"
	| "card-r2l"
	| "card-display";

export enum ArticleVariant {
	grid = "grid",
	stack = "stack",
	list = "list",
	carousel = "carousel",
}

export const ArticleVariantOptions = [
	"grid",
	"stack",
	"list",
	"carousel",
] as const;

export type ArticleVariantOptions = "grid" | "stack" | "list" | "carousel";

const getComponentMap = new Map<
	ArticleComponentOptions,
	CardProps | DisplayProps
>([
	["card-t2b", card_t2b],
	["card-b2t", card_b2t],
	["card-l2r", card_l2r],
	["card-r2l", card_r2l],
	["card-display", displayItemStandard],
]);

export const getComponent = (id: ArticleComponentOptions) => {
	return getComponentMap.get(id) || card_t2b;
};
