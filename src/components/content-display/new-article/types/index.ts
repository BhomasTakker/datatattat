import { ElementType } from "react";

export * from "./collection-types";
export * from "./display-types";

export type Media = "article" | "video" | "audio";

// do properly
export type As = ElementType;
// export type Styles = { readonly [key: string]: string };

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Direction = "l2r" | "r2l" | "t2b" | "b2t";

export type ListItemStyle =
	| "one-zero-line"
	| "three-zero-line"
	| "five-zero-line"
	| "one-one-line"
	| "one-two-line"
	| "three-one-line"
	| "three-two-line"
	| "free-zero";
export type Style =
	| ListItemStyle
	| undefined
	| ""
	| "display"
	| "card"
	| "listItem";
export type ArticleType = "display" | "card" | "listItem";
export type Align =
	| "align-top"
	| "align-bottom"
	| "align-center"
	| "align-middle";

export type Justify =
	| "justify-start"
	| "justify-end"
	| "justify-center"
	| "justify-middle-start"
	| "justify-middle-end";

export type ClassName = string | undefined | null;
