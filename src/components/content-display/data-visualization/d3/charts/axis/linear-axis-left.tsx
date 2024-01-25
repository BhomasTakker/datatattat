import { ScaleLinear } from "d3";
import styles from "./axis.module.scss";
import { Text } from "../text/text";

type LinearAxisLeft = {
	yScale: number[] & ScaleLinear<number, number, never>;
	innerWidth: number;
	textProps?: Omit<Text, "variant" | "text">;
};

///////////////////////////////////////////////////////////////////
// pass scale and this ALMOST could be x or y
// pesky positioning
// pass a function taking value as a parameter and call that or 0
///////////////////////////////////////////////////////////////////
export const LinearAxisLeft = ({
	yScale,
	textProps = {},
	innerWidth,
}: LinearAxisLeft) => {
	// pass this then ticks and domain can be dynamic
	const ticks = yScale.ticks();
	if (!ticks) return <></>;

	return (
		<>
			{ticks.map((val) => {
				return (
					// can use transform instead of x1, 2,
					// transform={`translate(${xScale(val)}, ${0})`}
					// x,y,1,2 defaults to 0
					<g
						key={val}
						className={styles.tick}
						transform={`translate(0, ${yScale(val)})`}
					>
						<line x2={innerWidth} />
						<Text text={val.toString()} variant="tick" {...textProps} />
					</g>
				);
			})}
		</>
	);
};
