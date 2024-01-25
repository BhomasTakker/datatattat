import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";

type SVGMargin = { left: number; top: number; bottom: number; right: number };

type SVGChartWrapper = {
	width: number;
	height: number;
	margin: SVGMargin;
	title: string;
};

export const SVGChartWrapper = ({
	children,
	width,
	height,
	margin,
	title,
}: PropsWithChildren<SVGChartWrapper>) => {
	return (
		<Paper elevation={3}>
			<Title text={title} variant={TitleVariant.SUB} />
			<svg width={width} height={height}>
				{/* Potentially Axis Component */}
				<g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
			</svg>
		</Paper>
	);
};
