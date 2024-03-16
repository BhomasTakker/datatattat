import { ScaleLinear } from "d3";

// take in circle props
type Points = {
	data: { [key: string]: unknown }[];
	// linear, band, or tiime
	xScale: number[] & ScaleLinear<number, number, never>;
	yScale: number[] & ScaleLinear<number, number, never>;
	yAxisKey: string;
	xAxisKey: string;

	innerHeight: number;
};

// Convert to / use vertical bars
export const Barss = ({
	data,
	xScale,
	yScale,
	xAxisKey,
	innerHeight,
}: Points) => {
	return (
		<>
			{/* Offset this to a function */}
			{data.map((d, i) => (
				<rect
					// className={styles[`data${rando}`]}
					key={i}
					// wouldn't neccessarily start at 0
					// this is from bin - not okay xScale Value or something
					x={xScale(d.x0)}
					// yAxis scale value
					y={yScale(d.totalDeadAndMissing)}
					//
					width={xScale(d.x1) - xScale(d.x0)}
					height={innerHeight - yScale(d.totalDeadAndMissing)}
					// use to set class
					// fill={setColor(d)}
					// {...circleProps}
				>
					{/* variable */}
					<title>{d[xAxisKey] as string}</title>
				</rect>
			))}
		</>
	);
};
