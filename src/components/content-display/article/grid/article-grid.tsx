import { Collection } from "@/src/types/data-structures/collection/collection";
import { Box, List, Stack } from "@mui/material";
import CSS from "csstype";
import { ReactNode } from "react";
import {
	ArticleDisplayStack,
	ArticleDisplayStackVariant,
} from "../stacks/article-display-stack.wrapper";
import {
	ArticleListController,
	ArticleListVariant,
} from "../list/article-list.controller";
import { DisplayCard } from "../card/display-card/display-card.controller";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { DisplayCardVariant } from "../card/display-card/config/display-card.config";
import { LAYOUT } from "config/styles/styles.config";
import { StackProps } from "@/src/types/mui";
import { ArticleDisplayItemController } from "../display-item/display-item.controller";

type ItemIds = [number, number];

type ArticleFeature = {
	item: number;
};

type ArticleDisplay = {
	variant: DisplayCardVariant;
	item: number;
};
type ArticleStack = {
	variant: ArticleDisplayStackVariant;
	componentVariant: DisplayCardVariant;
	limit: number;
	items: ItemIds;
} & StackProps;
type ArticleList = {
	variant: ArticleListVariant;
	items: ItemIds;
	limit: number;
};

export type ArticleGridProps = {
	data: Collection;
	children?: ReactNode;
	feature?: ArticleFeature | undefined;
	displays?: ArticleDisplay[] | undefined;
	stacks?: ArticleStack[] | undefined;
	lists?: ArticleList[] | undefined;

	gridTemplateAreas: string;
	gridTemplateColumns: string;
	gridTemplateRows: string;
} & CSS.Properties;

const getItemsDataObject = (items: CollectionItem[], itemIds: ItemIds) => {
	return {
		// whyy persist with dead parameters
		title: "",
		description: "",
		src: "",
		variant: "",
		guid: "",
		items: items.slice(...itemIds),
	};
};

type GridItemProps = { gridId: string; children: ReactNode };
const GridItem = ({ gridId, children }: GridItemProps) => {
	return (
		<Box
			sx={{
				gridArea: gridId,
			}}
		>
			{children}
		</Box>
	);
};

// List of available things we can use - variant
// Would be variant and variant though no?
const renderFeature = (
	feature: ArticleFeature | undefined,
	items: CollectionItem[]
) => {
	if (!feature) {
		return null;
	}
	// this is incorrect at the moment
	// probably pass items
	// do a switch of available 'features'
	const { item } = feature;

	return (
		<GridItem key={`feature`} gridId={`feature`}>
			{/* be a wrapper to pass an array into */}
			<ArticleDisplayItemController item={items[item]} variant="full-banner" />
		</GridItem>
	);
};

// Need more than just cards / i.e. graphs / data displays
// Article time - i.e. time - article1, time - article2
const renderDisplays = (
	displays: ArticleDisplay[],
	items: CollectionItem[]
) => {
	return displays.map(({ variant, item }, i) => (
		<GridItem key={`display${i + 1}`} gridId={`display${i + 1}`}>
			<DisplayCard
				item={items[item]}
				variant={variant}
				key={items[item].toString()}
			></DisplayCard>
		</GridItem>
	));
};

const renderStacks = (stacks: ArticleStack[], items: CollectionItem[]) => {
	return stacks.map((stack, i) => {
		const { variant, componentVariant, limit, items: itemIds, ...rest } = stack;

		return (
			<GridItem key={`stack${i + 1}`} gridId={`stack${i + 1}`}>
				<ArticleDisplayStack
					key={stack.toString()}
					// need rest
					data={getItemsDataObject(items, itemIds)}
					variant={variant}
					componentVariant={componentVariant}
					limit={limit}
					{...rest}
				></ArticleDisplayStack>
			</GridItem>
		);
	});
};

const renderLists = (lists: ArticleList[], items: CollectionItem[]) => {
	return lists.map((list, i) => {
		const { variant, limit, items: itemIds } = list;

		return (
			<GridItem key={`list${i + 1}`} gridId={`list${i + 1}`}>
				<ArticleListController
					data={getItemsDataObject(items, itemIds)}
					variant={variant}
					limit={limit}
					key={list.toString()}
				></ArticleListController>
			</GridItem>
		);
	});
};

export const ArticleGrid = ({
	data,

	lists = [],
	stacks = [],
	feature,
	displays = [],

	gridTemplateAreas,
	gridTemplateColumns,
	gridTemplateRows,

	children,
	...rest
}: ArticleGridProps) => {
	const { items = [] } = data;

	const renderComponent = children ? (
		children
	) : (
		<>
			{/* memoise  */}
			{renderLists(lists, items)}
			{renderStacks(stacks, items)}
			{renderFeature(feature, items)}
			{renderDisplays(displays, items)}
		</>
	);

	return (
		<Box
			sx={{
				// You Have to have these - cannot rely on rest props
				width: "100%",
				display: "grid",
				gridTemplateAreas,
				gridTemplateColumns,
				gridTemplateRows,
				...rest,
			}}
		>
			{renderComponent}
		</Box>
	);
};
