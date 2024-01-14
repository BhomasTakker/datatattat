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
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
	},
};
export const Filtered: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		colorMap: LineMapMock.colorMap,
		filters: LineMapMock.filters,
	},
};
export const GraduantColors: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		colorMap: LineMapMock.colorMap,
	},
};
export const ProportionalColors: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		proportionalColor: LineMapMock.proportionalColor,
	},
};
export const GraduantSize: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		sizeMap: LineMapMock.sizeMap,
	},
};
export const ProportionalSize: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		proportionalSize: LineMapMock.proportionalSize,
	},
};
export const ProportionalSizeAndColor: Story = {
	args: {
		sourceOptions: {
			url: "./mock/rivers.geojson",
			format: new GeoJSON(),
		},
		proportionalSize: LineMapMock.proportionalSize,
		proportionalColor: LineMapMock.proportionalColor,
	},
};
