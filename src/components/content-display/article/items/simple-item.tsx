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

interface SimpleArticleProps {
	title: string;
	content: string;
	enclosure: any;
}

export const SimpleArticle = ({
	title,
	avatar,
	src,
	description,
	guid,
	variant,
	details,
	media,
}: CollectionItem) => {
	// hack for BING article
	// need update BING
	// or update sky / general RSS
	const img = avatar ? avatar.src : "";

	// We want to do different things on click and/or hover

	const onClickHandler = () => {
		console.log(`GO TO ${src}`);
	};

	return (
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
					primary={title}
					secondary={
						// noWrap / need to ...
						// this alone just makes things a stupid length
						<Fragment>
							{/* Create a secondary content component  */}
							<Typography
								sx={{ display: "inline" }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{description}
							</Typography>
						</Fragment>
					}
				/>
			</ListItemButton>
		</ListItem>
	);
};
