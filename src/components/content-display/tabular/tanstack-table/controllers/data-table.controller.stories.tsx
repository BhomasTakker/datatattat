import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./data-table.controller";
import { mock } from "../mock";

const meta: Meta<typeof DataTable> = {
	component: DataTable,
};
export default meta;
type Story = StoryObj<typeof DataTable>;

const data = { data: mock.standings[0].table };

export const DataTableController: Story = {
	args: {
		data,
		useSorting: false,
		useGlobalFilter: false,
		useColumnFilter: false,
		usePagination: false,
		pageSize: 20,
		pageSizeOptions: [5, 10, 20],
		allRowsOption: false,
		backgroundProps: { sx: { maxWidth: "1000px" } },
		tableContainerProps: {
			sx: { maxHeight: "600px" },
		},
		tableProps: {
			stickyHeader: true,
			size: "small",
			"aria-label": "simple table",
		},
		debug: false,
		showCaption: true,
		caption: "Data table Controller example",
	},
};
