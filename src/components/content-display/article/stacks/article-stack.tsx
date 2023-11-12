import { Collection } from "@/src/types/data-structures/collection/collection";
import { Divider, Stack, StackProps } from "@mui/material";
import { defaults } from "./article-stack.defaults";
import { ArticleCardWrapper } from "../card/article-card.wrapper";

export type ArticleStackProps = {
	data: Collection;
	// would just be divider yes/no~
	// wrong direction would be meaningless
	dividerVariant?: "none" | "vertical" | "horizontal";
	// useFlexWrap?: boolean;
} & StackProps;

export const ArticleStack = ({
	data,

	// remove this / we will just spread rest
	direction = defaults.direction,
	// alignItems = defaults.alignItems,
	// justifyContent = defaults.justifyContent,
	// spacing = defaults.spacing,
	dividerVariant = "none",

	// we need set width
	// set height
	// scroll

	children,
	...rest
}: // useFlexWrap = false,
ArticleStackProps) => {
	// As a basic - but we would probably want custom etc dividers?
	const divider =
		dividerVariant !== "none" ? (
			<Divider orientation={dividerVariant} flexItem />
		) : undefined;

	const { items = [] } = data;

	// Just go list variant && card Variant to use
	// if a card variant matches the index use that
	// else use the given card variant
	// Card variant in this instance is the card props data to use and not a variant prop

	// With rest props we can pretty much do anything layout
	// So if I want to setSize and no wrap and hide overflow and do scroll?
	// That 'Should' be just a variant / set of props

	// Now we have a 'default' AND we can pass in children from a wrapper
	// Function - pass in items return default
	const renderChildren = children
		? children
		: items.map((item, i) => (
				// argument to clone the data?
				// Should we be loading a wrapper?
				<ArticleCardWrapper key={item.title} item={item} direction={"row"} />
		  ));

	return (
		<Stack
			// flexWrap="wrap"
			// gap={spacing}
			direction={direction}
			// alignItems={alignItems}
			// justifyContent={justifyContent}
			divider={divider}
			{...rest}
			data-testid="article-stack"
		>
			{renderChildren}
		</Stack>
	);
};
