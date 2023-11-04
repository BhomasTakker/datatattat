import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { CSS } from "@/src/css/text";
import { log } from "@/src/lib/logger";
import { Typography } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";

export type ContentTitleVariants = "Primary" | "Secondary";

// And element props?
export type ContentTitleProps = {
	title: string;
	variant?: ContentTitleVariants;
	maxLines?: number;
};

export const ContentTitle = ({
	title,
	variant = "Primary",
	maxLines = 2,
}: ContentTitleProps) => {
	log({ code: "FEATURE:0010", context: "CONTENT:TITLE" }, { variant });
	return (
		<Typography
			// variant compact
			variant="h6"
			component="h6"
			marginTop={0}
			marginBottom={0}
			///////////////////
			sx={{
				...CSS.maxLines({ maxLines }),
			}}
			// {...CSS.maxLines({ maxLines })}
		>
			{title}
		</Typography>
	);
};
