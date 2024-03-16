import { Text } from "../text/text";
import styles from "./axis.module.scss";

type D3Axis = {
	axis: "x" | "y";
	x1?: number;
	x2?: number;
	y1?: number;
	y2?: number;
	xLabel?: number;
	yLabel?: number;
	xLabelOffset?: string;
	yLabelOffset?: string;
	labelStyle?: string;

	translate: (val: unknown) => string;
	ticks: unknown[];
	labelFormat: (val: unknown) => string;
};

export const D3Axis = ({
	axis,
	ticks,
	x1 = 0,
	x2 = 0,
	y1 = 0,
	y2 = 0,
	translate,
	labelFormat,
	xLabel = 0,
	yLabel = 0,
	xLabelOffset = "",
	yLabelOffset = "",
	labelStyle = "",
}: D3Axis) => {
	return (
		<>
			{ticks.map((val, i) => {
				return (
					<g
						className={styles.tick}
						key={val as string}
						// pass in a function to return translate on given val
						transform={translate(val)}
					>
						{/* need line styles class */}
						<line className={styles.line} x1={x1} x2={x2} y1={y1} y2={y2} />

						<Text
							className={`${styles.label} ${
								styles[`axis-${axis}`]
							} ${labelStyle}`}
							// pass in a text / label formatter
							text={labelFormat(val)}
							variant="tick"
							x={xLabel}
							y={yLabel}
							dx={xLabelOffset}
							dy={yLabelOffset}
							// style={{ textAnchor: "middle" }}
						/>
					</g>
				);
			})}
		</>
	);
};
