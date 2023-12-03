import { TanStackTableProps } from "../tanstack-table";

export const Basic: Omit<TanStackTableProps, "data" | "columns"> = {
	useSorting: false,
	useGlobalFilter: false,
	useColumnFilter: false,
	usePagination: false,
	pageSize: 20,
	pageSizeOptions: [5, 10, 20],
	allRowsOption: false,
	backgroundProps: { sx: { width: "100%" } },
	tableContainerProps: {
		sx: { height: "100%" },
	},
	tableProps: {
		stickyHeader: true,
		size: "small",
		"aria-label": "simple table",
	},
	debug: false,
	showCaption: false,
	caption: "",
};
