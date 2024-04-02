// @ts-nocheck / FIX ME
import { GeoProjection, ScalePower, geoEqualEarth } from "d3";
import { UnknownObject } from "../../types";
import styles from "./points.module.scss";

type PointsProps = {
	points: UnknownObject[];
	sizeScale: number[] & ScalePower<number, number, never>;
	projection: GeoProjection;
	sizeValue: (d: UnknownObject) => number;
	getCoords: (d: UnknownObject) => { lat: number; lng: number };
};

export const Points = ({
	points = [],
	sizeScale,
	sizeValue,
	getCoords,
	projection,
}: PointsProps) => {
	return (
		<>
			{points.map((point, i) => {
				// const { lat, lng } = point;
				// const { Coordinates } = point;
				// const coords = (Coordinates as string).split(", ").reverse();
				const { lat, lng } = getCoords(point);
				// const [x, y] = projection(coords);
				const [x, y] = projection([lat, lng]);

				return (
					<circle
						className={styles.data24}
						key={i}
						r={sizeScale(sizeValue(point))}
						cx={x}
						cy={y}
						// should be set or default
						// color should be set or default
						opacity={0.4}
					/>
				);
			})}
		</>
	);
};
