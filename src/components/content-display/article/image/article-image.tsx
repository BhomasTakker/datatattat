import Image from "next/image";
import { useMeta } from "../items/hooks/useMeta";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CSS from "csstype";

export type ArticleImageProps = {
	image: {
		// Almost certainly has a type
		src: string;
		alt: string;
	};
	width: number;
	height: number;
	// Probably not here
	src?: string;
	style?: CSS.Properties;
	boxStyle?: CSS.Properties;
};

// Variants?
// We really do need something along the lines of useMeta
// Just not sure the previous approach is correct
// Potentially - provide a src
// if no image load meta from src and get image from there
// I mean hell load meta and get image from it seems easy enough
// But argument there is to create a data entry for the 'article' and add meta data to it

// WE shuld not load meta
// WE should be a dumb component

export const ArticleImage = ({
	image,
	width,
	height,
	src,
	boxStyle = {},
	style = {},
}: ArticleImageProps) => {
	// 100% this all should not be here / wrapper and pass in perhaps
	const [shouldLoadMeta, setShouldLoadMeta] = useState(false);
	const { meta, loading, error } = useMeta(src || "", shouldLoadMeta);

	useEffect(() => {
		// if meta return
		if (!image || !image.src) {
			if (src && !error) {
				setShouldLoadMeta(true);
			}
		}
	}, [image, src, error]);
	/////////////////////////////////////////////////

	return (
		// <Image was not happy with src - should figure that out
		// Box probably isn't correct
		<Box width={width} height={height} sx={{ ...boxStyle }}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={image?.src || meta?.image || ""}
				alt={image?.alt || ""}
				width={width}
				height={height}
				// should at least use an scss file when we can
				style={{ objectFit: "cover", ...style }}
				data-testid={"article-image"}
			/>
		</Box>
	);
};
