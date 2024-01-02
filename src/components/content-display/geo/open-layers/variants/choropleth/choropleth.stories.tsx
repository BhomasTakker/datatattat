import { Meta, StoryObj } from "@storybook/react";
import GeoJSON from "ol/format/GeoJSON";
import { Choropleth } from "./choropleth";
import { ChoroplethMock } from "./mock/choropleth.mock";

const meta: Meta<typeof Choropleth> = {
	component: Choropleth,
};
export default meta;
type Story = StoryObj<typeof Choropleth>;

export const Controller: Story = {
	args: {
		url: "./mock/africa.geojson",
		format: new GeoJSON(),
	},
};
export const Filtered: Story = {
	args: {
		url: "./mock/africa.geojson",
		format: new GeoJSON(),
		colorMap: ChoroplethMock.colorMap,
		filters: ChoroplethMock.filters,
	},
};
export const GraduantColors: Story = {
	args: {
		url: "./mock/africa.geojson",
		format: new GeoJSON(),
		colorMap: ChoroplethMock.colorMap,
	},
};
export const ProportionalColors: Story = {
	args: {
		url: "./mock/africa.geojson",
		format: new GeoJSON(),
		proportionalColor: ChoroplethMock.proportionalColor,
	},
};
