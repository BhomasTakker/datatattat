import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Stack,
} from "@mui/material";
import { DetailsComponent } from "../items/details/details";
import {
	Description,
	DescriptionVariants,
} from "../items/description/description";
import {
	ContentTitle,
	ContentTitleVariants,
} from "../items/content-title/content-title";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleImage } from "../image/article-image";
import { styled } from "@mui/material/styles";
// Ya create types like this and dump somewhere useful
type StackDirection = "row" | "row-reverse" | "column" | "column-reverse";

export interface ArticleCardProps {
	item: CollectionItem;
	layout?: StackDirection;
	// title: string;
	titleVariant?: ContentTitleVariants;
	titleMaxLines?: number;

	// description: string;
	// should have 'short hands for this' and defaults
	showDescription?: boolean;
	descriptionVariant?: DescriptionVariants;
	descriptionMaxLines?: number;

	showAuthors?: boolean;
	showCategories?: boolean;
	showPublished?: boolean;
	showpublishers?: boolean;
}

// Question perhaps more
// how do we make this responsive?

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://stackoverflow.com/questions/54236623/cant-remove-padding-bottom-from-card-content-in-material-ui
// Basically just extend a mui class / this is just styled components
// Which will make overiding an awful lot quicker
const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const contentCardCss = (layout: StackDirection) => {
	switch (layout) {
		case "column":
		case "column-reverse":
		case "row":
		case "row-reverse":
			return {
				padding: 0,
				margin: 0,
			};
	}
};

const contentStackCss = (layout: StackDirection) => {
	switch (layout) {
		case "column":
		case "column-reverse":
			return {
				padding: 0,
				margin: 0,
			};
		case "row":
		case "row-reverse":
			return {
				padding: 1,
				margin: 0,
			};
	}
};

export const ArticleCard = ({
	// title,
	item,
	layout = "column",

	titleVariant = "Primary",
	titleMaxLines = 1,
	// description,
	descriptionVariant = "Primary",
	descriptionMaxLines = 4,
	showAuthors = false,
	showCategories = false,
	showPublished = false,
	showpublishers = false,
}: ArticleCardProps) => {
	// const [shouldLoadMeta, setShouldLoadMeta] = useState(false);
	// Same data but do variant image top, bottom, left, right
	// Return a different component
	// get widths and heights from somewhere
	const { title, avatar, src, description, guid, variant, details, media } =
		item;
	const actionIcons: any[] = [];

	// const direction: StackDirection = "column";
	// const {meta, loading, error} = useMeta(src, false);

	// It really is just this with different heights and widths
	// different line limits
	// layouts
	// show more or less information
	// age compact etc

	const WIDTHS = {
		vertical: {
			imageWidth: 236,
			imageHeight: 133,
			contentWidth: 236,
			contentHeight: 166,
		},
		horizontal: {
			imageWidth: 236,
			imageHeight: 133,
			contentWidth: 236,
			contentHeight: 133,
		},
	};

	const isVertical = layout.includes("column");

	// Just do set ish sizes
	// for
	// xs, sm, md, lg, xl,
	// and horizontal, vertical
	const { imageWidth, contentWidth, imageHeight, contentHeight } = isVertical
		? WIDTHS.vertical
		: WIDTHS.horizontal;

	// Argument for the bigger of contentWidth & imageWidth
	const width = isVertical ? contentWidth : contentWidth + imageWidth;

	// Call 'config'
	// get (layout, size/variant)
	// return data -> imageWidth, height, etc

	return (
		// Top Down Component
		// Card border
		<Card
			sx={{
				maxWidth: width,
				// create border function?
				// border: 2,
				// borderColor: "rgba(0, 0, 0, .2)",
				borderRadius: "1.5%",
			}}
			data-testid="article-card"
			elevation={0}
		>
			<CardActionArea>
				<Stack direction={layout}>
					{avatar && (
						<ArticleImage
							image={avatar}
							width={imageWidth}
							height={imageHeight}
							src={src}
						/>
					)}
					{/* Content padding  */}
					<CardContentNoPadding
						// I mean call a function to return based on variant etc
						sx={{ height: contentHeight, ...contentCardCss(layout) }}
					>
						<Stack
							height="100%"
							justifyContent={"space-between"}
							sx={{ ...contentStackCss(layout) }}
						>
							<Box>
								<ContentTitle
									title={title}
									maxLines={titleMaxLines}
									variant={titleVariant}
								/>
								{/* Use instead of margins? */}
								<Box height={"0.5rem"} />
								<Description
									maxWidth={contentWidth.toString()}
									minWidth={contentWidth.toString()}
									description={description}
									variant={descriptionVariant}
									maxLines={descriptionMaxLines}
								/>
							</Box>
							<DetailsComponent
								details={details}
								showAuthors={showAuthors}
								showCategories={showCategories}
								showPublished={showPublished}
								showpublishers={showpublishers}
							/>
						</Stack>
					</CardContentNoPadding>
				</Stack>
			</CardActionArea>
			{/* Not like this but something like this
			 reason is to have a button OUTSIDE of CardActionArea */}
			{actionIcons.length > 0 ? (
				<CardActions>
					<Button size="small" color="primary">
						Example
					</Button>
				</CardActions>
			) : (
				<></>
			)}
		</Card>
	);
};
