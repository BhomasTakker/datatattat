import { GeoPermissibleObjects, geoEqualEarth, geoPath } from "d3";
import { UnknownObject } from "../../types";
import styles from "./features.module.scss";

type FeaturesProps = {
	features: UnknownObject[];
};

// We need this sorted elsewhere - prop or context
const projection = geoEqualEarth();
const path = geoPath(projection);

export const Features = ({ features = [] }: FeaturesProps) => {
	return (
		<>
			{features.map((feature, i) => (
				<path
					key={i}
					d={path(feature as unknown as GeoPermissibleObjects)}
					className={styles.base}
				/>
			))}
		</>
	);
};
