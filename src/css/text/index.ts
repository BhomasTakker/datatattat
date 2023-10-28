import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { ElementType } from "react";

interface TextStyle {
	component?: ElementType<any>;
	variant?:
		| OverridableStringUnion<
				Variant | "inherit",
				TypographyPropsVariantOverrides
		  >
		| undefined;
	color?: string;
}

export const textStyle = ({
	component = "span",
	variant = "body1",
	color = "text.primary",
}: TextStyle = {}) => ({
	component,
	variant,
	color,
});

interface MaxLines {
	maxLines?: number;
	textOverflow?: "clip" | "ellipsis" | string;
}
export const maxLines = ({
	maxLines = 1,
	textOverflow = "ellipsis",
}: MaxLines = {}) => ({
	display: "-webkit-box",
	overflow: "hidden",
	textOverflow,
	WebkitBoxOrient: "vertical",
	WebkitLineClamp: maxLines,
	maxLines: maxLines,
});

// would be text
export const CSS = {
	maxLines,
	textStyle,
};
