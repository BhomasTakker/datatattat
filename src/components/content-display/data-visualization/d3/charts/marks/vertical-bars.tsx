// @ts-nocheck / FIX ME
import { ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
import { SVGProps } from "react";
import { UnknownObject } from "../../types";

type Bars = {
	data: { [key: string]: unknown }[];
	xScale: ScaleBand<string> | (number[] & ScaleLinear<number, number, never>);
	yScale: ScaleBand<string> | (number[] & ScaleLinear<number, number, never>);
	yAxisKey: string;
	xAxisKey: string;
	xScaleValue: (d: UnknownObject) => unknown;
	yScaleValue: (d: UnknownObject) => unknown;
	xStart?: number;
	yStart?: number;
	rectProps?: SVGProps<SVGRectElement>;
	colorValue: (d: UnknownObject) => unknown;
	colorScale: ScaleOrdinal<string, unknown, never>;
	width: number;
	height: number;
};

export const VerticalBars = ({
	data,
	xScale,
	yScale,
	xAxisKey,
	yAxisKey,
	xScaleValue,
	yScaleValue,
	colorValue,
	colorScale,
	///////////////////////////////////
	xStart = 0,
	yStart = 0,
	width,
	height,
	rectProps,
}: Bars) => {
	// not here
	// pass in
	const setColor = (d: UnknownObject) => {
		let fill = "#FF0000";
		if (colorValue && colorScale) {
			fill = colorScale(colorValue(d) as string) as string;
		}
		// console.log({ COLOR: fill });
		return fill;
	};

	console.log("8889", { innerHeight, xStart, yStart, width, height });

	return (
		<>
			{data.map((d) => {
				// console.log("8889:SCALE:VALUE:1", { VALUE: yScale(yScaleValue(d)) });
				// console.log("8889:SCALE:VALUE:2", { VALUE2: yScaleValue(d) });
				// should probably just pass these bits
				// functions OR values for x, y, width, height, setColor, setStroke, setTitle
				return (
					<rect
						// have and pass override
						// className={styles[`data${rando}`]}
						// in bars is okay other types no
						key={`${d[xAxisKey]}:${d[yAxisKey]}` as string}
						// wouldn't neccessarily start at 0
						// variable
						// x={xStart}
						// shoud be min - 0 if starting 0
						// pass in ?
						x={xStart(d)}
						// @ts-ignore
						// y={yScale(yScaleValue(d))}
						y={yStart(d)}
						width={width(d)}
						// @ts-ignore
						height={height(d)}
						fill={setColor(d)}
						// pass in as prop / let user decide
						stroke="#000000"
						{...rectProps}
					>
						{/* variable horizonal / vertical */}
						<title>{d[xAxisKey] as string}</title>
					</rect>
				);
			})}
		</>
	);
};
