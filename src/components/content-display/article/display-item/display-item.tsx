import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import {
	ContentTitle,
	ContentTitleProps,
} from "../items/content-title/content-title";
import {
	Description,
	DescriptionProps,
} from "../items/description/description";
import { DetailsComponent } from "../items/details/details";
import { FlexDirection, StackProps } from "@/src/types/mui";
import { BackGroundImage } from "../background-image/background-image";

export interface ArticleDisplayItemProps {
	item: CollectionItem;
	showDescription?: boolean;
	width: string;
	height: string;
	justifyContent?: FlexDirection;
	titleProps?: Omit<ContentTitleProps, "title">;
	descriptionProps?: Omit<DescriptionProps, "description">;
	contentHeight?: string;
	contentWidth?: string;
	contentStackProps?: StackProps;
	subContentStackProps?: StackProps;
}

export const ArticleDisplayItem = ({
	item,
	width,
	height,
	titleProps = {},
	descriptionProps = {},
	justifyContent,
	contentHeight = "100%",
	contentWidth = "100%",
	contentStackProps = {},
	subContentStackProps = {},
}: ArticleDisplayItemProps) => {
	const { title, avatar, src, description } = item;
	// const img = avatar ? avatar.src : "";
	return (
		// create background image wrapper
		<BackGroundImage
			padding={MARGINS.MIDSMALL}
			direction={"column"}
			width={width}
			height={height}
			image={avatar}
			src={src}
			// pass in
			justifyContent={justifyContent}
			// onClick={() => {
			// 	// console.log("clicked");
			// }}
			// sx={{
			// 	// cursor: "pointer",
			// 	width,
			// 	height,
			// 	backgroundImage: `url(${img})`,
			// 	backgroundSize: "cover",
			// 	// background: "no-repeat",
			// }}
		>
			{/* Pass in dimensions */}
			<Box sx={{ height: contentHeight, width: contentWidth }}>
				<Stack direction={"column"} {...contentStackProps}>
					{/* variation / font */}
					<ContentTitle title={title} {...titleProps} />
					<Stack direction="column" {...subContentStackProps}>
						<Description description={description} {...descriptionProps} />
						{/* <DetailsComponent details={details} {...detailsProps} /> */}
					</Stack>
				</Stack>
			</Box>
		</BackGroundImage>
	);
};
