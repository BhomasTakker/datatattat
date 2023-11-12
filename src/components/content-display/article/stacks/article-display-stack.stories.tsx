import type { Meta, StoryObj } from "@storybook/react";
import { ArticleStackMock } from "./article-stack.mock";
import { ArticleDisplayStack } from "./article-display-stack.wrapper";

const meta: Meta<typeof ArticleDisplayStack> = {
	component: ArticleDisplayStack,
};

export default meta;
type Story = StoryObj<typeof ArticleDisplayStack>;

const { props } = ArticleStackMock;

export const ArticleDisplay: Story = {
	args: {
		data: props.data,
		variant: "column",
		limit: 5,
	},
};
