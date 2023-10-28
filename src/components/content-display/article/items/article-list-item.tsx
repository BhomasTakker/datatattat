import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItemContextProvider } from "./context/list-item.context";
import { ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material";
import { ArticleAvatar } from "./avatar/avatar";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { Description } from "./description/description";
import { DetailsComponent } from "./details/details";

export interface ArticleListItemProps {
	item: CollectionItem;
	useAvatar: boolean;
	showDescription: boolean;
	showPublished: boolean;
	showAuthor: boolean;
	showPublisher: boolean;
}

export const ArticleListItem = ({
	item,
	useAvatar,
	showDescription,
	showPublished,
	showAuthor,
	showPublisher,
}: ArticleListItemProps) => {
	const { title, avatar, src, description, guid, variant, details, media } =
		item;

	const lines = 3;

	// hack for BING article
	// need update BING
	// or update sky / general RSS / chase this up and fix
	const img = avatar ? avatar.src : "";

	console.log("FETURE:0007", "ARTICLE:LIST:ITEM", {
		item,
		useAvatar,
		showDescription,
		showPublished,
		showAuthor,
		showPublisher,
	});

	return (
		<ListItemContextProvider value={{ item }}>
			<ListItem data-testid="article-list-item">
				{/* if */}
				{useAvatar && (
					<ListItemAvatar>
						<ArticleAvatar alt={title} img={img} src={src} />
						{/* Icon */}
						{/* Logo */}
					</ListItemAvatar>
				)}
				<ListItemText
					disableTypography
					// title and title variant - == 'none'
					// always title? / we want type
					primary={<Title text={title} variant={TitleVariant.ARTICLE} />}
					secondary={
						// Create / get elsewhere
						<Stack margin={0} padding={0}>
							{/* if show */}
							{showDescription && <Description description={description} />}
							{(showAuthor || showPublished || showPublisher) && (
								<DetailsComponent
									details={details}
									showAuthors={showAuthor}
									showPublished={showPublished}
									showpublishers={showPublisher}
									showCategories={false}
								/>
							)}
						</Stack>
					}
				/>
			</ListItem>
		</ListItemContextProvider>
	);
};
