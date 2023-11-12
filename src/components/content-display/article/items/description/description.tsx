import { Typography } from "@mui/material";
import { CSS } from "@/src/css/text";
import { stripHTML } from "@/src/utils/html";
import { log } from "@/src/lib/logger";
import { TypographyProps } from "@/src/types/mui";

export type DescriptionVariants = "Primary" | "Secondary";

export type DescriptionProps = {
	description: string;
	maxLines?: number;
	// maxWidth?: string; // how to do number px | % etc
	// minWidth?: string;
	// variant: DescriptionVariants;
} & TypographyProps;

export const Description = ({
	description,
	maxLines = 3,
	// variant = "Primary",
	// look at this - we probably don't want defaults?
	// maxWidth = "100%",
	// 400px AND 100% to be taken from a widths
	// i.e. SIZES.FULL, SIZES.PRESET_400
	// minWidth = "400px",
	...rest
}: DescriptionProps) => {
	log({ code: "FEATURE:0010", context: "DESCRIPTION" });
	return (
		<Typography
			data-testid="description"
			sx={{
				// width object / max, min, breakpoint sizes?
				// ...minMaxWidth({ maxWidth, minWidth }), // do a width object
				...CSS.maxLines({ maxLines }),
			}}
			{...rest}
			// This would be a no? you could go with text variant
			// font family, size, color, etc
			{...CSS.textStyle()}
		>
			{stripHTML(description)}
		</Typography>
	);
};
