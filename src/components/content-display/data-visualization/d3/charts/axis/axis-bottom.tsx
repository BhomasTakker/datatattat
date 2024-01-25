import { ScaleLinear } from "d3";
import styles from "./axis.module.scss";
import { Text } from "../text/text";

// We need linear, time, and step bottom and left and poss right?
type AxisBottom = {
	xScale: number[] & ScaleLinear<number, number, never>;
	innerHeight: number;
	textProps?: Omit<Text, "variant" | "text">;
};

export const AxisBottom = ({ xScale, innerHeight }: AxisBottom) => {
	const ticks = xScale.ticks();
	if (!ticks) return <></>;

	return (
		<>
			{ticks.map((val) => {
				return (
					// can use transform instead of x1, 2,
					// transform={`translate(${xScale(val)}, ${0})`}
					// x,y,1,2 defaults to 0

					// Can get colours from
					// https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf
					<g
						className={styles.tick}
						key={val}
						transform={`translate(${xScale(val)}, ${0})`}
					>
						<line y2={innerHeight} />
						<Text
							text={val.toString()}
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
