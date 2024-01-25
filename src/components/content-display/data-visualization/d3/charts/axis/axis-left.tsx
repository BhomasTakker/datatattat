import { ScaleBand } from "d3";
import styles from "./axis.module.scss";
import { Text } from "../text/text";

type AxisLeft = {
	yScale: ScaleBand<string>;
	textProps?: Omit<Text, "variant" | "text">;
};

export const AxisLeft = ({ yScale, textProps = {} }: AxisLeft) => {
	const domain = yScale.domain();
	if (!domain) return <></>;

	return (
		<>
			{domain.map((val) => {
				return (
					// can use transform instead of x1, 2,
					// transform={`translate(${xScale(val)}, ${0})`}
					// x,y,1,2 defaults to 0
					<g key={val} className={styles.tick}>
						<Text
							text={val}
							variant="tick"
							{...textProps}
							// magic numbers
							// x={-10}
							// dy={".3rem"}
							// For Bars
							y={(yScale(val) || 0) + +textProps.y}
							// style={{ textAnchor: "end" }}
						/>
					</g>
				);
			})}
		</>
	);
};
