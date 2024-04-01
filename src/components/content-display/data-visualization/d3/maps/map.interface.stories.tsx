// @ts-nocheck / FIX ME
import type { Meta, StoryObj } from "@storybook/react";
import { D3Map } from "./map.interface";

const meta: Meta<typeof D3Map> = {
	component: D3Map,
};
export default meta;
type Story = StoryObj<typeof D3Map>;

export const Wrapper: Story = {
	args: {
		data: [],
	},
};
