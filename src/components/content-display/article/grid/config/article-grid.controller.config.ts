import { MARGINS } from "config/styles/styles.config";
import { ArticleGridProps } from "../article-grid";
import { ArticleGridControllerVariant } from "../article-grid.controller";
import {
	articleGridDisplayExtraLarge,
	articleGridDisplayExtraSmall,
	articleGridDisplayLarge,
	articleGridDisplayMedium,
	articleGridDisplaySmall,
} from "./display1.config";
import { ViewportSize } from "../../card/article-card.wrapper";
import { bannerList, bannerListSmall } from "./banner-lists.config";
import {
	bannerRowColumns,
	bannerRowColumnsSmall,
} from "./banner-row-columns.config";
import {
	columnColumnsLarge,
	columnColumnsMid,
	columnColumnsMidSmall,
	columnColumnsSmall,
} from "./column-columns.config";

export type ArticleGridConfig = Omit<ArticleGridProps, "data" | "children">;

// Display 1 config / name
// do one for each viewport size
// i.e. getDisplay1 size => Display1

const configMap = new Map<string, ArticleGridConfig>([
	// spread options
	["display1-xl", articleGridDisplayExtraLarge],
	["display1-lg", articleGridDisplayLarge],
	["display1-md", articleGridDisplayMedium],
	["display1-sm", articleGridDisplaySmall],
	["display1-xs", articleGridDisplayExtraSmall],

	["banner-list-xl", bannerList],
	["banner-list-lg", bannerList],
	["banner-list-md", bannerList],
	["banner-list-sm", bannerListSmall],
	["banner-list-xs", bannerListSmall],

	["banner-row-columns-xl", bannerRowColumns],
	["banner-row-columns-lg", bannerRowColumns],
	["banner-row-columns-md", bannerRowColumns],
	["banner-row-columns-sm", bannerRowColumnsSmall],
	["banner-row-columns-xs", bannerRowColumnsSmall],

	["column-columns-xl", columnColumnsLarge],
	["column-columns-lg", columnColumnsLarge],
	["column-columns-md", columnColumnsMid],
	["column-columns-sm", columnColumnsMidSmall],
	["column-columns-xs", columnColumnsSmall],
]);

export const getArticleGridConfig = (
	variant: ArticleGridControllerVariant,
	viewport: ViewportSize
) => {
	// console.log("hello", { variant, viewport });
	return (
		configMap.get(`${variant}-${viewport}`) || articleGridDisplayExtraLarge
	);
};
