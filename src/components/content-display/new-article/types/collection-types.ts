import { Collection } from "@/src/types/data-structures/collection/collection";
import { type ArticleComponentOptions } from "../collection/stack/configs/article-components";
import { ElementType } from "react";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";

type Variant = "stack" | "list" | "grid" | "carousel";
type StackVariantType = "stack-columns";
type ListVariantType = "";
type GridVariantType = "";
type CarouselVariantType = "";

export type VariantType =
	| StackVariantType
	| ListVariantType
	| GridVariantType
	| CarouselVariantType;

type Base = {
	data: Collection;
	// articles: Article[];
	variant: Variant;
	// as: "div" | "ul" | "ol";
	variantTypeObject: {
		variantType: VariantType;
	};
	// variantType: VariantType;
};

interface StackCollection extends Base {
	// variantType: StackVariantType;

	card: ArticleComponentOptions;
	display: boolean;
	columns: number; // 1,2,3,4?
}

interface ListCollection extends Base {}

interface GridCollection extends Base {}

interface CarouselCollection extends Base {}

export type ArticleCollection =
	| StackCollection
	| ListCollection
	| GridCollection
	| CarouselCollection;

export type RenderObjectReturn<T extends ElementType> = {
	renderList: (articles: CollectionItem[]) => JSX.Element[];
	styles: string;
	styleSheet: {
		readonly [key: string]: string;
	} | null;
	as: T;
};
