import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box, List, ListItem } from "@mui/material";
import { SimpleArticle } from "../items/simple-item";
import { Collection } from "@/src/types/data-structures/collection/collection";
import { ListItemsMap } from "../items/list-items.map";
import { useCallback, useMemo } from "react";

interface SimpleArticleListProps {
	data: Collection; // should be data
	title: string;
	description: string;
	component: string; // union / enum really
}

const createComponentsList = (component: any, items: any[]) => {
	const Component = ListItemsMap.get(component) || SimpleArticle;
	const componentList = items.map((item) => (
		// use guid for key?
		<Component key={item.title} {...item} />
	));

	return componentList;
};

// we haven't added conversions to RSS or sky - whichever
// Is RSS not the standard though?
export const SimpleArticleList = ({
	data,
	title,
	description,
	component,
}: SimpleArticleListProps) => {
	const { items } = data;

	const componentList = useMemo(
		() => createComponentsList(component, items),
		[component, items]
	);

	return (
		<Box>
			{/* Need to make a typography component? */}
			{/* i.e.set numbe of variants */}
			<Title text={title} variant={TitleVariant.CONTENT} />
			<List>{componentList}</List>
		</Box>
	);
};
