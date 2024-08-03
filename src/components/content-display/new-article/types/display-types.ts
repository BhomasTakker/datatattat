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
} from ".";
import { ArticleMetaData } from "../metadata/ArticleMetaData";
import { Styles } from "@/src/types/scss";

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

	showDetails?: boolean;
	// Probably better in an object
	showPublished?: boolean;
	showAuthors?: boolean;
	showCategories?: boolean;
	showPublishers?: boolean;
	// think delete - we need to go through these types
	detailsProps?: ArticleMetaData;

	// if interaction type display
	// we need a display id
	// We need to create a discriminating union
	// displayId?: string;

	as: As;
} & CollectionItem;

// This is one way we can build an article out of discriminating unions
type ArticleMixins = Base & Interaction & ContentTypeInterface;

export type Display = {
	type: "display";
	style: "";

	align: Align;
	justify: Justify;
} & ArticleMixins;

export type Card = {
	type: "card";
	style: "";

	direction: Direction;
} & ArticleMixins;

export type ListItem = {
	type: "listItem";
	style: ListItemStyle;
} & ArticleMixins;

export type ArticleComponent = Display | Card | ListItem;

export type ListProps = Omit<
	ListItem,
	| "meta"
	| "src"
	| "title"
	| "description"
	| "guid"
	| "variant"
	| "showDetails"
	| "detailsProps"
>;
export type DisplayProps = Omit<
	Display,
	| "meta"
	| "src"
	| "title"
	| "description"
	| "guid"
	| "variant"
	| "showDetails"
	| "detailsProps"
>;
export type CardProps = Omit<
	Card,
	| "meta"
	| "src"
	| "title"
	| "description"
	| "guid"
	| "variant"
	| "showDetails"
	| "detailsProps"
>;

export type ArticleProps = Display | Card | ListItem;
// rename and why the two?
export type FilteredArticleProps = ListProps | DisplayProps | CardProps;
