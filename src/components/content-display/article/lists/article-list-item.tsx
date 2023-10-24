import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItemContextProvider } from "../items/context/list-item.context";
import {
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import { ArticleAvatar } from "../items/avatar/avatar";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { stripHTML } from "@/src/utils/html";
import { Details } from "@/src/types/data-structures/base";
import { Time } from "../items/time/Time";
import { MARGINS } from "config/styles/styles.config";

const Description = ({ description }: { description: string }) => {
	console.log("FETURE:0007", "Description", { description });
	return (
		<Typography
			sx={{
				maxWidth: "100%",
				display: "-webkit-box",
				// function to return this data
				// take num lines
				overflow: "hidden",
				textOverflow: "ellipsis",
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: 3,
				maxLines: 3,
			}}
			component="span"
			variant="body1"
			color="text.primary"
		>
			{stripHTML(description)}
		</Typography>
	);
};
const DetailsComponent = ({
	details,
	showPublished = false,
	showCategories = false,
	showpublishers = false,
	showAuthors = false,
}: {
	details?: Details;
	showPublished?: boolean;
	showCategories?: boolean;
	showpublishers?: boolean;
	showAuthors?: boolean;
}) => {
	const {
		published = null,
		categories = null,
		publishers = null,
		authors = null,
	} = details || {};
	console.log("FETURE:0007", "Details", {
		details,
		published,
		categories,
		publishers,
		authors,
	});
	return (
		<Stack
			direction="row"
			justifyContent={"space-between"}
			marginTop={MARGINS.SMALL}
		>
			{/* do something proper with the time!! */}
			{/* Like we want an image AND avatar component - we want Time - variant age/publish date */}
			{showPublished && <Time time={published} variant="age" />}
			{showCategories && <p>{categories?.join(", ")}</p>}
			{showpublishers && <p>{publishers?.join(", ")}</p>}
			{showAuthors && <p>{authors?.join(", ")}</p>}
		</Stack>
	);
};

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
			<ListItem>
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
					// always title
					primary={<Title text={title} variant={TitleVariant.ARTICLE} />}
					secondary={
						<Stack>
							{/* if show */}
							{showDescription && <Description description={description} />}
							<DetailsComponent
								details={details}
								showAuthors={showAuthor}
								showPublished={showPublished}
								showpublishers={showPublisher}
								showCategories={false}
							/>
						</Stack>
					}
				/>
			</ListItem>
		</ListItemContextProvider>
	);
};
