import { CardProps } from "../../types";

export const baseCard: CardProps = {
	type: "card",
	style: "",
	media: "article",
	direction: "t2b",
	// we need to be able to add classes
	showDescription: true,
	showImage: true,
	size: "xl",
	styleSheet: {},
	classes: "",

	as: "article",
};

export const card_t2b: CardProps = {
	...baseCard,
	direction: "t2b",
};

export const card_r2l: CardProps = {
	...baseCard,
	direction: "r2l",
};

export const card_b2t: CardProps = {
	...baseCard,
	direction: "b2t",
};

export const card_l2r: CardProps = {
	...baseCard,
	direction: "l2r",
};
