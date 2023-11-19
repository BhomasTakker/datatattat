import type { Meta, StoryObj } from "@storybook/react";
import { Article1 } from "../mock/Articles.mock";
import { ArticleDisplayItemController } from "./display-item.controller";

const wrapper = (Story: any) => (
	<div style={{ height: "100vh" }}>
		<Story />
	</div>
);

const meta: Meta<typeof ArticleDisplayItemController> = {
	component: ArticleDisplayItemController,
	decorators: [wrapper],
};

export default meta;
type Story = StoryObj<typeof ArticleDisplayItemController>;

export const DisplayItemController: Story = {
	args: {
		item: Article1,
		variant: "full-banner",
	},
};
