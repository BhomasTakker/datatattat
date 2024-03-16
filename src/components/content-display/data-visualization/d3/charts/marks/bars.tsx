import { ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
import styles from "./bars.module.scss";
import { SVGProps } from "react";
import { UnknownObject } from "../../types";

// Are we better off having horizontal bars and vertical bars ?
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

const HorizontalBars = (
	options: Omit<Bars, "data"> & { d: { [key: string]: unknown } }
) => {
	const {
		d,
		xScale,
		yScale,
		xAxisKey,
		yAxisKey,
		xScaleValue,
		yScaleValue,
		xStart = 0,
		rectProps,
		colorValue,
		colorScale,
	} = options;

	const setColor = (d: UnknownObject) => {
		let fill = "#FF0000";
		if (colorValue && colorScale) {
			fill = colorScale(colorValue(d) as string) as string;
		}
		// console.log({ COLOR: fill });
		return fill;
	};

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
};

const VerticalBars = (
	options: Omit<Bars, "data"> & { d: { [key: string]: unknown } }
) => {
	const {
		d,
		xScale,
		yScale,
		xAxisKey,
		yAxisKey,
		xScaleValue,
		yScaleValue,
		yStart = 0,
		rectProps,
	} = options;
	return (
		<rect
			className={styles[`data${rando}`]}
			// in bars is okay other types no
			key={`${d[xAxisKey]}:${d[yAxisKey]}` as string}
			// wouldn't neccessarily start at 0
			// variable
			y={yStart}
			// @ts-ignore
			x={xScale(xScaleValue(d) as number)}
			// @ts-ignore
			height={yScale(yScaleValue(d) as number)}
			// @ts-ignore
			width={xScale.bandwidth()}
			{...rectProps}
		>
			{/* variable horizonal / vertical */}
			<title>{d[xAxisKey] as string}</title>
		</rect>
	);
};

const rando = Math.floor(Math.random() * 31);
// Surely put in bar-chart folder
// Horizontal bars?
// Take in rect props as an object?
export const Bars = ({
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
	// Vertical not tested or failed when tested!
	// needs parent to pass corrct
	const isVertical = false;

	if (isVertical) {
		return (
			<>
				{data.map((d) => (
					<VerticalBars
						key={`${d[xAxisKey]}:${d[yAxisKey]}` as string}
						d={d}
						xScale={xScale}
						yScale={yScale}
						xAxisKey={xAxisKey}
						yAxisKey={yAxisKey}
						xScaleValue={xScaleValue}
						yScaleValue={yScaleValue}
						colorScale={colorScale}
						colorValue={colorValue}
						///////////////////////////////////
						yStart={xStart}
						rectProps={rectProps}
					/>
				))}
			</>
		);
	}

	return (
		<>
			{data.map((d) => (
				<HorizontalBars
					key={`${d[xAxisKey]}:${d[yAxisKey]}` as string}
					d={d}
					xScale={xScale}
					yScale={yScale}
					xAxisKey={xAxisKey}
					yAxisKey={yAxisKey}
					xScaleValue={xScaleValue}
					yScaleValue={yScaleValue}
					colorScale={colorScale}
					colorValue={colorValue}
					///////////////////////////////////
					xStart={xStart}
					rectProps={rectProps}
				/>
			))}
		</>
	);
};
