import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import { RSSEnclosure, RSSImage } from "@/src/query/rss/types";

const CreateAvatar = ({
	image,
	enclosure,
	title,
}: {
	image?: RSSImage;
	enclosure?: RSSEnclosure;
	title?: string;
}) => {
	if (image) {
		console.log({ IMAGE: image });
		return <Avatar alt={image.title} src={image.url} />;
	}

	if (enclosure && enclosure?.type.includes("image"))
		return <Avatar alt={title || ""} src={enclosure.url} />;

	// no image image?
	return <></>;
};

//
//this is still dependent upon being used with a list though
//
//Technically anything could go here
//if an image, title, and misc data
export const ArticleStub = ({ data }: any) => {
	const {
		title,
		image,
		description,
		author,
		pubDate,
		source,
		link,
		category,
		guid,
		enclosure,
	} = data;
	// const {
	// 	url: enclosureUrl,
	// 	title: enclosureTitle,
	// 	link: enclosureLink,
	// } = enclosure || {};
	// const { url: imageUrl, title: imageTitle, link: imageLink } = image || {};
	console.log({ data });
	const { url: sourceUrl = "" } = source || {};

	//really need to mush enclosure into image if it is an image

	// console.log({ image });
	// console.log({ ArticleStubData: data });
	return (
		<>
			{/* 100% this shouldn't be a list item... - unless absolutely specified as ListItems  */}
			{/* Any component could be added to a list no? */}
			{/* Really just take the component - or the content and add to a ListItem -> stanndardHOC */}
			<ListItem>
				<ListItemAvatar>
					<CreateAvatar image={image} enclosure={enclosure} title={title} />
					{/* <Avatar alt={imageTitle} src={imageUrl} /> */}
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
							{pubDate}
							{author || sourceUrl}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</>
	);
};
