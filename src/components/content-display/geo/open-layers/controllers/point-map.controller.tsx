import { Choropleth } from "../variants/choropleth/choropleth";
import { Heatmap } from "../variants/heatmap/heatmap";
import { LineMap } from "../variants/line/line-map";
import { Point } from "../variants/point/point";
import { OLMapVariant } from "./config/ol-map.config";
import { log } from "@/src/lib/logger";
import { CreateViewOptions } from "../view/types";
import { createPoints } from "../features/points";
import { createOpenLayersViewOptions } from "../view/open-layers.view";

type GISData = any; // {coordinates: [number, number], any}

type MapType = Heatmap | Point | LineMap | Choropleth;
export type PointMapControllerProps = {
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

export const PointMapController = ({
	variant,
	data,
	...args
}: PointMapControllerProps) => {
	// Why called twice? - not react dev mode
	log({ code: "OL:MAP:0001", context: "EDIT:INPUT:DATA" }, { data, args });

	// Move me and neaten up
	// We can create a withComponent or just call wrapper component
	// We would also want some thing for title etc
	// so <AComponent><MapController></MapController></AComponent>
	const { sourceOptions, longitude = 0, latitude = 0 } = args || {};
	const { features } = data || {};

	// Need a much better way of doing this
	const mapFeatures = createPoints(features);

	// Probably the better way but need a c-shift
	// bigger change
	// point transform becomes a problem - need pprojection set or something?
	// order is important
	// const view = createOpenLayersView({center, zoom, maxZoom, minZoom, projection});

	const viewOptions = createOpenLayersViewOptions({
		...args,
		// could just take long lat? / we're making a rod I think!
		center: [longitude, latitude] as [number, number],
	});
	// Pass object in / use required
	// const view = createView(args);

	const newSourceOptions = { ...sourceOptions, features: mapFeatures };

	// shape?: CreateShape; // default point
	// filters: Filter[] | undefined;
	// shapeMap: ShapeMap | undefined;
	// colorMap: ColorMap | undefined;
	// sizeMap: SizeMap | undefined;
	// iconMap: IconMap | undefined;
	// emojiMap: EmojiMap | undefined;
	// proportionalColor: ProprtionalColor | undefined;
	// proportionalSize: ProportionalSize | undefined;

	return (
		<Point
			{...(args as Point)}
			viewOptions={viewOptions}
			sourceOptions={newSourceOptions}
		/>
	);
};
