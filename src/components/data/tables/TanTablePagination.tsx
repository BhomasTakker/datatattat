import {
	Box,
	Button,
	IconButton,
	MenuItem,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import LeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DoubleRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import React from "react";
import { Table } from "@tanstack/react-table";

export const TanTablePagination = ({ table }: { table: Table<any> }) => {
	console.log({ tablePag: table.getState().pagination });
	return (
		<Stack direction="row">
			{/* Split to component */}
			<IconButton
				aria-label="first page"
				size="small"
				onClick={() => table.setPageIndex(0)}
				disabled={!table.getCanPreviousPage()}
			>
				<DoubleLeftIcon />
			</IconButton>
			<IconButton
				aria-label="previous page"
				size="small"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				<LeftIcon />
			</IconButton>

			<IconButton
				aria-label="next page"
				size="small"
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				<RightIcon />
			</IconButton>
			<IconButton
				aria-label="last page"
				size="small"
				onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				disabled={!table.getCanNextPage()}
			>
				<DoubleRightIcon />
			</IconButton>
			{/* Split to component */}
			<Stack direction={"row"}>
				<Typography>Page</Typography>
				<Typography>
					<strong>
						{table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</strong>
				</Typography>
			</Stack>
			{/* Split to component */}
			<Stack direction={"row"}>
				<Typography>| Go to page:</Typography>
				<TextField
					variant="standard"
					type="number"
					size="small"
					defaultValue={table.getState().pagination.pageIndex + 1}
					onChange={(e) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						table.setPageIndex(page);
					}}
					// sx={{ min: 0, max: table.getPageCount() }}
					sx={{ width: "100px" }}
				></TextField>
				<TextField
					select
					size="small"
					variant="standard"
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
				>
					<MenuItem value={10}>Show 10</MenuItem>
					<MenuItem value={20}>Show 20</MenuItem>
					<MenuItem value={30}>Show 30</MenuItem>
					<MenuItem value={40}>Show 40</MenuItem>
					<MenuItem value={50}>Show 50</MenuItem>
				</TextField>
			</Stack>
		</Stack>
	);
};
