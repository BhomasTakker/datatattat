import { TableBody, TableCell, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
export interface SimpleTableBodyProps {
	table: Table<any>;
}

export const SimpleTableBody = ({ table }: SimpleTableBodyProps) => {
	// type me
	const rows = table.getRowModel().rows;
	const rowComponents = rows.map((row) => (
		// prepareRow(row);
		<TableRow key={row.id}>
			{row.getVisibleCells().map((cell) => (
				<TableCell key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</TableRow>
	));
	return <TableBody>{rowComponents}</TableBody>;
};
