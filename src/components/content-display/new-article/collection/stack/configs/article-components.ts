import { Card, Display } from "../../../types";

type CardProps = Omit<Card, "meta">;
type DisplayProps = Omit<Display, "meta">;

const baseCard: Omit<Card, "meta"> = {
	type: "card",
	style: "",
	media: "article",
	direction: "t2b",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "div",
};

const t2b: CardProps = {
	...baseCard,
	direction: "t2b",
};

const r2l: CardProps = {
	...baseCard,
	direction: "r2l",
};

const b2t: CardProps = {
	...baseCard,
	direction: "b2t",
};

const l2r: CardProps = {
	...baseCard,
	direction: "l2r",
};

const display: DisplayProps = {
	type: "display",
	style: "",
	align: "align-top",
	justify: "justify-start",
	media: "article",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "div",
};

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
	["card-t2b", t2b],
	["card-b2t", b2t],
	["card-l2r", l2r],
	["card-r2l", r2l],
	["card-display", display],
]);

export const getComponent = (id: ArticleComponentOptions) => {
	return getComponentMap.get(id) || t2b;
};
