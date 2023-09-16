import { clientsideFetch } from "@/src/api/clientside-fetch";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const MEATADATA_API_PATH = "api/query/html/meta/get";

interface ArticleAvatar {
	alt: string;
	img: string;
	src: string;
}

const getMeta = async () => {};
let count = 0;

export const ArticleAvatar = ({ alt, img, src }: ArticleAvatar) => {
	if (!img) {
		return <></>;
	}

	return <Avatar alt={alt} src={img} />;
};
