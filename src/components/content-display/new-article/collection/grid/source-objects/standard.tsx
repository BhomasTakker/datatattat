import { ScreenWidth } from "@/src/hooks/useWidth";
import { RenderObjectReturn } from "../../../types";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { addCssClasses } from "../../../utils";
import { ArticleContainer } from "../../../article/ArticleContainer";

import {
	getArticlesFilter,
	getGridItemStyle,
	getGridStyles,
} from "../config/standard";

type GridTypes = "bbc-style";

type Props = {
	gridType: GridTypes;
};

const renderList =
	(gridId: string, size: ScreenWidth) => (articles: CollectionItem[]) => {
		let filteredArticles = getArticlesFilter(gridId)(articles);
		const gridItemStyleFunction = getGridItemStyle(gridId);

		return filteredArticles.map(({ src }, index) => {
			const { gridItemStyle, card } = gridItemStyleFunction(index, size);
			return (
				<div key={src} className={gridItemStyle}>
					<ArticleContainer src={src} props={{ ...card, src }} />
				</div>
			);
		});
	};

export const getStandardGridRenderObject = (
	size: ScreenWidth,
	props: Props
	// It 'could' be a section BUT section may be better at the 'stack' level
): RenderObjectReturn<"section"> => {
	const { gridType } = props || {};

	console.log("9898 getStandardGridRenderObject", { props, size });

	const gridStyle = getGridStyles(gridType);

	// get article props and styles from config per index etc

	return {
		// pass config
		renderList: renderList(gridType, size),
		// get styles from config
		styles: addCssClasses(gridStyle.root, gridStyle[size]),
		styleSheet: null,
		as: "section",
	};
};
