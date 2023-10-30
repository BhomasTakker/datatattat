import { Typography } from "@mui/material";
import { CSS } from "@/src/css/text";
import { minMaxWidth } from "@/src/css/sizing";
import { stripHTML } from "@/src/utils/html";
import { log } from "@/src/lib/logger";

export type DescriptionVariants = "Primary" | "Secondary";

interface DescriptionProps {
	description: string;
	maxLines?: number;
	maxWidth?: string; // how to do number px | % etc
	minWidth?: string;
	variant: DescriptionVariants;
}

export const Description = ({
	description,
	maxLines = 3,
	variant = "Primary",
	maxWidth = "100%",
	// 400px AND 100% to be taken from a widths
	// i.e. SIZES.FULL, SIZES.PRESET_400
	minWidth = "400px",
}: DescriptionProps) => {
	log({ code: "FEATURE:0010", context: "DESCRIPTION" }, { variant });
	return (
		<Typography
			data-testid="description"
			sx={{
				// width object / max, min, breakpoint sizes?
				...minMaxWidth(), // do a width object
				...CSS.maxLines({ maxLines }),
			}}
			// Perhaps componentType for variant and component
			// style gets color and etc's
			{...CSS.textStyle()}
		>
			{stripHTML(description)}
		</Typography>
	);
};
