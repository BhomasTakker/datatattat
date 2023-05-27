import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";

//
//this is still dependent upon being used with a list though
//
//Technically anything could go here
//if an image, title, and misc data
export const ArticleStub = ({ data }: any) => {
	const { title, url, image, description, author, published, source } = data;

	const { id, name } = source;

	// console.log({ image });
	// console.log({ data });
	return (
		<>
			{/* 100% this shouldn't be a list item... - unless absolutely specified as ListItems  */}
			{/* Any component could be added to a list no? */}
			{/* Really just take the component - or the content and add to a ListItem -> stanndardHOC */}
			<ListItem>
				<ListItemAvatar>
					<Avatar alt={description} src={image} />
				</ListItemAvatar>
				<ListItemText
					primary={title}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: "inline" }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{description}
							</Typography>
							{published}
							{name}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</>
	);
};
