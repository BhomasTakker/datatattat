import { TablePagination } from "@mui/material";
import { SimpleTablePaginationActions } from "./simple-table-actions";

export interface SimpleTablePaginationComponentProps {
	table: any;
	contentLength: number;
	defaultPageSize: number;
	pageSizes: number[];
	showAll: boolean;
}

export const SimpleTablePaginationComponent = ({
	table,
	contentLength,
	defaultPageSize,
	pageSizes,
	showAll,
}: SimpleTablePaginationComponentProps) => {
	const { pageSize, pageIndex } = table.getState().pagination;
	const rows = [...pageSizes];
	const all = { label: "All", value: contentLength };

	return (
		<TablePagination
			// props
			rowsPerPageOptions={showAll ? rows : [...rows, all]}
			component="div"
			count={table.getFilteredRowModel().rows.length}
			rowsPerPage={pageSize}
			page={pageIndex}
			SelectProps={{
				inputProps: { "aria-label": "rows per page" },
				native: true,
			}}
			onPageChange={(_, page) => {
				table.setPageIndex(page);
			}}
			onRowsPerPageChange={(e) => {
				const size = e.target.value ? Number(e.target.value) : defaultPageSize;
				table.setPageSize(size);
			}}
			// Straight rip
			ActionsComponent={SimpleTablePaginationActions}
		/>
	);
};
