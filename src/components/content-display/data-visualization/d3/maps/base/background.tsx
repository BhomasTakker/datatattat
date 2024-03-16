import { geoEqualEarth, geoPath, geoGraticule, GeoProjection } from "d3";
import styles from "./background.module.scss";

// const projection = geoEqualEarth();
// const path = geoPath(projection);
const graticule = geoGraticule();

type MapBackground = {
	projection: GeoProjection;
	includeGraticule?: boolean;
	includeBackground?: boolean;
	type: string;
};

// type sphere
// isGraticule = true
// projection = equalEarth
export const MapBackground = ({
	projection,
	includeGraticule,
	includeBackground,
	type,
}: MapBackground) => {
	const path = geoPath(projection);
	return (
		<>
			{includeBackground && (
				<path className={styles.sphere} d={path({ type })} />
			)}
			{includeGraticule && (
				<path className={styles.graticule} d={path(graticule())} />
			)}
		</>
	);
};
