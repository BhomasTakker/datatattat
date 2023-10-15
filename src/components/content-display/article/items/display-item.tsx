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

// Shouldn't specifically be a list item?
// Almost certainly shouldn't
// Mui listItem at least 'expects' a simple ppiece if info?
// A card would be better
interface DisplayItemProps {}
const DisplayItemContent = (collectionItem: CollectionItem) => {
	const { title, avatar, src, description } = collectionItem;
	const img = avatar ? avatar.src : "";

	const { getMeta, meta } = useContext(ListItemContext);
	const { image } = meta || {};

	if (!img && !image) {
		console.log("FEATURE:0001", "DISPLAY:ITEM", "GET:META", { img, image });
		getMeta();
	}

	console.log("FEATURE:0001", "DISPLAY:ITEM", { img, image });

	return (
		<Stack
			padding={MARGINS.MIDSMALL}
			onClick={() => {
				console.log("clicked");
			}}
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
				{/* {"Hello"} */}
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
							// width: "50%",
							// maxWidth: "100%",
							// display: "-webkit-box",
							// function to return this data
							// take num lines
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
				{/* <Stack
					direction={"column"}
					alignItems={"flex-end"}
					sx={{ height: "100%" }}
				>
					<Typography
						sx={{
							color: "white",
							// width: "50%",
							// maxWidth: "100%",
							// display: "-webkit-box",
							// function to return this data
							// take num lines

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
						{"Minor Deets"}
					</Typography>
				</Stack> */}
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
