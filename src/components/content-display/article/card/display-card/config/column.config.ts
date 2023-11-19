import { ASPECT_RATIO, LAYOUT, MARGINS } from "config/styles/styles.config";
import { ArticleCardProps } from "../../article-card";

export const largeColumn: Omit<ArticleCardProps, "item"> = {
	layout: "column",
	cardCss: {
		maxWidth: LAYOUT.xl,
		minWidth: LAYOUT.m,
		// minHeight: 600,
	},
	imageProps: {
		width: LAYOUT.lg,
		height: LAYOUT.ml,

		boxStyle: {
			maxWidth: `${LAYOUT.xl}px`,
			minWidth: `${LAYOUT.m}px`,
			width: LAYOUT.full,
		},

		style: {
			maxWidth: `${LAYOUT.xl}px`,
			minWidth: `${LAYOUT.m}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.ml}px`,
		},
	},
	cardContentCss: {
		height: LAYOUT.ms,
		maxHeight: LAYOUT.ms,
		// minHeight: 140,
		// maxWidth: 600,
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
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.625rem",
		fontSize: "1.375rem",
		marginTop: MARGINS.VSMALL,
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

export const extraLargeColumn: Omit<ArticleCardProps, "item"> = {
	...largeColumn,
	cardCss: {
		maxWidth: LAYOUT.xxl,
		minWidth: LAYOUT.lg2,
		// minHeight: 600,
	},
	imageProps: {
		width: LAYOUT.xxl,
		height: LAYOUT.lg,

		boxStyle: {
			maxWidth: `${LAYOUT.xxl}px`,
			minWidth: `${LAYOUT.lg2}px`,
			width: LAYOUT.full,
		},

		style: {
			maxWidth: `${LAYOUT.xxl}px`,
			minWidth: `${LAYOUT.lg2}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.lg}px`,
		},
	},
	cardContentCss: {
		height: LAYOUT.m,
		maxHeight: LAYOUT.m,
		// minHeight: 140,
		// maxWidth: 600,
		width: LAYOUT.full,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
};

export const extraLargeColumnReverse: Omit<ArticleCardProps, "item"> = {
	...extraLargeColumn,
	layout: "column-reverse",
};

export const largeColumnReverse: Omit<ArticleCardProps, "item"> = {
	...largeColumn,
	layout: "column-reverse",
};

export const mediumColumn: Omit<ArticleCardProps, "item"> = {
	layout: "column",
	cardCss: {
		maxWidth: LAYOUT.lg2,
		minWidth: LAYOUT.ms,
		// height: 300,
	},
	imageProps: {
		width: LAYOUT.m,
		height: LAYOUT.sm,
		boxStyle: {
			maxWidth: `${LAYOUT.lg2}px`,
			minWidth: `${LAYOUT.ms}px`,
			width: LAYOUT.full,
			height: LAYOUT.m,
		},
		style: {
			maxWidth: `${LAYOUT.lg2}px`,
			minWidth: `${LAYOUT.ms}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.m}px`,
			// aspectRatio: ASPECT_RATIO.sixteenNine,
			// minHeight: "100px",
			// maxHeight: "150px",
		},
	},
	cardContentCss: {
		height: LAYOUT.ms,
		maxHeight: LAYOUT.ms,
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
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.875rem",
		fontSize: "1.5rem",
		marginTop: MARGINS.VSMALL,
	},
	descriptionProps: {
		maxWidth: LAYOUT.full,
		minWidth: LAYOUT.full,

		variant: "Primary",
		maxLines: 4,

		fontFamily: "roboto",
		fontWeight: "400",
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

export const smallColumn: Omit<ArticleCardProps, "item"> = {
	...mediumColumn,
	cardCss: {
		maxWidth: LAYOUT.m,
		minWidth: LAYOUT.xs,
		// height: 300,
	},
	imageProps: {
		width: LAYOUT.m,
		height: LAYOUT.sm,
		boxStyle: {
			maxWidth: `${LAYOUT.m}px`,
			minWidth: `${LAYOUT.sm}px`,
			width: LAYOUT.full,
			height: LAYOUT.sm,
		},
		style: {
			maxWidth: `${LAYOUT.m}px`,
			minWidth: `${LAYOUT.sm}px`,
			width: LAYOUT.full,
			height: LAYOUT.sm,
			// aspectRatio: ASPECT_RATIO.sixteenNine,
		},
	},
	cardContentCss: {
		height: LAYOUT.sm,
		maxHeight: LAYOUT.sm,
		width: LAYOUT.full,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
	contentTitleProps: {
		maxLines: 1,
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
		marginTop: MARGINS.VSMALL,
	},
	descriptionProps: {
		maxWidth: LAYOUT.full,
		minWidth: LAYOUT.full,

		variant: "Primary",
		maxLines: 3,
	},
};

export const smallColumnReverse: Omit<ArticleCardProps, "item"> = {
	...smallColumn,
	layout: "column-reverse",
};

export const mediumColumnReverse: Omit<ArticleCardProps, "item"> = {
	...mediumColumn,
	layout: "column-reverse",
};

export const extraSmallColumn: Omit<ArticleCardProps, "item"> = {
	...mediumColumn,
	showDescription: false,
	cardCss: {
		maxWidth: LAYOUT.sm,
		minWidth: LAYOUT.xxs,
		// height: 300,
	},
	imageProps: {
		width: LAYOUT.sm,
		height: LAYOUT.xs,
		boxStyle: {
			maxWidth: `${LAYOUT.sm}px`,
			minWidth: `${LAYOUT.xxs}px`,
			width: LAYOUT.full,
			height: LAYOUT.xs,
		},
		style: {
			maxWidth: `${LAYOUT.sm}px`,
			minWidth: `${LAYOUT.xxs}px`,
			width: LAYOUT.full,
			height: `${LAYOUT.xs}`,
			// aspectRatio: ASPECT_RATIO.sixteenNine,
		},
	},
	cardContentCss: {
		height: LAYOUT.xs,
		maxHeight: LAYOUT.xs,
		width: LAYOUT.full,
		padding: MARGINS.NONE,
		margin: MARGINS.NONE,
	},
	contentTitleProps: {
		maxLines: 3,
		// variant: "Primary" as ContentTitleVariants,
		fontFamily: "roboto",
		fontWeight: "700",
		lineHeight: "1.25rem",
		fontSize: "1rem",
		marginTop: MARGINS.VSMALL,
	},
	descriptionProps: {
		maxWidth: LAYOUT.full,
		minWidth: LAYOUT.full,

		variant: "Primary",
		maxLines: 2,
	},
};

export const extraSmallColumnReverse: Omit<ArticleCardProps, "item"> = {
	...extraSmallColumn,
	layout: "column-reverse",
};
