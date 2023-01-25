import styles from "./TanTable.module.css";
import { Table, TableContainer, Paper, Typography } from "@mui/material";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import defaultData from "../../../../mockData/table/MOCK_DATA.json";
import { TanTableHeader } from "./TanTableHeader";
import { TanTableFooter } from "./TanTableFooter";
import { TanTableBody } from "./TanTableBody";
import { useColumns } from "./useColumns";

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
	//We need to pass in a data type
	const [data, setData] = React.useState((): any[] => [...defaultData]);
	const rerender = React.useReducer(() => ({}), {})[1];

	const { columns } = useColumns(list);

	console.log({ defaultData });

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<Typography variant="h4" component="h1">
				Data Table
			</Typography>
			<TableContainer component={Paper} className={styles.container}>
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
			</TableContainer>
		</>
	);
};
