import { PropsWithChildren } from "react";

type SVGMargin = { left: number; top: number; bottom: number; right: number };

type SVGChartWrapper = {
	width: number;
	height: number;
	margin: SVGMargin;
};

export const SVGChartWrapper = ({
	children,
	width,
	height,
	margin,
}: PropsWithChildren<SVGChartWrapper>) => {
	return (
		<svg width={width} height={height}>
			{/* Potentially Axis Component */}
			<g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
		</svg>
	);
};
