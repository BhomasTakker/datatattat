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
import { UnknownObject } from "@/src/types";

type GridTypes = "bbc-style" | "oneTwoFour";

type Props = {
	gridType: GridTypes;
};

const renderList =
	(gridId: string, size: ScreenWidth, args: UnknownObject) =>
	(articles: CollectionItem[]) => {
		let filteredArticles = getArticlesFilter(gridId)(articles);
		const gridItemStyleFunction = getGridItemStyle(gridId);

		return filteredArticles.map(
			(
				{ src, variant, avatar, details, description, guid, title, ...rest },
				index
			) => {
				const { gridItemStyle, card } = gridItemStyleFunction(index, size);
				return (
					<div key={src} className={gridItemStyle}>
						<ArticleContainer
							src={src}
							props={{
								...card,
								src,
								variant,
								avatar,
								description,
								details,
								guid,
								title,
								...rest,
								// should not need
								...args,
							}}
						/>
					</div>
				);
			}
		);
	};

export const getStandardGridRenderObject = (
	size: ScreenWidth,
	props: Props
	// It 'could' be a section BUT section may be better at the 'stack' level
): RenderObjectReturn<"section"> => {
	const { gridType, ...rest } = props || {};

	const gridStyle = getGridStyles(gridType);

	return {
		renderList: renderList(gridType, size, rest),
		styles: addCssClasses(gridStyle.root, gridStyle[size]),
		styleSheet: null,
		as: "section",
	};
};
