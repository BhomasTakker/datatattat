import { ReactNode, useEffect, useState } from "react";
import { useMeta } from "../items/hooks/useMeta";
import { Stack } from "@mui/material";
import { StackProps } from "@/src/types/mui";

export type BackgroundImageProps = {
	children?: ReactNode;
	image?: {
		src: string;
		alt: string;
	};

	width: string;
	height: string;

	src?: string;
} & StackProps;

export const BackGroundImage = ({
	image,
	width,
	height,
	src,
	children,
	...rest
}: BackgroundImageProps) => {
	const [shouldLoadMeta, setShouldLoadMeta] = useState(false);
	const { meta, loading, error } = useMeta(src || "", shouldLoadMeta);
	// Could argue hook this / same as ArticleImage
	useEffect(() => {
		// if meta return
		if (!image || !image.src) {
			if (src) {
				setShouldLoadMeta(true);
			}
		}
	}, [image, src]);

	// Can we just use an image?
	// set by props
	const Component = Stack;

	return (
		<Component
			data-testid={"background-image"}
			sx={{
				// cursor: "pointer",
				width,
				height,
				backgroundImage: `url(${image?.src || meta?.image || ""})`,
				backgroundSize: "cover",
				// background: "no-repeat",
			}}
			// component props / sx props?
			{...rest}
		>
			{children}
		</Component>
	);
};
