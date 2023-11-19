import { CSS } from "@/src/css/text";
import { log } from "@/src/lib/logger";
import { TypographyProps } from "@/src/types/mui";
import { Typography, TypographyTypeMap } from "@mui/material";

export type ContentTitleVariants = "Primary" | "Secondary";

// type FontProps = {
// 	fontFamily?: string;
// 	fontWeight?: string;
// 	lineHeight?: string;
// 	fontSize?: string;
// };

// And element props?
export type ContentTitleProps = {
	title: string;
	variant?: ContentTitleVariants;
	maxLines?: number;
	// font?: FontProps;
	// should use rest?
	// titleProps?: TypographyTypeMap["props"];
} & TypographyProps;

export const ContentTitle = ({
	title,
	// titleVariant or none
	// variant = "Primary",
	maxLines = 2,
	...rest
}: ContentTitleProps) => {
	return (
		<Typography
			variant="h6"
			component="h6"
			sx={{
				...CSS.maxLines({ maxLines }),
			}}
			{...rest}
			///////////////////
		>
			{title}
		</Typography>
	);
};
