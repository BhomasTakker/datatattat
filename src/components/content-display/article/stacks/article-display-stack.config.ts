// | "large-row"
// | "large-column"
// | "medium-row"
// | "medium-column"
// | "compact";

import { StackDirection } from "@/src/types/mui";
import { DisplayCardVariant } from "../card/display-card/config/display-card.config";
import {
	ArticleDisplayStackProps,
	ArticleDisplayStackVariant,
} from "./article-display-stack.wrapper";
import { StackProps } from "@mui/material";
import { ViewportSize } from "../card/article-card.wrapper";

type DisplayStackConfig = {
	itemLimit?: number;
	itemVariants?: DisplayCardVariant[]; // variant type
	itemVariant?: DisplayCardVariant;
	direction?: StackDirection;
} & StackProps;

export const standard: DisplayStackConfig = {
	itemVariant: "compact",
	itemVariants: ["compact"],
	itemLimit: 3,
};
export const column: DisplayStackConfig = {
	direction: "column",
	alignItems: "center",
	gap: "1rem",
};
export const row: DisplayStackConfig = {
	direction: "row",
	flexWrap: "wrap",
	// You want the container centered - the items left aigned?
	justifyContent: "center",
	gap: "1rem",
};
export const columnScroll: DisplayStackConfig = {
	direction: "column",
	// alignContent: "center",
	gap: "1rem",
	maxHeight: "100vh",
	overflow: "auto",
	alignItems: "center",
};
export const rowScroll: DisplayStackConfig = {
	direction: "row",
	justifyContent: "center",
	gap: "1rem",
	maxWidth: "100vw",
	overflow: "auto",
	paddingY: "1rem",
};
export const fancy: DisplayStackConfig = {
	direction: "row",
	// itemVariants: [
	// 	"large-row",
	// 	"medium-column",
	// 	"medium-column",
	// 	"medium-column",
	// 	"medium-column",
	// 	"medium-row",
	// 	"medium-row",
	// ],
	itemLimit: 7,
	justifyContent: "space-between",
};

export const fancyXs: DisplayStackConfig = {
	...fancy,
	itemVariant: "compact",
};

export const fancySm: DisplayStackConfig = {
	...fancy,
	itemVariant: "medium-column",
};

export const fancyMd: DisplayStackConfig = {
	...fancy,
	itemVariant: "medium-row",
};

export const fancyLg: DisplayStackConfig = {
	...fancy,
	itemVariant: "large-column",
};

export const fancyXl: DisplayStackConfig = {
	...fancy,
	itemVariant: "large-row",
};

// generic
type NestedDisplay = {
	xs?: DisplayStackConfig;
	sm?: DisplayStackConfig;
	md?: DisplayStackConfig;
	lg?: DisplayStackConfig;
	xl?: DisplayStackConfig;
};

// Would like to type 'string'
const configMap = new Map<string, DisplayStackConfig>([
	// ["standard", standard],
	["column", column],
	["row", row],
	["column-scroll", columnScroll],
	["row-scroll", rowScroll],
	// row-scroll / column-scroll
	// ["fancy-pants-xs", fancyXs],
	// ["fancy-pants-sm", fancySm],
	// ["fancy-pants-md", fancyMd],
	// ["fancy-pants-lg", fancyLg],
	// ["fancy-pants-xl", fancyXl],
]);

export const getArticleDisplayStackConfig = (
	variant: ArticleDisplayStackVariant,
	width: ViewportSize
) => {
	const config = configMap.get(`${variant}`) || column;

	return config;
};
