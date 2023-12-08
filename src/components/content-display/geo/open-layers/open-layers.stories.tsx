import type { Meta, StoryObj } from "@storybook/react";
import { OpenLayersMap } from "./open-layers";
import VectorImageLayer from "ol/layer/VectorImage";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { OpenLayersMock } from "./open-layers.mock";
// import geo from "./open-layers.mock.geojson";

const meta: Meta<typeof OpenLayersMap> = {
	component: OpenLayersMap,
};
export default meta;
type Story = StoryObj<typeof OpenLayersMap>;

const midlandsRumble = new VectorImageLayer({
	source: new VectorSource({
		url: "./open-layers.mock.geojson",
		format: new GeoJSON(),
	}),
	visible: true,
});

export const Wrapper: Story = {
	args: {
		features: [],
	},
};
