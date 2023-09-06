import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box, List, ListItem } from "@mui/material";
import { SimpleArticle } from "../items/simple-item";

interface SimpleArticleListProps {
	data: any; // should be data
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
	console.log("FEATURE:111", "SIMPLE:LIST", { data });
	const { items } = data;

	// We could allow a number of different types
	const componentList = items.map((item: any) => (
		<SimpleArticle key={item.link} {...item} />
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
