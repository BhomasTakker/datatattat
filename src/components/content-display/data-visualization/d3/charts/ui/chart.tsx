import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Paper } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { PropsWithChildren } from "react";

type ChartWrapper = {
	title: string;
};

export const ChartWrapper = ({
	children,
	title,
}: PropsWithChildren<ChartWrapper>) => {
	return (
		<Paper
			elevation={3}
			// just use css modules if not dynamic or srop
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				paddingBottom: MARGINS.MIDLARGE,
			}}
		>
			<Title text={title} variant={TitleVariant.SUB} />
			{children}
		</Paper>
	);
};
