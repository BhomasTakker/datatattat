import type { Meta, StoryObj } from "@storybook/react";
import { Description } from "./description";
import { LOREM_5_S } from "mockData/text/lorem";

const meta: Meta<typeof Description> = {
	component: Description,
};
export default meta;
type Story = StoryObj<typeof Description>;

export const Standard: Story = {
	args: {
		description: LOREM_5_S,
		maxLines: 3,
		maxWidth: "100%",
		minWidth: "400px",
	},
};
