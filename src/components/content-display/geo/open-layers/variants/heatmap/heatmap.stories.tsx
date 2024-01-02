import { Meta, StoryObj } from "@storybook/react";
import GeoJSON from "ol/format/GeoJSON";
import { Heatmap } from "./heatmap";

const meta: Meta<typeof Heatmap> = {
	component: Heatmap,
};
export default meta;
type Story = StoryObj<typeof Heatmap>;

export const Controller: Story = {
	args: {
		radius: 15,
		blur: 15,
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		weight: "score",
	},
};
