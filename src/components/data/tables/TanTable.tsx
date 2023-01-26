import styles from "./TanTable.module.css";
import { Table, TableContainer, Paper, Typography } from "@mui/material";
import {
	useReactTable,
	getCoreRowModel,
	SortingState,
	getSortedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import React from "react";
import defaultData from "../../../../mockData/table/MOCK_DATA.json";
import { TanTableHeader } from "./TanTableHeader";
import { TanTableFooter } from "./TanTableFooter";
import { TanTableBody } from "./TanTableBody";
import { useColumns } from "./useColumns";
import { TanTableColumnsToggle } from "./TanTableColumnsToggle";
import { TanTablePagination } from "./TanTablePagination";

//This needs to be a generic
type DataType = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string;
};

//we need to take list from data and pass data in
const list = ["id", "first_name", "last_name", "email", "gender", "ip_address"];

//TanTable of Generic TableData
export const TanTable = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	//We need to pass in a data type
	const [data, setData] = React.useState((): any[] => [...defaultData]);
	const rerender = React.useReducer(() => ({}), {})[1];

	const { columns } = useColumns(list);

	console.log({ defaultData });

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
		},
		getCoreRowModel: getCoreRowModel(),
		//sorting
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		//Filter
		getFilteredRowModel: getFilteredRowModel(),

		//Big data pagination
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<>
			<Typography variant="h4" component="h1">
				Data Table
			</Typography>
			{/* We can put a column toggle here */}
			<TableContainer component={Paper} className={styles.container}>
				<TanTableColumnsToggle table={table} />
				<Table
					sx={{ minWidth: 700 }}
					aria-label="customized table"
					className={styles.table}
				>
					{/* Probably memoise */}
					<TanTableHeader headerGroups={table.getHeaderGroups()} />
					<TanTableBody rows={table.getRowModel().rows} />
					<TanTableFooter footerGroups={table.getFooterGroups()} />
				</Table>
				{/* pass in isQuery? i.e. isPaginatedQuery */}
				<TanTablePagination table={table} />
			</TableContainer>
		</>
	);
};
