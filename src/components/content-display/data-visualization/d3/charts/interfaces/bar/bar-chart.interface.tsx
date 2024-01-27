import { log } from "@/src/lib/logger";
import { max, scaleBand, scaleLinear } from "d3";
import { AxisBottom } from "../../axis/___axis-bottom";
import { AxisLeft } from "../../axis/__axis-left";
import { Bars } from "../../marks/bars";
import styles from "./bar-chart.module.scss";
import { Text } from "../../text/text";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { UnknownObject } from "../../../types";
import { ChartWrapper } from "../../ui/chart";
import { D3Axis } from "../../axis/axis";
import { createLinearScale } from "../../scale/linear-scale";
import { createBandScale } from "../../scale/band-scale";
// type Data = { [key: string]: unknown }[];
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
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
};

// The structure of data needs to be consistent
//
export const D3BarChart = ({
	data,
	xAxisValue,
	yAxisValue,
	xAxisLabel = "",
	yAxisLabel = "",
}: D3BarChart) => {
	log({ code: "0010:CSV:DATA", context: "Component data" }, { data });
	log(
		{ code: "0010:CSV:DATA", context: "BAR:CHART" },
		{ data, xAxisValue, yAxisValue, xAxisLabel, yAxisLabel }
	);
	// pass in
	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 220 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	// edit data
	// const yAxis = "Country";
	// const xAxis = "2020_1";
	// const xAxisLabel = "Deaths per 100,000";
	// const yAxisLabel = "";
	// we need citation / attributions

	const xScaleValue = (d: UnknownObject) => d[xAxisValue] as number;
	const yScaleValue = (d: UnknownObject) => d[yAxisValue] as string;

	//
	type Direction = "vertical" | "horizontal"; // would you leftToRight/rightToLeft, etc?
	const direction: Direction = "horizontal";

	// Filters - but how?
	// We should have this figured out
	// filtering, sorting, etc, on the front end
	// great point to jump into web workers...
	///////////////////////////////////////////
	// Do as part of conversions?
	// Both - we can use controls to switch between data
	// filter what we aren't interested in
	// But how the hell do we know?
	// Ultimately we'll need to load the data and get headings from it
	// 'type' that as reference
	const countries = [
		"Afghanistan",
		"American Samoa",
		"Aruba",
		"Barbados",
		"Albania",
		"Dominica",
		"Guinea-Bissau",
		"Kuwait",
		"Malawi",
		"Mongolia",
		"Pakistan",
		"Saint Lucia",
		"Trinidad and Tobago",
		"United States of America",
		"Uzbekistan",
		"Viet Nam",
		"Zimbabwe",
		"United Kingdom (Scotland)",
		"United Kingdom (Northern Ireland)",
		"United Kingdom (England and Wales)",
		"Israel",
	];

	const { results } = data;
	////////////////////////////////////////////////////////////////////////////////
	// FILTERING ///////////////////////////////////////////////////////////////////
	// We should be filtering on the server - this is where conversions start being properly required?
	////////////////////////////////////////////////////////////////////////////////
	const filteredResults = results.filter((res) =>
		countries.includes(res[yAxisValue] as string)
	);
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

	// variable horiz, vert
	// const yScale = scaleBand()
	// 	.domain(filteredResults.map(yScaleValue))
	// 	.range([0, innerHeight])
	// 	.paddingInner(0.15);

	const yScale = createBandScale({
		data: filteredResults,
		scale: yScaleValue,
		rangeFrom: 0,
		rangeTo: innerHeight,
		padding: 0.15,
	});

	const xScale = createLinearScale({
		data: filteredResults,
		scale: xScaleValue,
		rangeFrom: 0,
		rangeTo: innerWidth,
	});
	// scaleLinear()
	// 	// @ts-ignore
	// 	.domain([0, max(filteredResults, xScaleValue)])
	// 	.range([0, innerWidth]);

	log(
		{ code: "0010:CSV:DATA", context: "XSCALE:TICKS" },
		{ ticks: xScale.ticks() }
	);

	const xAxisTranslateHnd = (val: number) => {
		return `translate(${xScale(val)}, 0)`;
	};

	const yAxisTranslateHnd = (val: number) => {
		return `translate(0, ${yScale(val)})`;
	};

	const axisLabelFormatHnd = (val: number) => val.toString();

	return (
		<ChartWrapper title="This is a Bar Chart">
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
					// textAnchor="middle"
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
				<Bars
					data={results}
					xScale={xScale}
					xScaleValue={xScaleValue}
					xAxisKey={xAxisValue}
					yScale={yScale}
					yScaleValue={yScaleValue}
					yAxisKey={yAxisValue}
					xStart={0}
					yStart={0}
				/>
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
