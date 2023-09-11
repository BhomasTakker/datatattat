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
	console.log(
		"FEATURE:753",
		"SIMPLE:ARTICLE",
		{ title },
		{ avatar },
		{ src },
		{ description }
	);
	const img = avatar ? avatar.src : "";

	// We want to do different things on click and/or hover

	const onClickHandler = () => {
		console.log(`GO TO ${src}`);
	};

	return (
		<ListItem>
			{/* If link button - but next? */}
			<ListItemButton
				selected={false}
				color={"primary"}
				onClick={onClickHandler}
				component="a"
				href={src}
			>
				{img && (
					<ListItemAvatar>
						<Avatar alt={title} src={img} />
					</ListItemAvatar>
				)}
				<ListItemText
					primary={title}
					secondary={
						<Fragment>
							<Typography
								noWrap
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
