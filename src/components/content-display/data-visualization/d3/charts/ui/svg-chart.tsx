import { PropsWithChildren } from "react";
import styles from "./svg-chart.module.scss";

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
		<svg width={width} height={height} className={styles.root}>
			{/* Potentially Axis Component */}
			<g
				transform={`translate(${margin.left}, ${margin.top})`}
				className={styles.root}
			>
				{children}
			</g>
		</svg>
	);
};
