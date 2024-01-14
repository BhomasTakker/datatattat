import { useEffect, useState } from "react";
import { Choropleth } from "../variants/choropleth/choropleth";
import { Heatmap } from "../variants/heatmap/heatmap";
import { LineMap } from "../variants/line/line-map";
import { Point } from "../variants/point/point";
import FeaturePoint from "ol/geom/Point";
import { OLMapVariant } from "./config/ol-map.config";
import { Feature } from "ol";
import { transform } from "ol/proj";
import { log } from "@/src/lib/logger";
import { CreateViewOptions } from "../view/types";

type GISData = any; // {coordinates: [number, number], any}

type MapType = Heatmap | Point | LineMap | Choropleth;
export type OLMapControllerProps = {
	variant: OLMapVariant;
	data: GISData;

	// View Options / prob elsewheres
	latitude: number;
	longitude: number;
	zoom: number;
	maxZoom: number;
	minZoom: number;
	projection: string;
} & MapType &
	// very incorrect for our uses
	CreateViewOptions;

// Clusters
// https://openlayers.org/en/latest/examples/cluster.html

// Create something properly
const createFeatures = (features) => {
	if (!features || !features.length) {
		return undefined;
	}
	return features.map((feature) => {
		const { coordinates, ...rest } = feature;
		// const coords = [...coordinates];
		// cannot reverse because coordinate is not an array - it is an ol.Coordinate
		// const reversed = coords.reverse();

		return new Feature({
			geometry: new FeaturePoint(
				// this needs taken or understanding
				transform([coordinates[1], coordinates[0]], "EPSG:4326", "EPSG:3857")
			),
			...rest,
		});
	});
};

const createView = () => {};

export const OLMapController = ({
	variant,
	data,
	...args
}: OLMapControllerProps) => {
	const [element, setElement] = useState(<></>);

	// Why called twice? - not react dev mode
	log({ code: "OL:MAP:0001", context: "EDIT:INPUT:DATA" }, { data, args });

	// Move me and neaten up
	// We can create a withComponent or just call wrapper component
	// We would also want some thing for title etc
	// so <AComponent><MapController></MapController></AComponent>
	const {
		sourceOptions,
		longitude,
		latitude,
		zoom,
		maxZoom,
		minZoom,
		projection,
	} = args || {};
	const { features } = data || {};

	const mapFeatures = createFeatures(features);

	// Probably the better way but need a c-shift
	// bigger change
	// const view = createOpenLayersView({center, zoom, maxZoom, minZoom, projection});

	// there's a better place/way to do this
	// if we wrap in a component/with etc we can create view, etc in a set place
	const viewOptions = {
		center: [longitude, latitude] as [number, number],
		zoom,
		maxZoom,
		minZoom,
		projection,
	};

	const newSourceOptions = { ...sourceOptions, features: mapFeatures };

	useEffect(() => {
		switch (variant) {
			case "heatmap":
				setElement(
					<Heatmap {...(args as Heatmap)} viewOptions={viewOptions} />
				);
			case "choropleth":
				setElement(
					<Choropleth {...(args as Choropleth)} viewOptions={viewOptions} />
				);
			case "line":
				setElement(
					<LineMap {...(args as LineMap)} viewOptions={viewOptions} />
				);
			case "point":
				setElement(
					<Point
						{...(args as Point)}
						viewOptions={viewOptions}
						sourceOptions={newSourceOptions}
					/>
				);
		}
		// args here is looping...
	}, []);
	// Dot density - maybe not something we can / or should do programmatically - at least now

	// Isopleth Map - for continuous data - dunno man looks hard!

	// return <OpenLayersMap {...config} />;
	return element;
};
