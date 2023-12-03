import { Box, TableCell, TableHead, TableRow } from "@mui/material";
import { Table, flexRender } from "@tanstack/react-table";
import { Filter } from "../column-filter/column-filter";

export interface SimpleTableHeadProps {
	table: Table<any>;
}

// typescript is annoying when you get it wrong
// SimpleTableHeaderGroup would be more accurate
// Note - we never implemented dummy cells thing - i.e. secondary header cells (groups)
export const SimpleTableHead = ({ table }: SimpleTableHeadProps) => {
	// type me
	const headerGroup = table.getHeaderGroups().map((headerGroup) => (
		<TableRow key={headerGroup.id}>
			{headerGroup.headers.map((header) => {
				// Argument for a header column / cell component - argument won

				const canSort = header.column.getCanSort();
				const canFilter = header.column.getCanFilter();

				return (
					<TableCell key={header.id}>
						<Box
							onClick={header.column.getToggleSortingHandler()}
							sx={{
								cursor: canSort ? "pointer" : "auto",
							}}
						>
							{flexRender(header.column.columnDef.header, header.getContext())}
							{/* FIX ME */}
							{/* @ts-ignore - for some reason */}
							{{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted() ?? null]}
						</Box>
						{canFilter && (
							<Box>
								<Filter column={header.column} table={table} />
							</Box>
						)}
					</TableCell>
				);
			})}
		</TableRow>
	));
	return <TableHead>{headerGroup}</TableHead>;
};
