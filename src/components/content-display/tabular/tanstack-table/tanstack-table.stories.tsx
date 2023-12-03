import type { Meta, StoryObj } from "@storybook/react";
import { TanStackTable } from "./tanstack-table";
import { mock } from "./mock";
import { destructureChildObjects } from "@/src/utils/object";

const meta: Meta<typeof TanStackTable> = {
	component: TanStackTable,
};
export default meta;
type Story = StoryObj<typeof TanStackTable>;

// Would we do this at this level?
const list = mock.standings[0].table;
const formattedList = list.map((item) => ({
	...destructureChildObjects(item),
}));

// Probably a combination of formatting returned data by default
// And user control
// i.e. head: 'Goal Difference'
// accessor: 'goalDifference
// Probably requires shapes of api etc
// Could be props
// should be able to provide via edit
// each column has an interface
// { characterLimit: 50, visible: true, selector: **, abbreviation: 'Man City', align: 'left|right|center' }
const shape = { ...formattedList[0] };
const columns = Object.keys(shape).map((key) => ({
	// for team i.e. as an object we need to drill into it
	// which requires either reformatting the data at source / here
	// filtering the data at source or here
	// OR specifying the accessor key as a prop

	accessorKey: key,
	header: key, // string or component
	// we need to amend team
	// cell: () => {}
	// This can happen
	// filterFn: 'fuzzy',
	// sortingFn: fuzzySort,
}));

export const Wrapper: Story = {
	args: {
		data: formattedList,
		columns: columns,
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
		showCaption: false,
		caption: "",
	},
};
