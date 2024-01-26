import { geoEqualEarth, geoGraticule, geoPath } from "d3";
import styles from "./geo.module.scss";

type Geo = {
	// we know this is geo json data
	features: { [key: string]: unknown }[];
};

const projection = geoEqualEarth();
const path = geoPath(projection);
const graticule = geoGraticule();

// Probably an array of features - [][]
// show sphere?
// show graticule
// for each featuresArray map features
// Would you really need or want a Path component?
export const Geo = ({ features }: Geo) => {
	return (
		<g>
			<path className={styles.sphere} d={path({ type: "Sphere" })} />
			<path className={styles.graticule} d={path(graticule())} />
			{features.map((feature, i) => (
				<path
					key={i}
					d={path(feature)}
					className={`${styles.data24} ${styles.stroke12}`}
				/>
			))}
		</g>
	);
};
