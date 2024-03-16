import type { Meta, StoryObj } from "@storybook/react";
import { D3HistogramChart } from "./histogram.interface";

const meta: Meta<typeof D3HistogramChart> = {
	component: D3HistogramChart,
};
export default meta;
type Story = StoryObj<typeof D3HistogramChart>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
