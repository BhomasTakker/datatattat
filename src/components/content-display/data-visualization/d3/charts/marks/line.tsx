import { ScaleBand, ScaleLinear, curveNatural, line, timeFormat } from "d3";
import styles from "./line.module.scss";
import { UnknownObject } from "../../types";

type Line = {
	data: { [key: string]: unknown }[];
	xScale: number[] & ScaleLinear<number, number, never>;
	yScale: ScaleBand<string>;
	yAxisKey: string;
	xAxisKey: string;
	xScaleValue: (d: UnknownObject) => unknown;
	yScaleValue: (d: UnknownObject) => unknown;
	// xAxisTickFormat: (): string;
};

const rando = Math.floor(Math.random() * 31);
// Surely put in bar-chart folder
// Horizontal bars?
// Take in rect props as an object?
export const Line = ({
	// these are all shared between types
	data,
	xScale,
	yScale,
	xAxisKey,
	yAxisKey,
	xScaleValue,
	yScaleValue,
}: // xAxisTickFormat,
Line) => {
	return (
		<>
			{/* create a path component */}
			<path
				// pass class or use default / pass color
				className={`${styles[`stroke${rando}`]} ${styles.path}`}
				//
				d={line()
					.x((d) => xScale(xScaleValue(d)))
					.y((d) => yScale(yScaleValue(d)))
					.curve(curveNatural)(data as Iterable<[number, number]>)}
			/>
		</>
	);
};
