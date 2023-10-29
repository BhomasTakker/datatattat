import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Collection } from "@/src/types/data-structures/collection/collection";
import { Box, List } from "@mui/material";
import { ArticleListItem } from "../items/article-list-item";
import { log } from "@/src/lib/logger";

interface ArticleListProps {
	data: Collection; // should be data
	title: string;
	description: string;
	// component: string; // union / enum really

	useAvatar: boolean;
	showDescription: boolean;
	showPublished: boolean;
	showAuthor: boolean;
	showPublisher: boolean;
}

// Add variant for css class to use <- layout
//
// We expect article data
// We are going to display it in a list of article components
export const ArticleList = ({
	data,
	title,
	description,
	// component,
	useAvatar,
	showDescription,
	showPublished,
	showAuthor,
	showPublisher,

	...rest
}: ArticleListProps) => {
	const { items } = data;

	// Everything you need is in rest
	log({ code: "FEATURE:0007", context: "WTF" }, { data, rest });

	return (
		<Box data-testid="article-list">
			{/* Need to make a content title / intro component */}
			{/* i.e. either given details or component
			 - like a tweet as per the original idea */}
			{/* Why would this be here? */}
			{/* Why would or would not */}
			<Title text={title} variant={TitleVariant.CONTENT} />
			{/* We can spread variant list props into list sx */}
			{/* Pass props down to listItem and spread there? */}
			<List>
				{items.map((item) => (
					// argument to clone the data?
					<ArticleListItem
						key={item.title}
						item={item}
						useAvatar={useAvatar}
						showDescription={showDescription}
						showPublished={showPublished}
						showAuthor={showAuthor}
						showPublisher={showPublisher}
					/>
				))}
			</List>
		</Box>
	);
};
