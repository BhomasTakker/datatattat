import { log } from "@/src/lib/logger";
import { extent, scaleLinear } from "d3";
import { AxisBottom } from "../../axis/axis-bottom";
import styles from "./scatter-chart.module.scss";
import { Text } from "../../text/text";
import { Points } from "../../marks/points";
import { LinearAxisLeft } from "../../axis/linear-axis-left";
import { SVGChartWrapper } from "../../ui/svg-chart";
import { UnknownObject } from "../../../types";

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
	xAxisLabel = "",
	yAxisLabel = "",
}: D3ScatterChart) => {
	// pass in
	const width = 900;
	const height = 600;
	const margin = { top: 20, right: 30, bottom: 50, left: 100 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;
	// const xAxisValue = "sepal_length";
	// const yAxisValue = "sepal_width";

	// const xAxisLabel = "Sepal Length";
	// const yAxisLabel = "Sepal Width";

	const { results } = data;

	// We MAY need to parse values
	const parsed = results;

	// need format depending
	const xScaleValue = (d: UnknownObject) => d[xAxisValue] as number;
	const yScaleValue = (d: UnknownObject) => d[yAxisValue] as number;

	// axis type - static, linear, time
	// this and axis are dependant upon each other
	// create a function to return correct axis and scale - no
	// createScale(type: 'linear', direction: 'horizontal' | 'vertical')
	// You may want it reversed
	const xScale = scaleLinear()
		// @ts-ignore
		// .domain([min(parsed, xValue), max(parsed, xValue)])
		.domain(extent(parsed, xScaleValue))
		.range([0, innerWidth])
		.nice();

	const yScale = scaleLinear()
		// @ts-ignore
		.domain(extent(parsed, yScaleValue))
		.range([0, innerHeight]);

	log({ code: "0010:CSV:DATA", context: "Component data" }, { data });

	return (
		<SVGChartWrapper
			title="This is a Scatter Chart of the Iris Dataset"
			width={width}
			height={height}
			margin={margin}
		>
			{/* type Linear or set */}
			<AxisBottom xScale={xScale} innerHeight={innerHeight} />
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
				className={styles.axisLabel}
				x={innerWidth / 2}
				textAnchor="middle"
				y={innerHeight + 45}
			/>
			<Text
				text={yAxisLabel}
				variant="label"
				className={styles.axisLabel}
				// x={0 + -50}
				textAnchor="middle"
				// y={innerHeight / 2}
				transform={`translate(${-50}, ${innerHeight / 2}) rotate(-90) `}
			/>
			<Points
				data={parsed}
				xScale={xScale}
				xScaleValue={xScaleValue}
				xAxisKey={xAxisValue}
				yScale={yScale}
				yScaleValue={yScaleValue}
				yAxisKey={yAxisValue}
				circleRadius={10}
			/>
		</SVGChartWrapper>
	);
};
