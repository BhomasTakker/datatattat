import { arc } from "d3";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const eyeXOffset = 90;
const eyeYOffset = 80;
const faceR = 200;
const eyeR = 40;
const mouthWidth = 20;
const mouthRadius = 120;

const mouthArc = arc()
	.innerRadius(mouthRadius)
	.outerRadius(mouthRadius + mouthWidth)
	.startAngle(Math.PI / 2)
	.endAngle((Math.PI * 3) / 2);

export const TestD3 = () => {
	return (
		// Okay we could actually just let people create svgs
		// I mean how bad could it be?
		// add logo(s)
		<svg width={width} height={height}>
			<g transform={`translate(${centerX},${centerY})`}>
				<circle
					cx={0}
					cy={0}
					r={faceR}
					fill="yellow"
					stroke="black"
					stroke-width="10"
				></circle>
				<circle cx={0 - eyeXOffset} cy={0 - eyeYOffset} r={eyeR}></circle>
				<circle cx={0 + eyeXOffset} cy={0 - eyeYOffset} r={eyeR}></circle>
				<path d={mouthArc()} />
			</g>
		</svg>
	);
};
