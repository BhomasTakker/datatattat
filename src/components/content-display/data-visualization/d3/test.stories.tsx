import type { Meta, StoryObj } from "@storybook/react";
import { TestD3 } from "./test";

const meta: Meta<typeof TestD3> = {
	component: TestD3,
};
export default meta;
type Story = StoryObj<typeof TestD3>;

export const Wrapper: Story = {
	args: {},
};
