import { Meta, StoryObj } from "@storybook/react";
import GeoJSON from "ol/format/GeoJSON";
import { Point } from "./point";

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
	},
	argTypes: {
		shape: { control: "object", description: "Overwritten description" },
	},
};
