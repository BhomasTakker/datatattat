import { ScreenWidth } from "@/src/hooks/useWidth";
import gridStyles from "../styles/oneTwoFour.module.scss";
import { card_l2r, card_t2b } from "../../../config/article-items/card";
import articleStyles from "../styles/oneTwoFour-article.module.scss";

export const oneTwoFourGridStyles = gridStyles;

const defaultArticle = {
	card: card_t2b,
	gridStyle: gridStyles.second,
	styleSheet: articleStyles,
};

const displayCard = {
	card: { ...card_t2b, classes: articleStyles.contentAspect },
	gridStyle: gridStyles.main_xl,
	styleSheet: articleStyles,
};
const displayCard_2 = {
	card: card_t2b,
	gridStyle: gridStyles.main_lg,
	styleSheet: articleStyles,
};
const displayCard_3 = {
	card: card_t2b,
	gridStyle: "",
	styleSheet: articleStyles,
};
const secondaryCard = {
	card: card_t2b,
	gridStyle: gridStyles.second_xl,
	styleSheet: articleStyles,
};
const secondaryCard_2 = {
	card: card_t2b,
	gridStyle: gridStyles.second_lg,
	styleSheet: articleStyles,
};
const thirdCard = {
	card: { ...card_l2r, classes: articleStyles.thinner },
	gridStyle: gridStyles.third_xl,
	styleSheet: articleStyles,
};
const thirdCard_2 = {
	card: { ...card_l2r, classes: articleStyles.thinner },
	gridStyle: gridStyles.third_lg,
	styleSheet: articleStyles,
};

const thirdCard_3 = {
	card: { ...card_l2r, classes: articleStyles.fatter },
	gridStyle: "", //gridStyles.third_sm,
	styleSheet: articleStyles,
};
// max size
const indexMap = new Map([
	[1, displayCard],
	[2, secondaryCard],
	[3, thirdCard],
	[4, thirdCard],
	[5, secondaryCard],
	[6, thirdCard],
	[7, thirdCard],
]);
const indexMap2 = new Map([
	[1, displayCard_2],
	[2, secondaryCard_2],
	[3, secondaryCard_2],
	[4, thirdCard_2],
	[5, thirdCard_2],
	[6, thirdCard_2],
	[7, thirdCard_2],
]);

const indexMap3 = new Map([
	[1, displayCard_3],
	[2, thirdCard_3],
	[3, thirdCard_3],
	[4, thirdCard_3],
	[5, thirdCard_3],
	[6, thirdCard_3],
	[7, thirdCard_3],
]);

const mapOfMaps = new Map([
	["xl", indexMap],
	["lg", indexMap],
	["md", indexMap2],
	["sm", indexMap3],
	["xs", indexMap3],
]);

export const oneTwoFourGridItemStyle = (index: number, size: ScreenWidth) => {
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
