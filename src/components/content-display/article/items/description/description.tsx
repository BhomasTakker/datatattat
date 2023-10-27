import { Typography } from "@mui/material";
import { CSS } from "@/src/css/text";
import { minMaxWidth } from "@/src/css/sizing";
import { stripHTML } from "@/src/utils/html";

interface DescriptionProps {
	description: string;
	maxLines?: number;
	maxWidth?: string; // how to do number px | % etc
	minWidth?: string;
}

export const Description = ({
	description,
	maxLines = 3,
	maxWidth = "100%",
	// 400px AND 100% to be taken from a widths
	// i.e. SIZES.FULL, SIZES.PRESET_400
	minWidth = "400px",
}: DescriptionProps) => {
	return (
		<Typography
			sx={{
				// width object / max, min, breakpoint sizes?
				...minMaxWidth({}), // do a width object
				// What is this actually for?
				// style default something or other
				display: "-webkit-box",
				// function to return this data
				// take num lines

				// for lines
				// Return function - lines style
				...CSS.maxLines({ maxLines }),
			}}
			// Perhaps componentType for variant and component
			// style gets color and etc's
			{...CSS.textStyle({})}
		>
			{stripHTML(description)}
		</Typography>
	);
};
