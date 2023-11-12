import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardMock } from "./article-card.mock";
import { Article1 } from "../mock/Articles.mock";
import { DisplayCard } from "./display-card.controller";

const meta: Meta<typeof DisplayCard> = {
	component: DisplayCard,
};
export default meta;
type Story = StoryObj<typeof DisplayCard>;

export const DisplayCardStory: Story = {
	args: {
		item: Article1,
		variant: "compact",
	},
};
