import { Meta, StoryObj } from "@storybook/react";
import GeoJSON from "ol/format/GeoJSON";
import { Point } from "./point";
import { PointMock } from "./mock/point.mock";

const meta: Meta<typeof Point> = {
	component: Point,
};
export default meta;
type Story = StoryObj<typeof Point>;

// shapeMap = [],
// colorMap = [],
// sizeMap = [],
// ...rest
export const PointMap: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			size: 25,
			fillColor: [255, 0, 0, 0.3],
			strokeColor: [255, 0, 0, 0],
		},
		// colorMap: PointMock.colorMap,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const GraduatingColor: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			size: 25,
			// fillColor: [255, 0, 0, 0.3],
			// strokeColor: [255, 0, 0, 0],
		},
		colorMap: PointMock.colorMap,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const GraduatingSymbol: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			size: 25,
			// fillColor: [255, 0, 0, 0.3],
			// strokeColor: [255, 0, 0, 0],
		},
		sizeMap: PointMock.sizeMap,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const ProportionalColor: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			size: 25,
		},
		proportionalColor: PointMock.proportionalColor,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const ProportionalSize: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			fillColor: [255, 0, 0, 0.3],
		},
		proportionalSize: PointMock.proportionalSize,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const IconPoints: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		shape: {
			type: "Circle",
			fillColor: [255, 0, 0, 0.3],
		},
		proportionalSize: PointMock.proportionalSize,
		iconMap: PointMock.iconMap,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};

export const EmojiPoints: Story = {
	args: {
		url: "./mock/tanzania.geojson",
		format: new GeoJSON(),
		// create this properly so we can easily change
		// shape: {
		// 	type: "Circle",
		// },
		// proportionalSize: PointMock.proportionalSize,
		emojiMap: PointMock.emojiMap,
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};
