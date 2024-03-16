import { log } from "@/src/lib/logger";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { max, scaleLinear } from "d3";
import { Text } from "../../text/text";
import { UnknownObject } from "../../../types";
import { ChartWrapper } from "../../ui/chart";
import { useState } from "react";
import { D3Axis } from "../../axis/axis";

import styles from "./histogram.module.scss";
import {
	getLabelFormatter,
	getScaleFormatter,
} from "../../../format/scale-format";
import { getScale } from "../../../scale/scale";
import { createBinnedData } from "../../../data-manipulation/binned/binned-data";
import { VerticalBars } from "../../marks/vertical-bars";

type Data = {
	results: UnknownObject[];
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

// create an Axis Type - we share between
export type D3HistogramChart = {
	data: Data;
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	xAxisType: "string" | "number" | "date";
	xScaleType: string;
	yAxisType: string;
	yScaleType: "string" | "number" | "date";
	operationId: string;
	binDataKey: string;
	binSourceKey: string;
	xAxisLabelFormatOptions: UnknownObject;
	yAxisLabelFormatOptions: UnknownObject;
	groupId: string;
};

export const D3HistogramChart = ({
	data,
	xAxisValue,
	yAxisValue,
	xAxisLabel = "",
	yAxisLabel = "",
	xAxisType,
	xScaleType,
	yAxisType,
	yScaleType,
	operationId,
	binDataKey,
	binSourceKey,
	groupId,
	xAxisLabelFormatOptions,
	yAxisLabelFormatOptions,
}: D3HistogramChart) => {
	// this won't work yet with the data we have
	const [selectedXValue, setSelectedXValue] = useState(xAxisValue);
	const [selectedYValue, setSelectedYValue] = useState(yAxisValue);
	const [highlightedValue, setHighlightedValue] = useState<string | null>(null);

	const colorKey = "species";

	const width = 900;
	const height = 600;
	// ultimately margin needs to be gotten from somewhere
	const margin = { top: 20, right: 30, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const { results } = data;
	log({ code: "0001:D3:HISTOGRAM:CHART", context: "DATA" }, { data });
	log(
		{ code: "0001:D3:HISTOGRAM:CHART", context: "PROPS" },
		{
			xAxisValue,
			yAxisValue,
			xAxisLabel,
			yAxisLabel,
			xAxisType,
			xScaleType,
			yAxisType,
			yScaleType,
			operationId,
			binDataKey,
			binSourceKey,
			groupId,
			xAxisLabelFormatOptions,
			yAxisLabelFormatOptions,
		}
	);
	///////////////////////////////////////
	// Create xScaleValue, xLabelFormat, and xScale all from the same function?
	// Set depending on given props- linear, time, band, for instance
	// At least create according to given props and via an interface
	///////////////////////////////////////////////////////////////
	// For time format provide a small list of options
	////////////////////////////////////////////////////////////
	// const xScaleValue = (d: UnknownObject) => new Date(d[xAxisValue] as string);
	// const yScaleValue = (d: UnknownObject) => d[yAxisValue] as number;
	const xScaleValue = getScaleFormatter({ type: xAxisType, key: xAxisValue });
	const yScaleValue = getScaleFormatter({ type: yAxisType, key: yAxisValue });

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
	///////////////////////////////////////////////////////

	///////////////////////////////////////////////////////
	// Create Bins ////////////////////////////
	// Probably a few set functions at this stage
	// Group by - thresholds? <- be set a few
	// map to convert - newKey = sum etc
	// const [start, stop] = xScale.domain();
	// create a bin / okay wtf...
	// log({ code: "0001:D3:HISTOGRAM:CHART", context: "DATA" }, { start, stop });

	/////////////////////////////////////////////
	// how to do binned data?
	// potentially order will be important?
	// y using xBin data
	// lol - good luck with this!
	//////////////////////////////////
	// Could make the argument that this should be done via conversions.
	// Would need thinking about
	// But some manner is possible
	// const binnedData = bin()
	// 	.value(xScaleValue)
	// 	.domain(xScale.domain())
	// 	// group these / by months range
	// 	.thresholds(timeMonths(start, stop))(results)
	// 	// cycle results assign sum
	// 	.map((ary) => ({
	// 		["totalDeadAndMissing"]: sum(ary, yScaleValue),
	// 		x0: ary.x0,
	// 		x1: ary.x1,
	// 	}));

	// ////////////////////////////////////
	// You would have to add bin via edit
	// Add bin
	// Select group axis
	// groupId
	// operationId
	// data key
	// const dataKey = yAxisValue;
	// const operationId = "sum";
	// const groupId = "timeMonths";
	// resultScaleAxis
	/////////////////////
	// Bin should be in / a part of conversions - bins or groups or transformations
	// Use D3 - There are probably a lot of useful D3 data conversion functions
	// Even just dates for instance
	////////////////////////////////////////
	const binnedData = createBinnedData({
		// These 3 are linked
		// We are performing the grouping on xScales data
		groupScaleValue: xScaleValue,
		groupScaleDomain: xScale.domain(),
		// d3 group function
		groupId,

		results,
		// These three are linked
		// d3 operation function
		operationId,
		// the key to perform the operation on
		// Feels like we should be creating a new object value
		// This IS what we're mapping to / yScaleValue IS totalDeadAndMissing
		// We are overwriting it
		// //////////////
		// Binned data creates a whole new object array
		// We would probably need to map it
		key: binDataKey,
		resultScaleValue: (d) => d[binSourceKey],
	});

	// log(
	// 	{ code: "8889:D3:HISTOGRAM:CHART", context: "DATA" },
	// 	{ data, binnedData }
	// );

	///////////////////////////////////////////////////
	// Update scale Linear - pass in domain
	///////////////////////////////////////////////////
	// const yScale = createLinearScale({
	// 	data: results,
	// 	scale: yScaleValue,
	// 	rangeFrom: innerHeight,
	// 	rangeTo: 0,
	// });

	// this is a big change?
	// Not really - get grouped data function
	// Is just a linear for this no real change right?
	// Effectively just linear from 0 to max / check and perhaps refactor
	// OR it can be a choice?
	const yScale = scaleLinear()
		// @ts-ignore
		.domain([0, max(binnedData, yScaleValue)])
		.range([innerHeight, 0])
		.nice();

	///////////////////////////////////////////////

	// Repeated
	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	// label formatter is the only thing left for these graphs?
	//
	// const axisLabelFormatHnd = (val: number) => val.toString();
	const axisLabelFormatHnd = getLabelFormatter({
		type: yAxisType,
		options: yAxisLabelFormatOptions,
		// options: { integer: true },
	});

	const timeAxisLabelFormatHnd = getLabelFormatter({
		type: xAxisType,
		// options: { format: "%m/%Y" },
		options: xAxisLabelFormatOptions,
		// options: { format: "%b %d %a %y" },
	});
	return (
		<ChartWrapper title="This is a Histogram Chart">
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
				<VerticalBars
					data={binnedData}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					innerHeight={innerHeight}
					// Probably how this should be accross all charts
					// how to get width if not binned data
					width={(d) => xScale(d.high) - xScale(d.low)}
					height={(d) => innerHeight - yScale(yScaleValue(d))}
					xStart={(d) => xScale(d.low)}
					yStart={(d) => yScale(yScaleValue(d))}
				/>

				{/* <Barss
					data={binnedData}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					// could be css
					circleRadius={3}
					innerHeight={innerHeight}
					// circleProps={circleProps}
				/> */}
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
