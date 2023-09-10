import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box, List, ListItem } from "@mui/material";
import { SimpleArticle } from "../items/simple-item";
import { Collection } from "@/src/types/data-structures/collection/collection";

interface SimpleArticleListProps {
	data: Collection; // should be data
	title: string;
	description: string;
}

// we haven't added conversions to RSS or sky - whichever
// Is RSS not the standard though?
export const SimpleArticleList = ({
	data,
	title,
	description,
}: SimpleArticleListProps) => {
	console.log("FEATURE:753", "SIMPLE:LIST", { data, title, description });
	const { items } = data;

	// We could allow a number of different types
	const componentList = items.map((item) => (
		// use guid for key
		<SimpleArticle key={item.title} {...item} />
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
