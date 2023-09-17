import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import { Fragment } from "react";
import { ArticleAvatar } from "./avatar/avatar";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { ListItemContextProvider } from "./context/list-item.context";

interface SimpleArticleProps {
	title: string;
	content: string;
	enclosure: any;
}

export const SimpleArticle = (collectionItem: CollectionItem) => {
	const { title, avatar, src, description, guid, variant, details, media } =
		collectionItem;
	// hack for BING article
	// need update BING
	// or update sky / general RSS / chase this up and fix
	const img = avatar ? avatar.src : "";

	// We want to do different things on click and/or hover

	const onClickHandler = () => {
		console.log(`GO TO ${src}`);
	};

	return (
		<ListItemContextProvider value={{ item: collectionItem }}>
			<ListItem>
				{/* If link button - but next? */}
				{/* Create a compound component which just chooses which to use */}
				<ListItemButton
					selected={false}
					color={"primary"}
					onClick={onClickHandler}
					component="a"
					href={src}
				>
					<ListItemAvatar>
						<ArticleAvatar alt={title} img={img} src={src} />
					</ListItemAvatar>

					<ListItemText
						disableTypography
						primary={<Title text={title} variant={TitleVariant.ARTICLE} />}
						secondary={
							// noWrap / need to ...
							// this alone just makes things a stupid length
							// <Fragment>

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
								variant="body2"
								color="text.primary"
							>
								{description}
							</Typography>
							// </Fragment>
						}
					/>
				</ListItemButton>
			</ListItem>
		</ListItemContextProvider>
	);
};
