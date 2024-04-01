// @ts-nocheck / fix me
import styles from "./bar-chart.module.scss";
import { Text } from "../../text/text";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { ChartWrapper } from "../../ui/chart";
import { D3Axis } from "../../axis/axis";
import { createColorScale } from "../../../scale/color-scale";
import { COLOR_SET_FREE_PALESTINE } from "../../../config/colors";
import {
	getLabelFormatter,
	getScaleFormatter,
} from "../../../format/scale-format";
import { HorizontalBars } from "../../marks/horizontal-bars";
import { getScale } from "../../../scale/scale";

type Data = {
	results: { [key: string]: unknown }[];
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};
// Not correct / is generic
// BarChart comes in with a controler / interface component
type D3BarChart = {
	data: Data;
	title: string;
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	xAxisType: "number" | "string" | "date";
	xScaleType: string;
	yAxisType: "number" | "string" | "date";
	yScaleType: string;
	colorKey?: string;
	// Will be string[] - OR color[] - ie #00FF0F / could use colorSet instead / as well
	colorRange?: string[];
};

// The structure of data needs to be consistent
//
export const D3BarChart = ({
	data,
	title,
	// bandAxis
	xAxisValue,
	xAxisType,
	xScaleType,
	xAxisLabel = "",
	// linearAxis
	yAxisValue,
	yAxisType,
	yScaleType,
	yAxisLabel = "",
	colorKey,
	colorRange,
}: D3BarChart) => {
	// pass in / this has to be from the wider object
	// i.e. grid / we will need to position and size
	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 220 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	////////////////////////////////////////////////////////////
	// format scaleValue - number, string, date
	// need format / parse
	// xScaleFormat / yScaleFormat - string, number - 2dp | integer, date - sate format,
	// const xScaleValue = (d: UnknownObject) => d[xAxisValue] as number;
	// const yScaleValue = (d: UnknownObject) => d[yAxisValue] as string;

	// needs passed in or worked out
	const xScaleValue = getScaleFormatter({ type: xAxisType, key: xAxisValue });
	const yScaleValue = getScaleFormatter({ type: yAxisType, key: yAxisValue });

	//
	//////////////////////////////////////////////////////////////

	const { results } = data;

	const yScale = getScale({
		// take from props
		type: yScaleType,
		options: {
			data: results,
			scale: yScaleValue,
			rangeFrom: 0,
			rangeTo: innerHeight,
			padding: 0.15,
		},
	});

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
	// Fallback colors
	// Probs need if - else default color or set / assigning a color to a range/group?
	// We also want users to be able to select a color set
	// const colorValue = (d: UnknownObject) => d[colorKey] as string;
	const colorValue = getScaleFormatter({ type: "string", key: colorKey || "" });

	// Use but throw in a or set of colours
	const colorScale = createColorScale({
		data: results,
		scale: colorValue,
		// temp / need do better / works though / whie need outline?
		// given range, selected color set / default
		range: colorRange || COLOR_SET_FREE_PALESTINE,
	});

	// sorting via conversions seems a problem

	////////////////
	// create axis
	////////////////
	// Could package this as standard axis
	// this would be the same for a chart i.e. vertical bar chart
	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	// We would need a label format / max length - css? / etc
	// number date etc
	// const axisLabelFormatHnd = (val: number) => val.toString().slice(0, 25);
	// const axisLabelFn =  getLabelFormatter({type: 'string'});
	const axisLabelFormatHnd = getLabelFormatter({
		// Would just be axis type
		type: "string",
		options: { maxLength: 25 },
	});

	return (
		// description?
		<ChartWrapper title={title}>
			<SVGChartWrapper width={width} height={height} margin={margin}>
				{/* Create Axis  */}
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
					ticks={yScale.domain()}
					x2={innerWidth}
					labelFormat={axisLabelFormatHnd}
					xLabel={-10}
					yLabel={yScale.bandwidth() / 2}
					yLabelOffset="0.25rem"
					labelStyle={styles.yAxis}
				/>
				<Text
					text={xAxisLabel}
					variant="label"
					className={styles.axisLabel}
					x={innerWidth / 2}
					textAnchor="middle"
					y={innerHeight + 45}
				/>
				<Text
					text={yAxisLabel}
					// chart label
					className={styles.yAxis}
					variant="label"
					// textAnchor="middle"
					transform={`translate(${-50}, ${innerHeight / 2}) rotate(-90) `}
				/>
				<HorizontalBars
					data={results}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					xStart={0}
					yStart={0}
					colorScale={colorScale}
					colorValue={colorValue}
				/>
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
