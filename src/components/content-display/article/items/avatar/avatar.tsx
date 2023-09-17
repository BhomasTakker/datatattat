import { clientsideFetch } from "@/src/api/clientside-fetch";
import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useMeta } from "../hooks/useMeta";
import { ListItemContext } from "../context/list-item.context";

const METADATA_API_PATH = "api/query/html/meta/get";

interface ArticleAvatar {
	alt: string;
	img: string;
	src: string;
}

interface Meta {
	image: string;
}

// Maybe neaten this up
// get data from context
export const ArticleAvatar = ({ alt, img, src }: ArticleAvatar) => {
	const { getMeta, meta } = useContext(ListItemContext);
	const { image } = meta || {};

	if (!img && !image) {
		getMeta();
		return <></>;
	}

	return <Avatar alt={alt} src={img || image} />;
};
