import { Avatar } from "@mui/material";
import { useContext } from "react";
import { ListItemContext } from "../context/list-item.context";

interface ArticleAvatar {
	alt: string;
	img: string;
	src: string;
}

// Maybe neaten this up
// get data from context
// Prob shouldnt use context at all
export const ArticleAvatar = ({ alt, img, src }: ArticleAvatar) => {
	// The getting meta functionality seems a little dirty
	const { getMeta, meta } = useContext(ListItemContext);
	const { image } = meta || {};

	if (!img && !image) {
		getMeta();
		return <></>;
	}

	return <Avatar alt={alt} src={img || image} data-testid="avatar" />;
};
