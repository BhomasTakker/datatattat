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
	contentDisplay = "contentDisplay",
}

export enum InteractionVariant {
	navigation = "navigation",
	display = "display",
	play = "play",
}

export const InteractionVariantOptions = [
	InteractionVariant.navigation,
	InteractionVariant.display,
	InteractionVariant.play,
] as const;

export type InteractionVariantOptions =
	| InteractionVariant.navigation
	| InteractionVariant.display
	| InteractionVariant.play;

export const ArticleVariantOptions = [
	ArticleVariant.grid,
	ArticleVariant.stack,
	ArticleVariant.list,
	ArticleVariant.carousel,
	ArticleVariant.contentDisplay,
] as const;

export type ArticleVariantOptions =
	| ArticleVariant.grid
	| ArticleVariant.stack
	| ArticleVariant.list
	| ArticleVariant.carousel
	| ArticleVariant.contentDisplay;

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
