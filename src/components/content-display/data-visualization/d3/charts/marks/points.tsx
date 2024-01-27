import { ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
import styles from "./bars.module.scss";
import { SVGProps, useCallback } from "react";
import { UnknownObject } from "../../types";

// take in circle props
type Points = {
	data: { [key: string]: unknown }[];
	// linear, band, or tiime
	xScale: number[] & ScaleLinear<number, number, never>;
	yScale: number[] & ScaleLinear<number, number, never>;
	yAxisKey: string;
	xAxisKey: string;
	xScaleValue: (d: UnknownObject) => unknown;
	yScaleValue: (d: UnknownObject) => unknown;
	////////////////////
	circleRadius: number;
	circleProps?: SVGProps<SVGCircleElement>;
	//
	colorValue: (d: UnknownObject) => unknown;
	colorScale: ScaleOrdinal<string, unknown, never>;
};
// think it does one over - or 0?
const rando = Math.floor(Math.random() * 31);
// Surely put in bar-chart folder
// Horizontal bars?
export const Points = ({
	data,
	xScale,
	yScale,
	xAxisKey,
	yAxisKey,
	xScaleValue,
	yScaleValue,
	/////////////////////////////////////////////
	circleProps,
	circleRadius,
	colorValue,
	colorScale,
}: Points) => {
	// setColor

	const setColor = useCallback(
		(d: UnknownObject) => {
			let fill = "#FF0000";
			if (colorValue && colorScale) {
				fill = colorScale(colorValue(d) as string) as string;
			}
			// console.log({ COLOR: fill });
			return fill;
		},
		[colorScale, colorValue]
	);

	return (
		<>
			{/* Offset this to a function */}
			{data.map((d, i) => (
				<circle
					// className={styles[`data${rando}`]}
					key={i}
					// wouldn't neccessarily start at 0
					cx={xScale(xScaleValue(d) as number)}
					cy={yScale(yScaleValue(d) as number)}
					r={circleRadius}
					// use to set class
					fill={setColor(d)}
					{...circleProps}
				>
					{/* variable */}
					<title>{d[xAxisKey] as string}</title>
				</circle>
			))}
		</>
	);
};
