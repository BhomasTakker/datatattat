import type { Meta, StoryObj } from "@storybook/react";
import { LOREM_5_S } from "mockData/text/lorem";
import { Time } from "./Time";

const meta: Meta<typeof Time> = {
	component: Time,
};
export default meta;
type Story = StoryObj<typeof Time>;

export const Standard: Story = {
	args: {
		time: new Date("Tue, 25 Oct 2023 13:30:00 +0100"),
		variant: "age",
	},
};
