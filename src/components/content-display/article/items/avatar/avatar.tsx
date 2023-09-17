import { clientsideFetch } from "@/src/api/clientside-fetch";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const METADATA_API_PATH = "api/query/html/meta/get";

interface ArticleAvatar {
	alt: string;
	img: string;
	src: string;
}

interface Meta {
	image: string;
}

export const ArticleAvatar = ({ alt, img, src }: ArticleAvatar) => {
	const [avatar, setAvatar] = useState(img);
	// get meta hook perhaps
	useEffect(() => {
		const getMeta = async () => {
			const meta = (await clientsideFetch({
				url: METADATA_API_PATH,
				searchParams: { url: src },
			})) as Meta;
			const { image } = meta || {};

			setAvatar(image);
		};
		getMeta();
	}, [src]);

	if (!avatar) {
		return <></>;
	}

	return <Avatar alt={alt} src={avatar} />;
};
