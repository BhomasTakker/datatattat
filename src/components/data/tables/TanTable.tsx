import styles from "./TanTable.module.css";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableFooter,
	Paper,
	Typography,
} from "@mui/material";
import {
	useReactTable,
	createColumnHelper,
	getCoreRowModel,
	flexRender,
} from "@tanstack/react-table";
import React from "react";
import defaultData from "../../../../mockData/table/MOCK_DATA.json";

type DataType = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string;
};

const list = ["id", "first_name", "last_name", "email", "gender", "ip_address"];

// const columnHelper = createColumnHelper<any>();

// const columnsDyn = list.map((item) => columnHelper.accessor(item, {
//   cell: (info) => info.getValue(),
//   // footer: (info) => info.column[item],
// }),);

// const columns = [
// 	columnHelper.accessor("id", {
// 		cell: (info) => info.getValue(),
// 		footer: (info) => info.column.id,
// 	}),
// 	columnHelper.accessor("first_name", {
// 		cell: (info) => info.getValue(),
// 		footer: (info) => info.column.id,
// 	}),
// 	columnHelper.accessor((row) => row.last_name, {
// 		id: "last_name",
// 		cell: (info) => <i>{info.getValue()}</i>,
// 		header: () => <span>Last Name</span>,
// 		footer: (info) => info.column.id,
// 	}),
// 	columnHelper.accessor("email", {
// 		header: () => <span>Email</span>,
// 		footer: (info) => info.column.id,
// 	}),
// 	columnHelper.accessor("gender", {
// 		header: "Gender",
// 		footer: (info) => info.column.id,
// 	}),
// 	columnHelper.accessor("ip_address", {
// 		header: "IP Address",
// 		footer: (info) => info.column.id,
// 	}),
// ];

export const TanTable = () => {
	//We need to pass in a data type
	const [data, setData] = React.useState((): DataType[] => [...defaultData]);
	const rerender = React.useReducer(() => ({}), {})[1];

	const columnHelper = createColumnHelper<any>();

	const columns = list.map((item, i) =>
		columnHelper.accessor(item, {
			cell: (info) => info.getValue(),
			footer: (info) => item, // understand what info actually is and how exactly this works
		})
	);

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
					<TableHead className={styles.head}>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className={`${styles.row} ${styles.headRow}`}
							>
								{headerGroup.headers.map((header) => (
									<TableCell
										key={header.id}
										className={`${styles.cell} ${styles.headCell}`}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody className={styles.body}>
						{table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								className={`${styles.row} ${styles.bodyRow}`}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className={`${styles.cell} ${styles.bodyCell}`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
					<TableFooter className={styles.foot}>
						{table.getFooterGroups().map((footerGroup) => (
							<TableRow
								key={footerGroup.id}
								className={`${styles.row} ${styles.footRow}`}
							>
								{footerGroup.headers.map((header) => (
									<TableCell
										key={header.id}
										className={`${styles.cell} ${styles.footCell}`}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.footer,
													header.getContext()
											  )}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	);
};
