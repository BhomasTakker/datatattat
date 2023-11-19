import { ASPECT_RATIO, LAYOUT, MARGINS } from "config/styles/styles.config";
import { ArticleCardProps } from "../../article-card";

export const compact: Omit<ArticleCardProps, "item"> = {
	layout: "row",
	showImage: false,
	showDescription: false,

	cardCss: {
		maxWidth: LAYOUT.m,
		minWidth: LAYOUT.sm,
		width: LAYOUT.full,
		height: LAYOUT.full,
	},
	cardContentCss: {
		height: LAYOUT.full,
		maxWidth: LAYOUT.m,
		width: LAYOUT.full,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
	},
	contentStackCss: { padding: MARGINS.NONE, margin: MARGINS.NONE },
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

export const compact1line: Omit<ArticleCardProps, "item"> = {
	...compact,
	contentTitleProps: {
		...compact.contentTitleProps,
		maxLines: 1,
	},
	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
		// minHeight: 56,
	},
};
export const compact2line: Omit<ArticleCardProps, "item"> = {
	...compact,
	contentTitleProps: {
		...compact.contentTitleProps,
		maxLines: 2,
	},
	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
		minHeight: 66,
	},
};
export const compact3line: Omit<ArticleCardProps, "item"> = {
	...compact,
	contentTitleProps: {
		...compact.contentTitleProps,
		maxLines: 3,
	},
	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
		minHeight: 96,
	},
};
export const compact5line: Omit<ArticleCardProps, "item"> = {
	...compact,
	contentTitleProps: {
		...compact.contentTitleProps,
		maxLines: 5,
	},

	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
		minHeight: 126,
	},
};

export const compactColumn: Omit<ArticleCardProps, "item"> = {
	...compact2line,
	showImage: true,
	layout: "column",
	imageProps: {
		width: LAYOUT.m,
		height: LAYOUT.sm,
		boxStyle: {
			maxWidth: `${LAYOUT.m}px`,
			minWidth: `${LAYOUT.ms}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.sm}px`,
		},
		style: {
			aspectRatio: ASPECT_RATIO.sixteenNine,
			maxWidth: `${LAYOUT.m}px`,
			minWidth: `${LAYOUT.ms}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.sm}px`,
		},
	},
	contentStackProps: {
		height: LAYOUT.full,
		justifyContent: "space-between",
	},
	contentStackCss: {
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
		height: LAYOUT.full,
	},
};
