import { Meta, StoryObj } from "@storybook/react";
import GeoJSON from "ol/format/GeoJSON";
import { LineMap } from "./line-map";
import { LineMapMock } from "./mock/line.mock";

const meta: Meta<typeof LineMap> = {
	component: LineMap,
};
export default meta;
type Story = StoryObj<typeof LineMap>;

export const Controller: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
	},
};
export const Filtered: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		colorMap: LineMapMock.colorMap,
		filters: LineMapMock.filters,
	},
};
export const GraduantColors: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		colorMap: LineMapMock.colorMap,
	},
};
export const ProportionalColors: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		proportionalColor: LineMapMock.proportionalColor,
	},
};
export const GraduantSize: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		sizeMap: LineMapMock.sizeMap,
	},
};
export const ProportionalSize: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		proportionalSize: LineMapMock.proportionalSize,
	},
};
export const ProportionalSizeAndColor: Story = {
	args: {
		url: "./mock/rivers.geojson",
		format: new GeoJSON(),
		proportionalSize: LineMapMock.proportionalSize,
		proportionalColor: LineMapMock.proportionalColor,
	},
};
