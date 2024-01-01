import { Meta, StoryObj } from "@storybook/react";
import { OLMapController } from "./ol-map.controller";
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";

const meta: Meta<typeof OLMapController> = {
	component: OLMapController,
};
export default meta;
type Story = StoryObj<typeof OLMapController>;

// Can do
// const weight = function (feature) {
// 	// 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
// 	// standards-violating <magnitude> tag in each Placemark.  We extract it from
// 	// the Placemark's name instead.
// 	const name = feature.get("name");
// 	const magnitude = parseFloat(name.substr(2));
// 	return magnitude - 5;
// };

export const Controller: Story = {
	args: {
		variant: "heatmap",
		radius: 15,
		blur: 15,
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		weight: "score",
	},
};
