import { SxProps, Theme } from "@mui/material";
import { ContentTitleProps } from "../items/content-title/content-title";
import { ArticleCardProps } from "./article-card";
import { StackDirection, ViewportSize } from "./article-card.wrapper";

const layout: StackDirection = "column";
const isVertical = layout.includes("column");
const imageHeight = 133;
const imageWidth = 236;
const contentWidth = 236;
const contentHeight = isVertical ? 166 : 133;
const cardWdth = isVertical ? 236 : 236 * 2;

const defaultCardCss = {
	maxWidth: cardWdth,
	// create border function?
	// border: 2,
	// borderColor: "rgba(0, 0, 0, .2)",
	borderRadius: "1.5%",
};

const defaultImageProps = {
	width: imageWidth,
	height: imageHeight,
};
const defaultCardContentCss = {
	height: contentHeight,
	padding: 0,
	margin: 0,
};
const defaultContentStackProps = {
	height: "100%",
	justifyContent: "space-between",
};
const defaultContentStackCss = {
	padding: isVertical ? 0 : 1,
	margin: 0,
};
const defaultContentTitleProps: Omit<ContentTitleProps, "title"> = {
	maxLines: 1,
	// variant: "Primary" as ContentTitleVariants,
};
const defaultDescriptionProps = {
	maxWidth: contentWidth.toString(),
	minWidth: contentWidth.toString(),

	variant: "Primary",
	maxLines: 3,
};
const defaultDetailsProps = {
	showAuthors: false,
	showCategories: false,
	showPublished: false,
	showpublishers: false,
};

export const defaults: Omit<ArticleCardProps, "item"> = {
	layout,
	cardCss: defaultCardCss,
	imageProps: defaultImageProps,
	cardContentCss: defaultCardContentCss,
	contentStackProps: defaultContentStackProps,
	contentStackCss: defaultContentStackCss,
	contentTitleProps: defaultContentTitleProps,
	descriptionProps: defaultDescriptionProps,
	detailsProps: defaultDetailsProps,
};

const vertical: Omit<ArticleCardProps, "item"> = {
	cardCss: {
		maxWidth: 236,
	},
	imageProps: {
		width: 236,
		height: 133,
	},
	cardContentCss: {
		height: 163,
		padding: 0,
		margin: 0,
	},
	contentStackProps: {
		height: "100%",
		justifyContent: "space-between",
	},
	contentStackCss: { padding: 0, margin: 0 },
	contentTitleProps: {
		maxLines: 1,
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
		marginTop: 1,
	} as ContentTitleProps,
	descriptionProps: {
		maxWidth: 236,
		minWidth: 236,

		variant: "Primary",
		maxLines: 3,
	},
	detailsProps: {
		showAuthors: false,
		showCategories: false,
		showPublished: true,
		showpublishers: false,
	},
};

const horizontal: Omit<ArticleCardProps, "item"> = {
	cardCss: {
		maxWidth: 472,
	} as SxProps<Theme>,
	imageProps: {
		width: 186,
		height: 166,
	},
	cardContentCss: {
		// height: 166,
		width: 286,
		padding: 0,
		margin: 0,
	},
	contentStackProps: {
		height: "100%",
		justifyContent: "space-between",
	},
	contentStackCss: { padding: 1, margin: 0 },
	contentTitleProps: {
		maxLines: 1,
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	descriptionProps: {
		maxWidth: "100%",
		minWidth: "100%",
		// maxWidth: 286,
		// minWidth: 286,

		variant: "Primary",
		maxLines: 3,
	},
	detailsProps: {
		showAuthors: false,
		showCategories: false,
		showPublished: true,
		showpublishers: false,
	},
};

export type GetArticleCardConfig = {
	variant: StackDirection;
	// size: ViewportSize;
};

export const getConfig = ({
	variant,
}: // size,
GetArticleCardConfig): Omit<ArticleCardProps, "item"> => {
	// return configMap.get(`${variant}`) || defaults;

	switch (variant) {
		case "row":
		case "row-reverse":
			return { ...horizontal, layout: variant };

		case "column":
		case "column-reverse":
			return { ...vertical, layout: variant };
	}
};
