import { Collection } from "@/src/types/data-structures/collection/collection";
import { Divider, Stack } from "@mui/material";
import { ArticleCard } from "../card/article-card";

// StackTypeMap ??
export interface ArticleStackProps {
	data: Collection;
	direction?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
	alignItems?:
		| "flex-start"
		| "center"
		| "flex-end"
		| "stretch"
		| "baseline"
		| undefined;
	justifyContent?:
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly"
		| undefined;
	spacing?: number;
	dividerVariant?: "none" | "vertical" | "horizontal";
	useFlexWrap?: boolean;
}

// Could have divider - useVariant = none

export const ArticleStack = ({
	data,

	direction = "row",
	alignItems = "center",
	justifyContent = "center",
	spacing = 1,
	dividerVariant = "none",
	useFlexWrap = false,
}: ArticleStackProps) => {
	// As a basic - but we would probably want custom etc dividers?
	const divider =
		dividerVariant !== "none" ? (
			<Divider orientation={dividerVariant} flexItem />
		) : undefined;

	const { items = [] } = data;

	// hmmm?
	const flexWrap = { useFlexGap: true, flexWrap: "wrap" };

	console.log("FEATURE:0011", "ARTICLE:STACK", { dividerVariant, divider });

	return (
		<Stack
			// responsive values
			//  direction={{ xs: 'column', sm: 'row' }}
			// spacing={{ xs: 1, sm: 2, md: 4 }}
			// {...flexWrap}
			// useFlexGap
			// useFlexGap={true}
			flexWrap="wrap"
			gap={spacing}
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			// spacing and gap together causing problems
			// spacing={spacing}
			divider={divider}
			// width={"30%"}
			// minWidth={"30%"}
			// maxWidth={"100%"}
			data-testid="article-stack"
		>
			{items.map((item, i) => (
				// argument to clone the data?
				<ArticleCard key={item.title} item={item} layout={"row"} />
			))}
		</Stack>
	);
};
