import type { Meta, StoryObj } from "@storybook/react";
import { D3BubbleMap } from "./bubble-map";

const meta: Meta<typeof D3BubbleMap> = {
	component: D3BubbleMap,
};
export default meta;
type Story = StoryObj<typeof D3BubbleMap>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
