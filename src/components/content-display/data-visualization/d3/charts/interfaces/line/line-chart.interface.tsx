import { log } from "@/src/lib/logger";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { extent, scaleLinear, scaleTime, timeFormat } from "d3";
import { TimeAxis } from "../../axis/__time-axis";
import { Text } from "../../text/text";
import { Line } from "../../marks/line";
import { UnknownObject } from "../../../types";
import { Points } from "../../marks/points";
import { ChartWrapper } from "../../ui/chart";
import { useState } from "react";
import { D3Axis } from "../../axis/axis";

import styles from "./line-chart.module.scss";
import { createLinearScale } from "../../scale/linear-scale";
import { createTimeScale } from "../../scale/time-scale";

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
};

export const D3LineChart = ({
	data,
	xAxisValue,
	yAxisValue,
	xAxisLabel = "",
	yAxisLabel = "",
}: D3LineChart) => {
	// this won't work yet with the data we have
	const [selectedXValue, setSelectedXValue] = useState(xAxisValue);
	const [selectedYValue, setSelectedYValue] = useState(yAxisValue);
	const [highlightedValue, setHighlightedValue] = useState<string | null>(null);

	const colorKey = "species";

	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	// how do we specify
	// number, text, date, etc?
	const xScaleValue = (d: UnknownObject) => new Date(d[xAxisValue] as string);
	const yScaleValue = (d: UnknownObject) => d[yAxisValue] as number;

	// okay this is good / returns just the day
	// but how to make nicely dynamic....
	const xAxisTickFormat = timeFormat("%a");

	const xAxis = {
		type: "Time",
		format: "%a",
	};

	const { results } = data;

	const xScale = createTimeScale({
		data: results,
		scale: xScaleValue,
		rangeFrom: 0,
		rangeTo: innerWidth,
	});

	const yScale = createLinearScale({
		data: results,
		scale: yScaleValue,
		rangeFrom: innerHeight,
		rangeTo: 0,
	});

	log({ code: "0001:D3:LINE:CHART", context: "DATA" }, { data });

	// Repeated
	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	//
	const axisLabelFormatHnd = (val: number) => val.toString();
	const timeAxisLabelFormatHnd = xAxisTickFormat;

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
				{/* <LinearAxisLeft
					innerWidth={innerWidth}
					yScale={yScale}
					textProps={{
						// pass class?
						x: -10,
						dy: ".3rem",
						// For Bars
						y: 0,
						style: { textAnchor: "end" },
					}}
				/> */}
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
					circleRadius={3}
				/>
				{/* show points? */}
				<Points
					data={results}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					// could be css
					circleRadius={3}
					// circleProps={circleProps}
				/>
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
