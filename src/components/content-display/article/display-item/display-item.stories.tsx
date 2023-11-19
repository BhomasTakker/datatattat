import type { Meta, StoryObj } from "@storybook/react";
import { Article1 } from "../mock/Articles.mock";
import { ArticleDisplayItem } from "./display-item";

const meta: Meta<typeof ArticleDisplayItem> = {
	component: ArticleDisplayItem,
};
export default meta;
type Story = StoryObj<typeof ArticleDisplayItem>;

export const DisplayItem: Story = {
	args: {
		item: Article1,
		width: "100%",
		height: "400px",
	},
};
