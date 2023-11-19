import { LAYOUT, MARGINS } from "config/styles/styles.config";
import { ArticleCardProps } from "../../article-card";

const detailsProps = {
	showAuthors: false,
	showCategories: false,
	showPublished: true,
	showpublishers: false,
};

export const largeRow: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	cardCss: {
		maxWidth: LAYOUT.xxl,
		minWidth: LAYOUT.xl,
		height: LAYOUT.ml,
		// minHeight: 400,
	},
	imageProps: {
		width: LAYOUT.lg,
		height: LAYOUT.ml,

		style: {
			maxWidth: `${LAYOUT.lg}px`,
			minWidth: `${LAYOUT.ml}px`,
			width: `${LAYOUT.full}`,
			height: LAYOUT.ml,
		},
	},
	cardContentCss: {
		// height: 166,
		width: LAYOUT.lg,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
	contentStackProps: {
		height: LAYOUT.full,
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
		maxWidth: LAYOUT.full,
		minWidth: LAYOUT.full,

		variant: "Primary",
		maxLines: 5,
	},
	detailsProps,
};

export const extraLargeRow: Omit<ArticleCardProps, "item"> = {
	...largeRow,
	cardCss: {
		maxWidth: LAYOUT.full,
		minWidth: LAYOUT.xl,
		height: LAYOUT.m,
		// minHeight: 400,
	},
	imageProps: {
		width: LAYOUT.lg2,
		height: LAYOUT.m,

		style: {
			maxWidth: `${LAYOUT.lg2}px`,
			minWidth: `${LAYOUT.ml}px`,
			width: `${LAYOUT.full}`,
			height: LAYOUT.m,
		},
	},
	cardContentCss: {
		maxWidth: `${LAYOUT.lg2}px`,
		width: `${LAYOUT.full}`,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
};

export const largeRowReverse: Omit<ArticleCardProps, "item"> = {
	...largeRow,
	layout: "row-reverse",
};
export const extraLargeRowReverse: Omit<ArticleCardProps, "item"> = {
	...extraLargeRow,
	layout: "row-reverse",
};
// mediums are just the horizontal and vertical
export const mediumRow: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	cardCss: {
		maxWidth: LAYOUT.lg2,
		minWidth: LAYOUT.m,
		minHeight: LAYOUT.sm,
	},
	imageProps: {
		width: LAYOUT.forty,
		height: LAYOUT.sm,
		style: {
			// maxWidth: `${LAYOUT.m}px`,
			// minWidth: `${LAYOUT.ms}px`,
			width: LAYOUT.full,
			height: LAYOUT.sm,
		},
	},
	cardContentCss: {
		height: LAYOUT.sm,
		width: LAYOUT.sixty,
	},
	contentStackCss: { padding: MARGINS.VSMALL, margin: MARGINS.NONE },
	contentTitleProps: {
		// spread maxlines here -  use prop to update default?
		maxLines: 2,
		// variant: "Primary" as ContentTitleVariants,
		// This shouldn't be here!!
		// spread the font we want i.e. contentCardSmall
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	descriptionProps: {
		variant: "Primary",
		maxLines: 3,
	},
	detailsProps,
};

export const mediumLargeRow: Omit<ArticleCardProps, "item"> = {
	...mediumRow,
	cardCss: {
		maxWidth: LAYOUT.xl,
		minWidth: LAYOUT.ml,
		minHeight: LAYOUT.ms,
	},
	imageProps: {
		width: LAYOUT.forty,
		height: LAYOUT.ms,
		style: {
			width: LAYOUT.full,
			height: LAYOUT.ms,
		},
	},
	cardContentCss: {
		height: LAYOUT.ms,
		width: LAYOUT.sixty,
	},
	contentTitleProps: {
		// spread maxlines here -  use prop to update default?
		maxLines: 3,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	descriptionProps: {
		variant: "Primary",
		maxLines: 5,
	},
};

export const mediumLargeRowReverse: Omit<ArticleCardProps, "item"> = {
	...mediumLargeRow,
	layout: "row-reverse",
};

export const mediumRowReverse: Omit<ArticleCardProps, "item"> = {
	...mediumRow,
	layout: "row-reverse",
};

export const smallRow: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	cardCss: {
		maxWidth: LAYOUT.ml,
		minWidth: LAYOUT.ms,
		minHeight: LAYOUT.xs,
	},
	imageProps: {
		width: LAYOUT.forty,
		height: LAYOUT.xs,
		style: {
			width: LAYOUT.full,
			height: LAYOUT.xs,
		},
	},
	cardContentCss: {
		height: LAYOUT.xs,
		width: LAYOUT.sixty,
	},
	contentStackCss: { padding: MARGINS.VSMALL, margin: MARGINS.NONE },
	contentTitleProps: {
		maxLines: 1,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
	},
	descriptionProps: {
		variant: "Primary",
		maxLines: 2,
	},
	detailsProps,
};

export const smallRowReverse: Omit<ArticleCardProps, "item"> = {
	...smallRow,
	layout: "row-reverse",
};
