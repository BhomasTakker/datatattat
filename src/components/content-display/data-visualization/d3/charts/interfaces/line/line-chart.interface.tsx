import { log } from "@/src/lib/logger";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { extent, format, scaleLinear, scaleTime, timeFormat } from "d3";
import { TimeAxis } from "../../axis/time-axis";
import { LinearAxisLeft } from "../../axis/linear-axis-left";
import { Text } from "../../text/text";
import { Line } from "../../marks/line";
import { UnknownObject } from "../../../types";
import { Points } from "../../marks/points";

type Data = {
	results: UnknownObject[];
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

export type D3LineChart = { data: Data };

export const D3LineChart = ({ data }: D3LineChart) => {
	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;
	const xAxis = "timestamp";
	const yAxis = "temperature";

	const xAxisLabel = "Day";
	const yAxisLabel = "Temparature";

	// We will need parse for values surely
	// parse as number, string, date?
	// convert - or expect it done by use

	// how do we specify
	// number, text, date, etc?
	const xScaleValue = (d: UnknownObject) => new Date(d[xAxis] as string);
	const yScaleValue = (d: UnknownObject) => d[yAxis] as number;

	// okay this is good / returns just the day
	const xAxisTickFormat = timeFormat("%a");

	const { results } = data;

	const xScale = scaleTime()
		// @ts-ignore
		// .domain([min(parsed, xValue), max(parsed, xValue)])
		.domain(extent(results, xScaleValue))
		.range([0, innerWidth])
		.nice();

	const yScale = scaleLinear()
		// @ts-ignore
		.domain(extent(results, yScaleValue))
		.range([innerHeight, 0])
		.nice();

	log({ code: "0001:D3:LINE:CHART", context: "DATA" }, { data });
	return (
		<SVGChartWrapper
			title="This is a Line Chart"
			width={width}
			height={height}
			margin={margin}
		>
			<TimeAxis
				scale={xScale}
				innerHeight={innerHeight}
				formatter={xAxisTickFormat}
			/>
			{/* <AxisBottom xScale={xScale} innerHeight={innerHeight} /> */}
			<LinearAxisLeft
				innerWidth={innerWidth}
				yScale={yScale}
				textProps={{
					x: -10,
					dy: ".3rem",
					// For Bars
					y: 0,
					style: { textAnchor: "end" },
				}}
			/>
			<Text
				text={xAxisLabel}
				variant="label"
				x={innerWidth / 2}
				textAnchor="middle"
				y={innerHeight + 45}
			/>
			<Text
				text={yAxisLabel}
				variant="label"
				// x={0 + -50}
				textAnchor="middle"
				// y={innerHeight / 2}
				transform={`translate(${-50}, ${innerHeight / 2}) rotate(-90) `}
			/>
			<Line
				data={results}
				xScale={xScale}
				xScaleValue={xScaleValue}
				xAxisKey={xAxis}
				yScale={yScale}
				yScaleValue={yScaleValue}
				yAxisKey={yAxis}
				circleRadius={3}
			/>
			{/* show points? */}
			<Points
				data={results}
				xScale={xScale}
				xScaleValue={xScaleValue}
				xAxisKey={xAxis}
				yScale={yScale}
				yScaleValue={yScaleValue}
				yAxisKey={yAxis}
				circleRadius={3}
				// circleProps={circleProps}
			/>
		</SVGChartWrapper>
	);
};
