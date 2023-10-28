import type { Meta, StoryObj } from "@storybook/react";

import { DetailsComponent } from "./details";
import { details1 } from "./details.mock.data";

const meta: Meta<typeof DetailsComponent> = {
	component: DetailsComponent,
};
export default meta;
type Story = StoryObj<typeof DetailsComponent>;

export const Standard: Story = {
	args: {
		details: details1,
		variant: "space-between",
		showPublished: false,
		showCategories: false,
		showpublishers: false,
		showAuthors: false,
	},
};
