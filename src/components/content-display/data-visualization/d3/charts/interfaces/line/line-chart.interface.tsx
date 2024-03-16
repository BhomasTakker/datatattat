import { SVGChartWrapper } from "../../ui/svg-chart";
import { Text } from "../../text/text";
import { Line } from "../../marks/line";
import { UnknownObject } from "../../../types";
import { Points } from "../../marks/points";
import { ChartWrapper } from "../../ui/chart";
import { useState } from "react";
import { D3Axis } from "../../axis/axis";

import styles from "./line-chart.module.scss";
import {
	getLabelFormatter,
	getScaleFormatter,
} from "../../../format/scale-format";
import { getScale } from "../../../scale/scale";

type Data = {
	results: UnknownObject[];
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

export type D3LineChart = {
	data: Data;
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	xAxisType: string;
	xScaleType: string;
	yAxisType: string;
	yScaleType: string;
	//
	lineThickness: number;
	lineColor: string;
	showPoints: boolean;
	pointRadius: number;
	pointColor: string;
};

export const D3LineChart = ({
	data,
	xAxisValue,
	xAxisType,
	xScaleType,
	yAxisValue,
	yAxisType,
	yScaleType,
	xAxisLabel = "",
	yAxisLabel = "",
	//
	lineThickness,
	lineColor,
	showPoints,
	pointRadius,
	pointColor,
}: D3LineChart) => {
	// this won't work yet with the data we have
	const [selectedXValue, setSelectedXValue] = useState(xAxisValue);
	const [selectedYValue, setSelectedYValue] = useState(yAxisValue);
	const [highlightedValue, setHighlightedValue] = useState<string | null>(null);

	const colorKey = "species";

	// line color
	// Point color

	// defaults as per style / use / size etc
	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	// const showPoints: boolean = true;
	// const pointRadius = 3;
	// const pointColor = "#664290";

	// how do we specify
	// number, text, date, etc?
	// const xScaleValue = (d: UnknownObject) => new Date(d[xAxisValue] as string);
	// const yScaleValue = (d: UnknownObject) => d[yAxisValue] as number;
	// Would you ever pass anything in here or are we just parsing?
	// Potentially redo scales - or - can we group or something
	const xScaleValue = getScaleFormatter({ type: xAxisType, key: xAxisValue });
	const yScaleValue = getScaleFormatter({ type: yAxisType, key: yAxisValue });

	const { results } = data;

	// Need specify the axis
	// return scale and formatter?
	// const xScale = createTimeScale({
	// 	data: results,
	// 	scale: xScaleValue,
	// 	rangeFrom: 0,
	// 	rangeTo: innerWidth,
	// });

	const xScale = getScale({
		// take from props
		type: xScaleType,
		options: {
			data: results,
			scale: xScaleValue,
			rangeFrom: 0,
			rangeTo: innerWidth,
		},
	});

	const yScale = getScale({
		type: yScaleType,
		options: {
			data: results,
			scale: yScaleValue,
			rangeFrom: innerHeight,
			rangeTo: 0,
		},
	});

	// const [start, stop] = xScale.domain();
	// // create a bin / okay wtf...
	// const binnedData = bin()
	// 	.value(xScaleValue)
	// 	.domain(xScale.domain())
	// 	.thresholds(timeMonths(start, stop))(results)
	// 	.map((ary) => ({
	// 		["totalDeadAndMissing"]: sum(ary, yScaleValue),
	// 		x0: ary.x0,
	// 		x1: ary.x1,
	// 	}));

	// log({ code: "0001:D3:LINE:CHART", context: "DATA" }, { data, binnedData });

	// Repeated
	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	//
	// const axisLabelFormatHnd = (val: number) => val.toString();
	const axisLabelFormatHnd = getLabelFormatter({
		type: "number",
		options: { integer: true },
	});
	// const timeAxisLabelFormatHnd = xAxisTickFormat;
	const timeAxisLabelFormatHnd = getLabelFormatter({
		type: "date",
		options: { format: "%m/%d/%Y" },
		// options: { format: "%b %d %a %y" },
	});

	return (
		<ChartWrapper title="This is a Line Chart">
			<SVGChartWrapper width={width} height={height} margin={margin}>
				<D3Axis
					axis="x"
					translate={xAxisTranslateHnd}
					ticks={xScale.ticks()}
					y2={innerHeight}
					labelFormat={timeAxisLabelFormatHnd}
					yLabel={innerHeight}
					yLabelOffset="1rem"
				/>
				<D3Axis
					axis="y"
					translate={yAxisTranslateHnd}
					ticks={yScale.ticks()}
					x2={innerWidth}
					labelFormat={axisLabelFormatHnd}
					xLabel={-10}
					yLabelOffset="0.25rem"
					labelStyle={styles.yAxis}
				/>
				<Text
					text={xAxisLabel}
					variant="label"
					x={innerWidth / 2}
					textAnchor="middle"
					// need set offset somehow
					y={innerHeight + 45}
				/>
				<Text
					text={yAxisLabel}
					variant="label"
					textAnchor="middle"
					// We need to control this
					transform={`translate(${-50}, ${innerHeight / 2}) rotate(-90) `}
				/>
				<Line
					data={results}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					color={lineColor}
					lineThickness={lineThickness}
					// need set stroke color & width & dashed etc
					// could have sets and allow select
				/>
				{/* show points? */}
				{showPoints && (
					<Points
						data={results}
						xScale={xScale}
						xScaleValue={xScaleValue}
						xAxisKey={xAxisValue}
						yScale={yScale}
						yScaleValue={yScaleValue}
						yAxisKey={yAxisValue}
						defaultColor={pointColor}
						// could be css
						circleRadius={pointRadius}
						// need pass in color scale or single color
						// circleProps={circleProps}
					/>
				)}
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
