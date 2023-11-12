import { Collection } from "@/src/types/data-structures/collection/collection";
import { List, ListProps } from "@mui/material";
import { ArticleListItemController } from "../items/list-item/article-list-item.controller";
import { ArticleListItemVariant } from "../items/list-item/article-list-item.config";

export type ArticleListProps = {
	data: Collection;
	variant?: ArticleListItemVariant;
	limit?: number;
} & ListProps;

export const ArticleList = ({
	data,
	children,
	variant = "expanded",
	limit,
	// we want to have overflow
	...rest
}: ArticleListProps) => {
	const { items = [] } = data;

	const renderItems = items.slice(0, limit || items.length);

	// Should we be showing title etc?
	// I expect that's better as a wrapper but maybe?
	// Probably is better here - greater control
	// just create a component

	// Use default or provided list
	const renderChildren = children
		? children
		: renderItems.map((item, i) => (
				// argument to clone the data?
				// Should we be loading a wrapper?
				<ArticleListItemController
					key={item.title}
					item={item}
					variant={variant}
				/>
		  ));

	return (
		<List {...rest} data-testid="article-list">
			{renderChildren}
		</List>
	);
};
