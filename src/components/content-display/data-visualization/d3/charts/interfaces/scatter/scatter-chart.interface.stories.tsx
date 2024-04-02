// @ts-nocheck / FIX ME
import type { Meta, StoryObj } from "@storybook/react";
import { D3ScatterChart } from "./scatter-chart.interface";

const meta: Meta<typeof D3ScatterChart> = {
	component: D3ScatterChart,
};
export default meta;
type Story = StoryObj<typeof D3ScatterChart>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
