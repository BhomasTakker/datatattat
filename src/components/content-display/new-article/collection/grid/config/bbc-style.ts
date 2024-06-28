import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import gridStyles from "../styles/bbc-grid-styles.module.scss";
import articleStyles from "../styles/bbc-article-styles.module.scss";
import { card_l2r, card_t2b } from "../../../config/article-items/card";
import { ScreenWidth } from "@/src/hooks/useWidth";

// It ain't bbc - it's just a thing
export const bbcGridFilter = (articles: CollectionItem[]) => {
	const { length } = articles;
	const remainder = length % 7;
	return articles.slice(0, length - remainder);
};

const defaultArticle = {
	card: card_t2b,
	gridStyle: gridStyles.second,
	styleSheet: articleStyles,
};

const displayCard = {
	card: card_t2b,
	gridStyle: gridStyles.main,
	styleSheet: articleStyles,
};
const displayCard_2 = {
	card: card_t2b,
	gridStyle: gridStyles.main_2,
	styleSheet: articleStyles,
};
const secondaryCard = {
	card: card_t2b,
	gridStyle: gridStyles.second,
	styleSheet: articleStyles,
};
const secondaryCard_2 = {
	card: card_t2b,
	gridStyle: gridStyles.second_2,
	styleSheet: articleStyles,
};
const thirdCard = {
	card: { ...card_l2r, classes: articleStyles.fullText },
	gridStyle: gridStyles.third,
	styleSheet: articleStyles,
};
const thirdCard_2 = {
	card: { ...card_l2r, classes: articleStyles.fullText },
	gridStyle: gridStyles.third_2,
	styleSheet: articleStyles,
};
// max size
const indexMap = new Map([
	[1, displayCard],
	[2, secondaryCard],
	[3, secondaryCard],
	[4, secondaryCard],
	[5, secondaryCard],
	[6, secondaryCard],
	[7, secondaryCard],
]);
const indexMap2 = new Map([
	[1, displayCard],
	[2, secondaryCard],
	[3, secondaryCard],
	[4, secondaryCard],
	[5, secondaryCard],
	[6, thirdCard],
	[7, thirdCard],
]);

const indexMap3 = new Map([
	[1, displayCard_2],
	[2, secondaryCard_2],
	[3, secondaryCard_2],
	[4, thirdCard_2],
	[5, thirdCard_2],
	[6, thirdCard_2],
	[7, thirdCard_2],
]);
const indexMap4 = new Map([
	[1, displayCard],
	[2, secondaryCard],
	[3, secondaryCard],
	[4, secondaryCard],
	[5, secondaryCard],
	[6, secondaryCard],
	[7, secondaryCard],
]);
const indexMap5 = new Map([
	[1, displayCard],
	[2, thirdCard],
	[3, thirdCard],
	[4, thirdCard],
	[5, thirdCard],
	[6, thirdCard],
	[7, thirdCard],
]);
export const bbcGridStyles = gridStyles;

const mapOfMaps = new Map([
	["xl", indexMap],
	["lg", indexMap2],
	["md", indexMap3],
	["sm", indexMap4],
	["xs", indexMap5],
]);

export const bbcGridItemStyle = (index: number, size: ScreenWidth) => {
	const itemStyleMap = mapOfMaps.get(size);

	if (!itemStyleMap) {
		// error / return default
		return {
			gridItemStyle: defaultArticle.gridStyle,
			card: defaultArticle.card,
		};
	}
	const { card, gridStyle, styleSheet } =
		itemStyleMap.get(index + 1) || defaultArticle;

	return {
		gridItemStyle: gridStyle,
		card: { ...card, styleSheet },
	};
};
