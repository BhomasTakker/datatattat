import { ScreenWidth } from "@/src/hooks/useWidth";
import { DisplayProps, RenderObjectReturn } from "../../../types";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { addCssClasses } from "../../../utils";
import { ArticleContainer } from "../../../article/ArticleContainer";

import styles from "../styles/standard-grid.module.scss";

type Props = {};

const displayItem: DisplayProps = {
	type: "display",
	media: "article",
	style: "",
	align: "align-top",
	justify: "justify-start",
	showDescription: true,
	showImage: true,
	size: "xl",

	as: "article",
};

const renderList = () => (articles: CollectionItem[]) => {
	// number of grid things
	return articles.map(({ src }, index) => {
		return (
			<div key={src}>
				<ArticleContainer src={src} props={displayItem} />
			</div>
		);
	});
};

export const getStandardGridRenderObject = (
	size: ScreenWidth,
	props: Props
	// It 'could' be a section BUT section may e abetter at the 'stack' level
): RenderObjectReturn<"section"> => {
	const {} = props || {};

	return {
		renderList: renderList(),
		styles: addCssClasses(styles.root, styles[size]),
		styleSheet: null,
		as: "section",
	};
};
