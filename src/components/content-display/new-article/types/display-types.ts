import {
	Align,
	ArticleType,
	As,
	Direction,
	Justify,
	ListItemStyle,
	Media,
	Size,
} from ".";

interface HtmlMeta {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}

type Base = {
	media: Media;
	meta: HtmlMeta;
	size: Size;
	type: ArticleType;
	showDescription: boolean;
	showImage: boolean;

	as: As;
};

export interface Display extends Base {
	type: "display";
	style: "";

	align: Align;
	justify: Justify;
}

export interface Card extends Base {
	type: "card";
	style: "";

	direction: Direction;
}

export interface ListItem extends Base {
	type: "listItem";
	style: ListItemStyle;
}
export type ArticleComponent = Display | Card | ListItem;

export type ListProps = Omit<ListItem, "meta">;
export type DisplayProps = Omit<Display, "meta">;
export type CardProps = Omit<Card, "meta">;