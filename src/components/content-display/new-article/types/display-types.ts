import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import {
	Align,
	ArticleType,
	As,
	Direction,
	Justify,
	ListItemStyle,
	Media,
	Size,
	Styles,
} from ".";
import { ArticleMetaData } from "../metadata/ArticleMetaData";

interface HtmlMeta {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}

type Base = {
	styleSheet: Styles;
	classes: string;
	media: Media;
	meta: HtmlMeta;
	size: Size;
	type: ArticleType;
	showDescription: boolean;
	showImage: boolean;

	showDetails: boolean;
	// Probably better in an object
	showPublished?: boolean;
	showAuthors?: boolean;
	showCategories?: boolean;
	showPublishers?: boolean;
	detailsProps: ArticleMetaData;

	as: As;
} & CollectionItem;

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

export type ListProps = Omit<ListItem, "meta" | "src">;
export type DisplayProps = Omit<Display, "meta" | "src">;
export type CardProps = Omit<Card, "meta" | "src">;

export type ArticleProps = ListProps | DisplayProps | CardProps;
