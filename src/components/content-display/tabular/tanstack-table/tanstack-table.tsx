import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import {
	Paper,
	PaperProps,
	Table,
	TableContainer,
	TableContainerProps,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { SimpleTablePaginationComponent } from "./pagination/simple-table-pagination-component";
import { SimpleTableHead } from "./head/simple-table-head";
import { SimpleTableBody } from "./body/simple-table-body";
import { fuzzyFilter } from "./filters/fuzzy-filter";
import { TableProps } from "@/src/types/mui";
import { DebouncedInput } from "./input/debounced-input";

// For big data this is apparently great
// Take a proper look at react-virtuoso for list data
// can integrate with table etc
// https://virtuoso.dev/mui-table-virtual-scroll/

export interface TanStackTableProps {
	// columns
	data: any[]; //type?
	columns: ColumnDef<any, any>[];

	useSorting: boolean;
	// specify which sort / alphanumeric, etc / see fuzzySort and sortingFns

	useGlobalFilter: boolean;
	useColumnFilter: boolean;

	showCaption: boolean;
	caption: string;

	usePagination: boolean;
	pageSize: number;
	pageSizeOptions: number[]; // default 5, 10, 20
	allRowsOption: boolean;
	// paginationVariant

	backgroundProps: PaperProps;
	tableContainerProps: TableContainerProps;
	tableProps: TableProps;

	// filter: The filter to use?
	// headerCell: cell to use i.e. component / again where's our bold
	// rowCell: cell to use for data
	// headerProps
	// etcProps

	debug: boolean;
}
/**
 * Mui styled Tanstack Table
 **************************************
 * @prop data - data array - pass flattened - i.e. one object layer
 * @prop columns - pass columns array i.e. basic: { accessorKey: key, header: key }
 * @prop useSorting - show column sorting controls
 * @prop useGlobalFilter - show global filter controls
 * @prop useColumnFilter - show column filter controls
 * @prop usePagination - show pagination controls
 * @prop pageSize - number page/table size
 * @prop pageSizeOptions - number available page size options - pagination
 * @prop allRowsOption Show all rows option - pagination
 * @prop backgroundProps - MUI Paper Props and sx
 * @prop tableContainerProps - MUI TableContainer Props and sx
 * @prop tableProps - MUI Table Props and sx
 * @prop debug - log table debug messages
 * @prop showCaption - show a table caption - good for a11y
 * @prop caption - the cation text
 */
export const TanStackTable = ({
	data,
	columns,
	useSorting = false,
	useGlobalFilter = false,
	useColumnFilter = false,
	usePagination = false,
	pageSize,
	pageSizeOptions = [5, 10, 20],
	allRowsOption = false,
	backgroundProps = {},
	tableContainerProps = {},
	tableProps = {},
	debug = false,
	showCaption = false,
	caption = "",
}: TanStackTableProps) => {
	const [sorting, setSorting] = useState([]);
	const [globalFiltering, setGlobalFiltering] = useState("");
	const [columnFiltering, setColumnFiltering] = useState([]);

	const table = useReactTable({
		data,
		columns,

		// ADD: Should be usePagination ? pageSize : dataset size?
		initialState: { pagination: { pageSize: pageSize } },

		getCoreRowModel: getCoreRowModel(),

		getSortedRowModel: getSortedRowModel(),
		// just no for now
		getFilteredRowModel: getFilteredRowModel(),
		// Do not include me if no pagination
		getPaginationRowModel: getPaginationRowModel(),

		filterFns: {
			// assuming if else undefined
			fuzzy: fuzzyFilter,
		},

		state: {
			sorting: sorting,
			globalFilter: globalFiltering,
			// Okay column filters is big
			columnFilters: columnFiltering,
		},

		// FIX ME - setSorting  err!
		// @ts-ignore
		onSortingChange: setSorting,
		// isGlobalFilter didn't appear to have any affect here
		onGlobalFilterChange: setGlobalFiltering,
		// FIX ME - undefined is okay!
		// @ts-ignore
		onColumnFiltersChange: setColumnFiltering,

		enableColumnFilters: useColumnFilter,
		enableGlobalFilter: useGlobalFilter,
		enableSorting: useSorting,
		// Probs pass
		debugTable: debug,
	});

	// There is a strange thing with sticky headers on tables
	// where they will only work with a set height
	return (
		<Paper {...backgroundProps}>
			{useGlobalFilter && (
				<>
					<DebouncedInput
						type="text"
						aria-label="Filter table"
						placeholder="Filter table"
						value={globalFiltering}
						onChange={(value) =>
							setGlobalFiltering(value as SetStateAction<string>)
						}
					/>
				</>
			)}
			<TableContainer {...tableContainerProps}>
				<Table {...tableProps}>
					{/* Do a component - caption reusable - set offscreen option, etc */}
					{showCaption && <caption>{caption}</caption>}
					{/* yes / no header? */}
					<SimpleTableHead table={table} />
					{/* <TableHead>{headerGroup}</TableHead> */}
					<SimpleTableBody table={table} />
					{/* <TableBody>{rowComponents}</TableBody> */}
				</Table>
			</TableContainer>
			{usePagination && (
				<SimpleTablePaginationComponent
					table={table}
					contentLength={data.length}
					defaultPageSize={pageSize}
					pageSizes={pageSizeOptions}
					showAll={allRowsOption}
				/>
			)}
		</Paper>
	);
};
