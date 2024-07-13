import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItemContextProvider } from "./context/list-item.context";
import { ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material";
import { ArticleAvatar } from "./avatar/avatar";
import { Description, DescriptionVariants } from "./description/description";
import { DetailsComponent, DetailsVariantType } from "./details/details";
import {
	ContentTitle,
	ContentTitleVariants,
} from "./content-title/content-title";

export interface ArticleListItemProps {
	item: CollectionItem;
	titleVariant?: ContentTitleVariants;
	titleMaxLines?: number;
	descriptionMaxLines?: number;
	useAvatar: boolean;
	showDescription: boolean;
	descriptionVariant?: DescriptionVariants;

	detailsVariant?: DetailsVariantType;
	showPublished: boolean;
	showAuthor: boolean;
	showPublisher: boolean;
}

export const ArticleListItem = ({
	item,
	titleVariant = "Primary",
	titleMaxLines = 2,
	descriptionMaxLines = 3,
	useAvatar,
	showDescription,
	descriptionVariant = "Primary",
	detailsVariant = "space-between",
	showPublished,
	showAuthor,
	showPublisher,
}: ArticleListItemProps) => {
	const { title, avatar, src, description, guid, variant, details } = item;

	// const maxLines = 3;

	// hack for BING article
	// need update BING
	// or update sky / general RSS / chase this up and fix
	const img = avatar ? avatar.src : "";

	return (
		<ListItemContextProvider value={{ item }}>
			<ListItem data-testid="article-list-item">
				{/* if */}
				{useAvatar && (
					<ListItemAvatar>
						{/* Avatar Variant */}
						<ArticleAvatar alt={title} img={img} src={src} />
						{/* Icon */}
						{/* Logo */}
					</ListItemAvatar>
				)}
				<ListItemText
					disableTypography
					// title and title variant - == 'none'
					// always title? / we want type
					primary={<ContentTitle title={title} maxLines={titleMaxLines} />}
					secondary={
						// Create / get elsewhere
						<Stack margin={0} padding={0}>
							{/* if show */}
							{showDescription && (
								<Description
									description={description}
									maxLines={descriptionMaxLines}
								/>
							)}
							{(showAuthor || showPublished || showPublisher) && (
								<DetailsComponent
									details={details}
									showAuthors={showAuthor}
									showPublished={showPublished}
									showpublishers={showPublisher}
									showCategories={false}
									variant={detailsVariant}
								/>
							)}
						</Stack>
					}
				/>
			</ListItem>
		</ListItemContextProvider>
	);
};
