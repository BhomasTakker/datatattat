import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box, List, ListItem } from "@mui/material";
import { SimpleArticle } from "../items/simple-item";
import { Collection } from "@/src/types/data-structures/collection/collection";
import { ListItemsMap } from "../items/list-items.map";

interface SimpleArticleListProps {
	data: Collection; // should be data
	title: string;
	description: string;
	component: string; // union / enum really
}

// we haven't added conversions to RSS or sky - whichever
// Is RSS not the standard though?
export const SimpleArticleList = ({
	data,
	title,
	description,
	component,
}: SimpleArticleListProps) => {
	const { items } = data;

	// We could use a variant for basic style?
	// Perhaps too tied in to Compoennt
	////////////////////////////
	// Or pass in itemClickFunctionality

	// Would you seperate this out?
	const Component = ListItemsMap.get(component) || SimpleArticle;
	const componentList = items.map((item) => (
		// use guid for key?
		<Component key={item.title} {...item} />
	));

	return (
		<Box>
			{/* Need to make a typography component? */}
			{/* i.e.set numbe of variants */}
			<Title text={title} variant={TitleVariant.CONTENT} />
			<List>{componentList}</List>
		</Box>
	);
};
