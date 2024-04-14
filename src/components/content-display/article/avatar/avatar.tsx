import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useMeta } from "../items/hooks/useMeta";
import PersonIcon from "@mui/icons-material/Person";

export type AvatarSize = "sm" | "md" | "lg";
const sizes = {
	sm: 24,
	md: 40,
	lg: 56,
} as const;

interface ArticleAvatar {
	alt: string;
	img: string;
	src: string;
	size?: AvatarSize;
}

export const ArticleAvatar = ({
	alt,
	img,
	src,
	size = "md",
}: ArticleAvatar) => {
	// Basically should be a HOC / then can have a context one etc
	// should just be pass me an image
	const [shouldLoadMeta, setShouldLoadMeta] = useState(false);
	const { meta, loading, error } = useMeta(src || "", shouldLoadMeta);
	const avatarSize = sizes[size];

	useEffect(() => {
		if (!img && !meta && !error) {
			if (src) {
				setShouldLoadMeta(true);
			}
		}
	}, [img, meta, src, error]);

	return (
		<Avatar
			alt={alt}
			src={img || meta?.image || ""}
			sx={{ width: avatarSize, height: avatarSize }}
			data-testid="avatar"
		>
			{error && <PersonIcon />}
		</Avatar>
	);
};
