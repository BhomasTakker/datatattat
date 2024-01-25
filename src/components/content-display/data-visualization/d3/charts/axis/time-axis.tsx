import { ScaleLinear, ScaleTime } from "d3";
import styles from "./axis.module.scss";
import { Text } from "../text/text";

type TimeAxis = {
	scale: Date[] & ScaleTime<number, number, never>;
	innerHeight: number;
	textProps?: Omit<Text, "variant" | "text">;
	formatter?: (str: Date) => string;
};

export const TimeAxis = ({
	scale,
	innerHeight,
	formatter = (str) => str.toString(),
}: TimeAxis) => {
	const ticks = scale.ticks();
	if (!ticks) return <></>;

	return (
		<>
			{ticks.map((val, i) => {
				return (
					// can use transform instead of x1, 2,
					// transform={`translate(${xScale(val)}, ${0})`}
					// x,y,1,2 defaults to 0

					// Can get colours from
					// https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf
					<g
						className={styles.tick}
						key={i}
						transform={`translate(${scale(val)}, ${0})`}
					>
						<line y2={innerHeight} />
						<Text
							text={formatter(val)}
							variant="tick"
							y={innerHeight}
							dy={"1rem"}
							style={{ textAnchor: "middle" }}
						/>
					</g>
				);
			})}
		</>
	);
};
