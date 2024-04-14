import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Stack,
	TypographyTypeMap,
} from "@mui/material";
import { DetailsComponent } from "../items/details/details";
import { Description } from "../items/description/description";
import {
	ContentTitle,
	ContentTitleProps,
} from "../items/content-title/content-title";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ArticleImage } from "../image/article-image";
import { styled } from "@mui/material/styles";
import { defaults } from "./article-card.config";
import { StackDirection } from "@/src/types/mui";
import { useInView } from "react-intersection-observer";
// Ya create types like this and dump somewhere useful

export interface ArticleCardProps {
	item: CollectionItem;
	layout?: StackDirection;
	showImage?: boolean;
	showDescription?: boolean;
	/////////////////
	cardCss?: any;
	cardContentCss?: any;
	contentStackCss?: any;
	imageProps?: any;
	contentStackProps?: any;
	contentTitleProps?: Omit<ContentTitleProps, "title">;
	descriptionProps?: any;
	detailsProps?: any;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://stackoverflow.com/questions/54236623/cant-remove-padding-bottom-from-card-content-in-material-ui
// Basically just extend a mui class / this is just styled components
// Which will make overiding an awful lot quicker
// Store somewhere
const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

// Argument css should be objects
// Props should be straight inputs?
export const ArticleCard = ({
	item,
	layout = "column",
	showImage = true,
	showDescription = true,

	imageProps = defaults.imageProps,
	contentStackProps = defaults.contentStackProps,
	contentTitleProps = defaults.contentTitleProps,
	descriptionProps = defaults.descriptionProps,
	detailsProps = defaults.detailsProps,

	cardCss = defaults.cardCss,
	cardContentCss = defaults.cardContentCss,
	contentStackCss = defaults.contentStackCss,
}: ArticleCardProps) => {
	// Probably create a layout InView component
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const { title, avatar, src, description, guid, variant, details, media } =
		item;
	const actionIcons: any[] = [];

	return (
		<Card ref={ref} sx={cardCss} data-testid="article-card" elevation={0}>
			{inView && (
				<>
					<CardActionArea>
						<Stack direction={layout}>
							{avatar && showImage && (
								// <Box>
								<ArticleImage image={avatar} src={src} {...imageProps} />
								// </Box>
							)}
							<CardContentNoPadding sx={cardContentCss}>
								<Stack {...contentStackProps} sx={contentStackCss}>
									<Box>
										<ContentTitle title={title} {...contentTitleProps} />
										{/* Use instead of margins? - irrelevant if we config? */}
										{/* Either replace or add to controls */}
										<Box height={"0.5rem"} />
										{showDescription && (
											<Description
												description={description}
												{...descriptionProps}
											/>
										)}
									</Box>
									<DetailsComponent details={details} {...detailsProps} />
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
				</>
			)}
		</Card>
	);
};
