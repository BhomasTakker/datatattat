// @ts-nocheck / FIX ME
import { ScalePower, geoEqualEarth, geoGraticule, geoPath } from "d3";
import styles from "./geo.module.scss";
import { UnknownObject } from "../../types";

type Geo = {
	// we know this is geo json data
	features: { [key: string]: unknown }[];
	points: { [key: string]: unknown }[];
	sizeScale: number[] & ScalePower<number, number, never>;
	sizeValue: (d: UnknownObject) => unknown;
};

// Probably an array of features - [][]
// show sphere?
// show graticule
// for each featuresArray map features
// Would you really need or want a Path component?
export const Geo = ({
	features = [],
	points = [],
	sizeScale,
	sizeValue,
}: Geo) => {
	const projection = geoEqualEarth();
	const path = geoPath(projection);
	const graticule = geoGraticule();

	return (
		<g>
			{/* background 'layers' - replace sphere with polygons? */}
			<path className={styles.sphere} d={path({ type: "Sphere" })} />
			<path className={styles.graticule} d={path(graticule())} />
			{/* polygons of countries - background perhaps - create features */}
			{features.map((feature, i) => (
				<path key={i} d={path(feature)} className={styles.base} />
			))}
			{/* Points - create points*/}
			{points.map((point, i) => {
				// coords type
				const { lat, lng } = point;

				// coords given as string called Coordinates
				// how the hell to manage this?
				const { Coordinates } = point;
				const coords = (Coordinates as string).split(", ").reverse();

				// const [x, y] = projection([+lng, +lat]);
				const [x, y] = projection(coords);
				// console.log({ point, lat, lng, x, y });

				return (
					<circle
						className={styles.data24}
						key={i}
						r={sizeScale(sizeValue(point))}
						cx={x}
						cy={y}
						opacity={0.4}
					/>
				);
			})}
		</g>
	);
};
