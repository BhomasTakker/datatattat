import { Collection } from "@/src/types/data-structures/collection/collection";
import { Box, List } from "@mui/material";
import { ArticleListItem } from "../items/article-list-item";
import { log, setLog, setCode } from "@/src/lib/logger";
import {
	ContentTitle,
	ContentTitleVariants,
} from "../items/content-title/content-title";
import { DescriptionVariants } from "../items/description/description";
import { DetailsVariantType } from "../items/details/details";

// setLog(true);
// setCode("FEATURE:0010");

export interface ArticleListProps {
	data: Collection; // should be data

	// wider interface
	// these together in an interface
	componentTitle: string;
	componentTitleVariant: ContentTitleVariants;
	// these together in an interface
	componentDescription: string;
	componentDescriptionVariant: DescriptionVariants;
	// component: string; // union / enum really

	useAvatar: boolean;

	itemTitleVariant: ContentTitleVariants;
	itemTitleMaxLines: number;

	showDescription: boolean;
	itemDescriptionVariant: DescriptionVariants;
	itemDescriptionMaxLines: number;

	itemDetailsVariant: DetailsVariantType;

	showPublished: boolean;
	showAuthor: boolean;
	showPublisher: boolean;
}

// Add variant for css class to use <- layout
//
// We expect article data
// We are going to display it in a list of article components
// ...rest is probably our friend here
// ...rest it through to article list item
export const ArticleList = ({
	data,
	componentTitle,
	componentTitleVariant,
	componentDescription,
	componentDescriptionVariant,
	// component,
	useAvatar,

	itemTitleVariant,
	itemTitleMaxLines,

	showDescription,
	itemDescriptionVariant,
	itemDescriptionMaxLines,

	itemDetailsVariant,

	showPublished,
	showAuthor,
	showPublisher,

	...rest
}: ArticleListProps) => {
	const { items } = data;

	return (
		<Box data-testid="article-list">
			{/* Need to make a content title / intro component */}
			{/* i.e. either given details or component
			 - like a tweet as per the original idea */}
			{/* Why would this be here? */}
			{/* Why would or would not */}
			<ContentTitle title={componentTitle} variant={componentTitleVariant} />
			{/* <Title text={title} variant={TitleVariant.CONTENT} /> */}
			{/* Content Title */}

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
						descriptionVariant={itemDescriptionVariant}
						descriptionMaxLines={itemDescriptionMaxLines}
						showPublished={showPublished}
						showAuthor={showAuthor}
						showPublisher={showPublisher}
						titleVariant={itemTitleVariant}
						titleMaxLines={itemTitleMaxLines}
						detailsVariant={itemDetailsVariant}
					/>
				))}
			</List>
		</Box>
	);
};
