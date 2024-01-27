import { ScaleOrdinal } from "d3";
import styles from "./color-legend.module.scss";
import { Text } from "../text/text";

type ColorLegend = {
	colorScale: ScaleOrdinal<string, unknown, never>;
	fadeOpacity: number;
	size: number;
	spacing: number;
	x: number;
	y: number;
	title: string;
	onHover: (str: string | null) => void; // unknown perhaps
	highlightedValue: string | null;
};

export const ColorLegend = ({
	highlightedValue,
	fadeOpacity,
	colorScale,
	spacing,
	title,
	size,
	x,
	y,
	onHover,
}: ColorLegend) => {
	return (
		<g transform={`translate(${x}, ${y})`}>
			<Text text={title} variant="legend" />
			{colorScale.domain().map((val, i) => {
				return (
					<g
						opacity={
							highlightedValue && highlightedValue !== val ? fadeOpacity : 1
						}
						key={val}
						transform={`translate(${spacing}, ${spacing + i * spacing})`}
						className={styles.group}
						onMouseEnter={(e: unknown) => onHover(val)} // MouseEventHandler<SVGElement>
						onMouseOut={(e: unknown) => onHover(null)}
					>
						<circle fill={colorScale(val) as string} r={size} />
						<Text text={val} dy="0.25rem" x="1rem" variant="tick" />
						{/* <text className={styles.text} dy="0.25rem" x="1rem">
							
						</text> */}
					</g>
				);
			})}
		</g>
	);
};
