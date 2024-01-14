// The 'new' one

import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material";
import { ContentTitle } from "../content-title/content-title";
import { Description } from "../description/description";
import { DetailsComponent } from "../details/details";
import { ArticleAvatar, AvatarSize } from "../../avatar/avatar";

export interface ArticleListItemProps {
	item: CollectionItem;
	// subset of
	direction: "row" | "column";
	avatarSize: AvatarSize;
	titleMaxLines: number;
	descriptionMaxLines: number;
	useAvatar: boolean;
	showDescription: boolean;

	showPublished: boolean;
	showAuthor: boolean;
	showPublisher: boolean;
}

export const ArticleListItem = ({
	item,
	direction,
	avatarSize,
	titleMaxLines,
	descriptionMaxLines,
	useAvatar,
	showDescription,
	showPublished,
	showAuthor,
	showPublisher,
	...rest
}: ArticleListItemProps) => {
	const { title, avatar, src, description, guid, variant, details, media } =
		item;

	const img = avatar?.src || "";
	return (
		<ListItem data-testid="article-list-item" {...rest}>
			{/* if */}
			{useAvatar && (
				<ListItemAvatar>
					{/* Avatar Variant */}
					<ArticleAvatar alt={title} img={img} src={src} size={avatarSize} />
					{/* Icon */}
					{/* Logo */}
				</ListItemAvatar>
			)}
			<ListItemText
				disableTypography
				sx={{
					// Should be passing this in
					display: "flex",
					flexDirection: direction,
					justifyContent: "space-between",
					margin: 0,
				}}
				primary={<ContentTitle title={title} maxLines={titleMaxLines} />}
				secondary={
					<Stack margin={0} padding={0}>
						{/* if show */}
						{showDescription && (
							<Description
								description={description}
								maxLines={descriptionMaxLines}
							/>
						)}
						{/* very wrong - probably choose one to show - published as default */}
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
	);
};
