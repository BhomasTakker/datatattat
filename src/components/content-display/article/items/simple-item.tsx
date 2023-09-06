import {
	Avatar,
	ListItem,
	ListItemAvatar,
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
	content,
	enclosure,
}: SimpleArticleProps) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar alt={title} src={enclosure.url} />
			</ListItemAvatar>
			<ListItemText
				primary={title}
				secondary={
					<Fragment>
						<Typography
							sx={{ display: "inline" }}
							component="span"
							variant="body2"
							color="text.primary"
						>
							{content}
						</Typography>
					</Fragment>
				}
			/>
		</ListItem>
	);
};
