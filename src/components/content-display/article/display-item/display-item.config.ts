import { CSS } from "@/src/css/text";
import { ArticleDisplayItemProps } from "./display-item";

// Kinda feels they should all be 'full-banner'
// either provide height or default to 100%
// then specify variant - which is layout
export type ArticleDisplayItemVariant =
	| "full-banner"
	| "banner-600"
	| "banner-450"
	| "banner-300";

const titleLarge = {
	color: "white",
	fontFamily: "roboto",
	fontWeight: "700",
	lineHeight: "4rem",
	fontSize: "3.5rem",
	sx: { textShadow: "2px 2px 1px black", ...CSS.maxLines({ maxLines: 2 }) },
};

const titleMid = {
	color: "white",
	fontFamily: "roboto",
	fontWeight: "700",
	lineHeight: "3rem",
	fontSize: "2.4rem",
	sx: { textShadow: "2px 2px 1px black", ...CSS.maxLines({ maxLines: 2 }) },
};

const description = {
	color: "white",
	fontFamily: "roboto",
	fontWeight: "700",
	lineHeight: "2rem",
	fontSize: "1.75rem",

	sx: { textShadow: "2px 2px 1px black", ...CSS.maxLines({ maxLines: 3 }) },
};

const descriptionMid = {
	color: "white",
	fontFamily: "roboto",
	fontWeight: "700",
	lineHeight: "1.5rem",
	fontSize: "1.25rem",

	sx: { textShadow: "2px 2px 1px black", ...CSS.maxLines({ maxLines: 3 }) },
};

const fullBanner: Omit<ArticleDisplayItemProps, "item"> = {
	width: "100%",
	height: "100%",
	titleProps: {
		...titleLarge,
	},
	descriptionProps: {
		...description,
	},
};

const banner600: Omit<ArticleDisplayItemProps, "item"> = {
	width: "100%",
	height: "600px",
	titleProps: {
		...titleLarge,
	},
	descriptionProps: {
		...description,
	},
};

const banner450: Omit<ArticleDisplayItemProps, "item"> = {
	width: "100%",
	height: "450px",
	titleProps: {
		...titleLarge,
	},
	descriptionProps: {
		...description,
	},
};

const banner300: Omit<ArticleDisplayItemProps, "item"> = {
	width: "100%",
	height: "300px",
	titleProps: {
		...titleMid,
	},
	descriptionProps: {
		...descriptionMid,
	},
};

export const getConfig = (
	variant: ArticleDisplayItemVariant
): Omit<ArticleDisplayItemProps, "item"> => {
	switch (variant) {
		case "full-banner":
			return fullBanner;
		case "banner-600":
			return banner600;
		case "banner-450":
			return banner450;
		case "banner-300":
			return banner300;
		default:
			return banner450;
	}
};
