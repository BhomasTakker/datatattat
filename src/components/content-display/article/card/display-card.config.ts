import { ArticleCardProps } from "./article-card";

export type DisplayCardVariant =
	| "large-row"
	| "large-column"
	| "medium-row"
	| "medium-column"
	| "compact";

const detailsProps = {
	showAuthors: false,
	showCategories: false,
	showPublished: true,
	showpublishers: false,
};

const largeRow: Omit<ArticleCardProps, "item"> = {
	layout: "row-reverse",
	cardCss: {
		maxWidth: 1000,
		minWidth: 800,
		height: 315,
		minHeight: 315,
	},
	imageProps: {
		width: 600,
		height: 315,
	},
	cardContentCss: {
		// height: 166,
		width: 400,
		padding: 0,
		margin: 0,
	},
	contentStackProps: {
		height: "100%",
		justifyContent: "space-between",
	},
	contentStackCss: { padding: 1, margin: 0 },
	contentTitleProps: {
		maxLines: 4,
		// variant: large
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "2rem",
		fontSize: "1.75rem",
	},
	descriptionProps: {
		maxWidth: "100%",
		minWidth: "100%",

		variant: "Primary",
		maxLines: 5,
	},
	detailsProps,
};

const largeColumn: Omit<ArticleCardProps, "item"> = {
	layout: "column",
	cardCss: {
		maxWidth: 600,
		minWidth: 500,
		minHeight: 460,
	},
	imageProps: {
		maxWidth: 600,
		width: "100%",
		height: 310,
	},
	cardContentCss: {
		height: 150,

		maxWidth: 600,
		width: "100%",
		padding: 0,
		margin: 0,
	},
	contentStackProps: {
		height: "100%",
		justifyContent: "space-between",
	},
	contentStackCss: { padding: 0, margin: 0 },
	contentTitleProps: {
		maxLines: 2,
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.625rem",
		fontSize: "1.375rem",
		marginTop: 1,
	},
	descriptionProps: {
		// maxWidth: 236,
		// minWidth: 236,

		variant: "Primary",
		maxLines: 2,
	},
	detailsProps: {
		showAuthors: false,
		showCategories: false,
		showPublished: true,
		showpublishers: false,
	},
};

// mediums are just the horizontal and vertical
const mediumRow: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	cardCss: {
		maxWidth: 600,
		minWidth: 600,
		width: 600,
		minHeight: 170,
	},
	imageProps: {
		maxWidth: 275,
		minWidth: 275,
		width: 275,
		maxHeight: 170,
		height: 170,
	},
	cardContentCss: {
		height: 170,
		// width: 300,
		// padding: 0,
		// margin: 0,
	},
	// contentStackProps: {
	// 	height: "100%",
	// 	justifyContent: "space-between",
	// },
	contentStackCss: { padding: 1, margin: 0 },
	contentTitleProps: {
		maxLines: 2,
		// variant: "Primary" as ContentTitleVariants,
		// This shouldn't be here!!
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	descriptionProps: {
		// maxWidth: "100%",
		// minWidth: "100%",
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

const mediumColumn: Omit<ArticleCardProps, "item"> = {
	layout: "column",
	cardCss: {
		maxWidth: 236,
		minWidth: 236,
		minHeight: 296,
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
	},
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

const compact: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	showImage: false,
	showDescription: false,

	cardCss: {
		maxWidth: 260,
		minWidth: 260,
		width: "100%",
		minHeight: "90px",
		height: "90px",
	},
	cardContentCss: {
		height: "100%",
		maxWidth: 260,
		width: "100%",
		padding: 0,
		margin: 0,
	},
	contentStackProps: {
		height: "100%",
		justifyContent: "space-between",
	},
	contentStackCss: { padding: 0, margin: 0 },
	contentTitleProps: {
		maxLines: 2,
		// get this from somewhere
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	detailsProps: {
		showAuthors: false,
		showCategories: false,
		showPublished: true,
		showpublishers: false,
	},
};

export const getConfig = (variant: DisplayCardVariant) => {
	switch (variant) {
		case "large-row":
			return largeRow;
		case "large-column":
			return largeColumn;
		case "medium-row":
			return mediumRow;
		case "medium-column":
			return mediumColumn;
		case "compact":
			return compact;
	}
};
