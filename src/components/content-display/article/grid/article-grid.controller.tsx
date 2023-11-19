import { Collection } from "@/src/types/data-structures/collection/collection";
import { ArticleGrid } from "./article-grid";
import { getArticleGridConfig } from "./config/article-grid.controller.config";
import { useWidth } from "@/src/hooks/useWidth";

export type ArticleGridControllerVariant =
	| "display1"
	| "banner-list"
	| "banner-row-columns"
	| "column-columns";

export type ArticleGridControllerProps = {
	data: Collection;
	variant: ArticleGridControllerVariant;
};

export const ArticleGridController = ({
	data,
	variant,
}: ArticleGridControllerProps) => {
	const viewportWidth = useWidth();
	const config = getArticleGridConfig(variant, viewportWidth);
	const {
		displays,
		stacks,
		lists,
		feature,
		// default probably not correct
		gridTemplateAreas = "",
		gridTemplateColumns = "",
		gridTemplateRows = "",
		...rest
	} = config || {};

	console.log({ config });

	// Add children if want (children OR default)
	return (
		<ArticleGrid
			// Setting key here forces an update of the below when this changes!
			key={`${variant}-${viewportWidth}`}
			data={data}
			displays={displays}
			stacks={stacks}
			lists={lists}
			feature={feature}
			gridTemplateAreas={gridTemplateAreas}
			gridTemplateColumns={gridTemplateColumns}
			gridTemplateRows={gridTemplateRows}
			{...rest}
		/>
	);
};
