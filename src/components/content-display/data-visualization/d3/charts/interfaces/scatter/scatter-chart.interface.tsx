import styles from "./scatter-chart.module.scss";
import { Text } from "../../text/text";
import { Points } from "../../marks/points";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { UnknownObject } from "../../../types";
import { ChartWrapper } from "../../ui/chart";
import { useState } from "react";
import { formatLabel } from "@/src/utils/string";
import { AxisSelect } from "../../controls/axis-select";
import { ColorLegend } from "../../legend/color-legend";
import { D3Axis } from "../../axis/axis";
import {
	getLabelFormatter,
	getScaleFormatter,
} from "../../../format/scale-format";
import { getScale } from "../../../scale/scale";
import { COLOR_SSET_ASD } from "../../../config/colors";

// Technically not the right shape
// We expect results from data
// that should be about all
type Data = {
	results: UnknownObject[];
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

// generic type
type D3ScatterChart = {
	data: Data;
	// All of this is repeated
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	// type these properly
	xAxisType: string;
	xScaleType: string;
	yAxisType: string;
	yScaleType: string;
	colorKey: string;
};

// The structure of data needs to be consistent
//
export const D3ScatterChart = ({
	data,
	xAxisValue,
	xAxisType,
	xScaleType,
	yAxisValue,
	yAxisType,
	yScaleType,
	colorKey, // should be optional - fallback to default color
	// should be show or not show
	xAxisLabel = "",
	yAxisLabel = "",
}: D3ScatterChart) => {
	// We could effectively just add in as stabdard (wrapper possibly)
	const [selectedXValue, setSelectedXValue] = useState(xAxisValue);
	const [selectedYValue, setSelectedYValue] = useState(yAxisValue);

	// Would we use by default?
	// For selected graphs - yes?
	const [highlightedValue, setHighlightedValue] = useState<string | null>(null);

	// We 'just' need to pass in xAxisType and yAxisType
	// 'Basic' type of data number, string, date

	// pass in
	const width = 1000;
	const height = 700;
	const margin = { top: 20, right: 200, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;
	const fadeOpacity = 0.2;

	const { results } = data;

	const parsed = results;

	const colorValue = getScaleFormatter({ type: "string", key: colorKey || "" });

	// How to do this a little better
	// build in as standard and on/off
	const highlightedData = parsed.filter(
		(d) => highlightedValue === colorValue(d)
	);
	//////////////////////////////////////
	// Axis Select
	// Adding axis label switcher
	// We would / should update axis TYPE each time
	// To update format etc
	// BUT - just allow dumb select - up to you
	//////////////////////////////////////////////
	// If we assume or demand we have columns from data?
	const options = Object.keys(results[0]).map((key) => ({
		label: formatLabel(key),
		value: key,
	}));

	// We need to be able to set axis type
	const xScaleValue = getScaleFormatter({
		type: xAxisType,
		key: selectedXValue,
	});
	const yScaleValue = getScaleFormatter({
		type: yAxisType,
		key: selectedYValue,
	});

	// Could be time / band?
	const xScale = getScale({
		type: xScaleType,
		options: {
			data: parsed,
			scale: xScaleValue,
			rangeFrom: 0,
			rangeTo: innerWidth,
		},
	});

	const yScale = getScale({
		// take from props
		type: yScaleType,
		options: {
			data: parsed,
			scale: yScaleValue,
			rangeFrom: 0,
			rangeTo: innerHeight,
		},
	});

	// We need select color set of select colors
	const colorScale = getScale({
		type: "color",
		options: {
			data: parsed,
			scale: colorValue,
			range: COLOR_SSET_ASD,
		},
	});

	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	//////////////////////////////////////////
	// We need x and y - and user set
	// Set type and provide type options / create object select / provide id to object
	//////////////////////////////////////////
	const axisLabelFormatHnd = getLabelFormatter({
		type: "number",
		options: { dp: 1 },
	});
	return (
		<ChartWrapper title="This is a Scatter Chart of the Iris Dataset">
			<AxisSelect
				xOptions={options}
				yOptions={options}
				selectedXValue={selectedXValue}
				selectedYValue={selectedYValue}
				setSelectedXValue={setSelectedXValue}
				setSelectedYValue={setSelectedYValue}
			/>
			<SVGChartWrapper width={width} height={height} margin={margin}>
				<D3Axis
					axis="x"
					translate={xAxisTranslateHnd}
					ticks={xScale.ticks()}
					y2={innerHeight}
					labelFormat={axisLabelFormatHnd}
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
				{/* Could argue outside of svg is better (DOM structure) */}
				{/* Make optional */}
				<ColorLegend
					colorScale={colorScale}
					fadeOpacity={fadeOpacity}
					size={10}
					spacing={35}
					title={colorKey}
					x={innerWidth + 25}
					y={innerHeight / 2}
					onHover={setHighlightedValue}
					highlightedValue={highlightedValue}
				/>
				<Text
					text={formatLabel(xAxisLabel || selectedXValue)}
					variant="label"
					className={styles.axisLabel}
					x={innerWidth / 2}
					textAnchor="middle"
					y={innerHeight + 45}
				/>
				<Text
					text={formatLabel(yAxisLabel || selectedYValue)}
					variant="label"
					className={styles.axisLabel}
					textAnchor="middle"
					transform={`translate(${-50}, ${innerHeight / 2}) rotate(-90) `}
				/>
				<g opacity={highlightedValue ? fadeOpacity : 1}>
					<Points
						data={parsed}
						xScale={xScale}
						xScaleValue={xScaleValue}
						xAxisKey={xAxisValue}
						yScale={yScale}
						yScaleValue={yScaleValue}
						yAxisKey={yAxisValue}
						circleRadius={10}
						colorScale={colorScale}
						colorValue={colorValue}
					/>
				</g>
				{/* if use highlight */}
				<Points
					data={highlightedData}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					circleRadius={10}
					colorScale={colorScale}
					colorValue={colorValue}
				/>
			</SVGChartWrapper>
			{/* </Box> */}
		</ChartWrapper>
	);
};
