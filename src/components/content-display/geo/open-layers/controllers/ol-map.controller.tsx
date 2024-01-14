import { useEffect, useState } from "react";
import { Choropleth } from "../variants/choropleth/choropleth";
import { Heatmap } from "../variants/heatmap/heatmap";
import { LineMap } from "../variants/line/line-map";
import { Point } from "../variants/point/point";
import FeaturePoint from "ol/geom/Point";
import { OLMapVariant } from "./config/ol-map.config";
import { Feature } from "ol";
import { transform } from "ol/proj";

type GISData = any; // {coordinates: [number, number], any}

type MapType = Heatmap | Point | LineMap | Choropleth;
export type OLMapControllerProps = {
	variant: OLMapVariant;
	data: GISData;
} & MapType;

// Clusters
// https://openlayers.org/en/latest/examples/cluster.html

const createFeatures = (features) => {
	if (!features || !features.length) {
		return undefined;
	}
	return features.map((feature) => {
		const { coordinates, ...rest } = feature;
		const coords = [...coordinates];
		// cannot reverse because coordinate is not an array - it is an ol.Coordinate
		const reversed = coords.reverse();

		// console.log({ coords });
		// console.log({ reversed });
		// console.log({ reverse: coords.reverse() });
		// console.log({ wtf: typeof coords });

		return new Feature({
			geometry: new FeaturePoint(
				// this needs taken or understanding
				transform([coordinates[1], coordinates[0]], "EPSG:4326", "EPSG:3857")
			),
			...rest,
		});
	});
};

export const OLMapController = ({
	variant,
	data,
	...args
}: OLMapControllerProps) => {
	const [element, setElement] = useState(<></>);

	// Move me and neaten up
	// We can create a withComponent or just call wrapper component
	const { sourceOptions } = args;
	// console.log({ data });
	const { features } = data || {};
	// console.log({ features });

	const mapFeatures = createFeatures(features);

	// console.log({ mapFeatures });

	const newSourceOptions = { ...sourceOptions, features: mapFeatures };

	useEffect(() => {
		switch (variant) {
			case "heatmap":
				setElement(<Heatmap {...(args as Heatmap)} />);
			case "choropleth":
				setElement(<Choropleth {...(args as Choropleth)} />);
			case "line":
				setElement(<LineMap {...(args as LineMap)} />);
			case "point":
				setElement(
					<Point {...(args as Point)} sourceOptions={newSourceOptions} />
				);
		}
		// args here is looping...
	}, []);
	// Dot density - maybe not something we can / or should do programmatically - at least now

	// Isopleth Map - for continuous data - dunno man looks hard!

	// return <OpenLayersMap {...config} />;
	return element;
};
