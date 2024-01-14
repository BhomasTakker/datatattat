// To contrast text colour and image colour see
// https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
// https://css-tricks.com/nailing-the-perfect-contrast-between-light-text-and-a-background-image/

// Should be redundant

import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { Box, Stack, Typography } from "@mui/material";
import {
	ListItemContext,
	ListItemContextProvider,
} from "./context/list-item.context";
import { useContext } from "react";
import { stripHTML } from "@/src/utils/html";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { MARGINS } from "config/styles/styles.config";

// Very very basic
// Needs work and variants
// We should have a set component for image
// Titles, and descriptions, with variants, etc
// Then just use ?

// should just be passing image no?
// No, this is where we need the set image type
const DisplayItemContent = (collectionItem: CollectionItem) => {
	const { title, avatar, src, description } = collectionItem;
	const img = avatar ? avatar.src : "";

	const { getMeta, meta } = useContext(ListItemContext);
	const { image } = meta || {};

	if (!img && !image) {
		getMeta();
	}

	return (
		<Stack
			padding={MARGINS.MIDSMALL}
			onClick={() => {}}
			sx={{
				cursor: "pointer",
				// Set styles - i.e. variant
				width: "100%",
				height: "400px",
				// img as background
				// How to set fit, etc
				backgroundImage: `url(${img || image})`,
			}}
		>
			<Box sx={{ width: "50%", color: "white" }}>
				<Title text={title} variant={TitleVariant.SUB} />
			</Box>
			<Stack
				direction={"row"}
				justifyContent={"space-between"}
				sx={{ height: "100%" }}
			>
				<Box>
					<Typography
						sx={{
							color: "white",
							overflow: "hidden",
							textOverflow: "ellipsis",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 3,
							maxLines: 3,
						}}
						component="span"
						variant="body2"
						color="text.primary"
					>
						{stripHTML(description)}
					</Typography>
				</Box>
			</Stack>
		</Stack>
	);
};
export const DisplayItem = (collectionItem: CollectionItem) => {
	return (
		<ListItemContextProvider value={{ item: collectionItem }}>
			<DisplayItemContent {...collectionItem} />
		</ListItemContextProvider>
	);
};
