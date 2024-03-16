import { ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
import { UnknownObject } from "../../types";
import { SVGProps } from "react";

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
};

export const HorizontalBars = ({
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
	rectProps,
}: Bars) => {
	// not here
	const setColor = (d: UnknownObject) => {
		let fill = "#FF0000";
		if (colorValue && colorScale) {
			fill = colorScale(colorValue(d) as string) as string;
		}
		// console.log({ COLOR: fill });
		return fill;
	};

	return (
		<>
			{data.map((d) => {
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
						x={xStart}
						// @ts-ignore
						y={yScale(yScaleValue(d))}
						// @ts-ignore
						width={xScale(xScaleValue(d) as number)}
						// @ts-ignore
						height={yScale.bandwidth()}
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
