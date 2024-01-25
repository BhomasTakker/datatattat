import type { Meta, StoryObj } from "@storybook/react";
import { D3LineChart } from "./line-chart.interface";

const meta: Meta<typeof D3LineChart> = {
	component: D3LineChart,
};
export default meta;
type Story = StoryObj<typeof D3LineChart>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
