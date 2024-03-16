import type { Meta, StoryObj } from "@storybook/react";
import { D3ChoroplethMap } from "./choropleth-map";

const meta: Meta<typeof D3ChoroplethMap> = {
	component: D3ChoroplethMap,
};
export default meta;
type Story = StoryObj<typeof D3ChoroplethMap>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
