import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { card_t2b } from "../../../config/article-items/card";
import { displayItemStandard } from "../../../config/article-items/display";
import standardStyles from "../styles/standard-grid.module.scss";

import cardStyle from "../styles/test.module.scss";
import { bbcGridItemStyle, bbcGridStyles } from "./bbc-style";
import { ScreenWidth } from "@/src/hooks/useWidth";
import { FilteredArticleProps } from "../../../types";
import { multiples } from "../filter";
import { oneTwoFourGridItemStyle, oneTwoFourGridStyles } from "./oneTwoFour";

///// Create functions / generics for each grid variation

// take in size
const fallbackGridItemStyle = (index: number, size: ScreenWidth) => {
	let gridItemStyle = standardStyles.gridItemBase;
	let card: FilteredArticleProps = { ...card_t2b, styleSheet: cardStyle };

	// gridMap this index === this/these style
	if (index === 0 || index == 3) {
		gridItemStyle = standardStyles.gridItemLarge;
		card = { ...displayItemStandard, styleSheet: {} };
	}
	// need defaults etc
	return {
		gridItemStyle,
		card,
	};
};

// Would you take in size?
const fallbackFilter = (articles: CollectionItem[]) => articles;

////////////////////////////

const fallbackGridStyle = standardStyles;

const getStyleMap = new Map([
	["bbc-style", bbcGridStyles],
	["oneTwoFour", oneTwoFourGridStyles],
]);

const filteredArticlesMap = new Map([
	["none", fallbackFilter],
	["bbc-style", multiples(7)],
	["oneTwoFour", multiples(7)],
]);

const gridStyleMap = new Map([
	["bbc-style", bbcGridItemStyle],
	["oneTwoFour", oneTwoFourGridItemStyle],
]);

export const getArticlesFilter = (gridId: string) => {
	return filteredArticlesMap.get(gridId) || fallbackFilter;
};

export const getGridStyles = (gridId: string) => {
	return getStyleMap.get(gridId) || fallbackGridStyle;
};

export const getGridItem = (gridId: string) => {
	return getStyleMap.get(gridId) || fallbackGridStyle;
};

export const getGridItemStyle = (gridId: string) => {
	return gridStyleMap.get(gridId) || fallbackGridItemStyle;
};
