import type { Meta, StoryObj } from "@storybook/react";
import { D3BarChart } from "./bar-chart.interface";

const meta: Meta<typeof D3BarChart> = {
	component: D3BarChart,
};
export default meta;
type Story = StoryObj<typeof D3BarChart>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
