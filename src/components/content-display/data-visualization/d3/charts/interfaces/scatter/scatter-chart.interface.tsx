import { log } from "@/src/lib/logger";
import { extent, scaleLinear, scaleOrdinal } from "d3";
import { AxisBottom } from "../../axis/___axis-bottom";
import styles from "./scatter-chart.module.scss";
import { Text } from "../../text/text";
import { Points } from "../../marks/points";
import { LinearAxisLeft } from "../../axis/__linear-axis-left";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { UnknownObject } from "../../../types";
import { ChartWrapper } from "../../ui/chart";
import { SelectComponent } from "../../../ui/SelectComponent";
import { useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { formatLabel } from "@/src/utils/string";
import { MARGINS } from "config/styles/styles.config";
import { AxisSelect } from "../../controls/axis-select";
import { ColorLegend } from "../../legend/color-legend";
import { D3Axis } from "../../axis/axis";
import { createLinearScale } from "../../scale/linear-scale";

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
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
};

// The structure of data needs to be consistent
//
export const D3ScatterChart = ({
	data,
	xAxisValue,
	yAxisValue,
	// should be show or not show
	xAxisLabel = "",
	yAxisLabel = "",
}: D3ScatterChart) => {
	const [selectedXValue, setSelectedXValue] = useState(xAxisValue);
	const [selectedYValue, setSelectedYValue] = useState(yAxisValue);
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
	// const xAxisValue = "sepal_length";
	// const yAxisValue = "sepal_width";
	const colorKey = "species";

	// const xAxisLabel = "Sepal Length";
	// const yAxisLabel = "Sepal Width";

	const { results } = data;

	// We MAY need to parse values
	const parsed = results;

	const colorValue = (d: UnknownObject) => d[colorKey] as string;

	const highlightedData = parsed.filter(
		(d) => highlightedValue === colorValue(d)
	);

	// we need options in { label, value } form
	// We need human readable labels or default
	// Format? - remove underscores and capitalise? Would work for 80%?
	// Use given labels if provided
	const options = Object.keys(results[0]).map((key) => ({
		label: formatLabel(key),
		value: key,
	}));

	console.log({ highlightedValue });

	// need format depending
	const xScaleValue = useCallback(
		(d: UnknownObject) => d[selectedXValue] as number,
		[selectedXValue]
	);
	const yScaleValue = useCallback(
		(d: UnknownObject) => d[selectedYValue] as number,
		[selectedYValue]
	);

	const xScale = createLinearScale({
		data: parsed,
		scale: xScaleValue,
		rangeFrom: 0,
		rangeTo: innerWidth,
	});

	const yScale = createLinearScale({
		data: parsed,
		scale: yScaleValue,
		rangeFrom: 0,
		rangeTo: innerHeight,
	});

	const colorScale = useMemo(
		() =>
			scaleOrdinal()
				.domain(parsed.map(colorValue))
				// colour sets
				.range(["#d15a86", "#0f8c79", "#f6b656"]),
		[parsed]
	);

	log({ code: "0010:CSV:DATA", context: "Component data" }, { data });

	// will be the same between all axis?
	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	const axisLabelFormatHnd = (val: number) => val.toString();

	return (
		<ChartWrapper title="This is a Scatter Chart of the Iris Dataset">
			{/* Allow add - but how change axis - linear, etc */}
			{/* Component - have a context to manage state */}
			{/* <Box display="flex" flexDirection="column" justifyContent="center"> */}
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
					// x={0 + -50}
					textAnchor="middle"
					// y={innerHeight / 2}
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
