import { geoEqualEarth, geoPath, GeoPermissibleObjects } from "d3";
import { UnknownObject } from "../../types";

type ChoroplethFeatures = {
	features: ({ properties: UnknownObject } & UnknownObject)[];
	colorScale: any;
	colorValue: any;
	rowByFeature: Map<string, UnknownObject>;
	getFeatureIdentifier: (properties: UnknownObject) => string;
};

const projection = geoEqualEarth();
const path = geoPath(projection);

const missingDataColor = "grey";

export const ChoroplethFeatures = ({
	features = [],
	colorScale,
	colorValue,
	rowByFeature,
	getFeatureIdentifier,
}: ChoroplethFeatures) => {
	return (
		<>
			{features.map((feature, i) => {
				// console.log({ feature: feature.Entity });
				// get by identifier / pass a function
				const name = getFeatureIdentifier(feature.properties); //feature.
				const d = rowByFeature.get(name);
				if (!d) {
					// console.log("FFFF", { noname: name });
				}

				return (
					<path
						key={i}
						d={path(feature as unknown as GeoPermissibleObjects)}
						fill={d ? colorScale(colorValue(d)) : missingDataColor}
					/>
				);
			})}
		</>
	);
};
