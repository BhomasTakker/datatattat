import { Collection } from "@/src/types/data-structures/collection/collection";
import { ArticleStack } from "./article-stack";
import { useWidth } from "@/src/hooks/useWidth";
import { DisplayCard } from "../card/display-card.controller";
import { DisplayCardVariant } from "../card/display-card.config";
import { getArticleDisplayStackConfig } from "./article-display-stack.config";

export type ArticleDisplayStackVariant =
	| "column"
	| "row"
	| "column-scroll"
	| "row-scroll";

export type ArticleDisplayStackProps = {
	data: Collection;
	variant: ArticleDisplayStackVariant;
	componentVariant: DisplayCardVariant;
	limit?: number;
};

// instead of wrapper call it controller perhaps?
export const ArticleDisplayStack = ({
	data,
	variant,
	componentVariant,
	limit,
}: ArticleDisplayStackProps) => {
	const { items = [] } = data;
	const width = useWidth();
	const config = getArticleDisplayStackConfig(variant, width);
	const { itemLimit, itemVariants, itemVariant, direction, ...rest } = config;

	// set limit overides user input
	// 0 indicates ALL items? or just put length or more
	const renderItems = items.slice(0, itemLimit || limit || items.length);

	const cards = renderItems.map((item, i) => {
		const variant =
			(itemVariants && itemVariants[i]) || itemVariant || componentVariant;
		// function pass index and variant
		// check config
		// return card - Article Card with props
		return (
			<DisplayCard
				key={item.title}
				item={item}
				variant={variant as DisplayCardVariant}
			/>
		);
	});

	return (
		<ArticleStack data={data} direction={direction} {...rest}>
			{cards}
		</ArticleStack>
	);
};
