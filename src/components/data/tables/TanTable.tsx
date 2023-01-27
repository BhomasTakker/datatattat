import styles from "./TanTable.module.css";
import {
	Table,
	TableContainer,
	Paper,
	Typography,
	Button,
} from "@mui/material";
import {
	useReactTable,
	getCoreRowModel,
	SortingState,
	getSortedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	OnChangeFn,
	PaginationState,
	TableState,
	TableOptions,
} from "@tanstack/react-table";
import React from "react";
import defaultData from "../../../../mockData/table/MOCK_DATA.json";
import { TanTableHeader } from "./TanTableHeader";
import { TanTableFooter } from "./TanTableFooter";
import { TanTableBody } from "./TanTableBody";
import { useColumns } from "./useColumns";
import { TanTableColumnsToggle } from "./TanTableColumnsToggle";
import { TanTablePagination } from "./TanTablePagination";
import { useEffect } from "react";
import { PaginationType } from "./types";

//I don't like this there is a better way
let list: unknown[] = [];

type QueryData = {
	data: any;
	pageCount: number;
};

//We need to properly work with generics
//Table and data type is the perfect opportunity
type TanTableProps = {
	queryData: QueryData;
	onPageUpdate: OnChangeFn<PaginationState>;
	queryState: any & PaginationType;

	manualPagination: boolean;
};

//TanTable of Generic TableData
export const TanTable = ({
	queryData,
	onPageUpdate,
	queryState,
	manualPagination,
}: TanTableProps) => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	//We need to pass in a data type
	// const [data, setData] = React.useState((): any[] => [...defaultData]);
	const rerender = React.useReducer(() => ({}), {})[1]; //need understand this properly and if required

	const { data, pageCount } = queryData;

	console.log({ manualPagination });
	console.log("REDRAW");
	// const manualPagination = true;

	//Stupid question perhaps but is there a way to memoise list in this instance?
	//We absolutely need to put some focus into memoisation, etc
	useEffect(() => {
		list = Object.keys(data[0]);
	}, [data]);

	const { columns } = useColumns(list);

	let tableState: Partial<TableState> = {};
	if (manualPagination) tableState.pagination = queryState;

	//default table options
	//thenspread manualPagination table options over the top
	let tableOptions: Partial<TableOptions<any>> = {
		getPaginationRowModel: getPaginationRowModel(),
	};

	if (manualPagination) {
		tableOptions = {
			getPaginationRowModel: undefined,
			// getPaginationRowModel: getPaginationRowModel(),
			//query pagination / set false for use above
			manualPagination,
			pageCount: pageCount,
			onPaginationChange: onPageUpdate,
		};
	}

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			...tableState,
			// pagination: manualPagination ? pagination : undefined,
		},

		getCoreRowModel: getCoreRowModel(),
		//sorting
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		//Filter
		getFilteredRowModel: getFilteredRowModel(),

		...tableOptions,

		// getPaginationRowModel: !manualPagination
		// 	? getPaginationRowModel()
		// 	: undefined,
		// // getPaginationRowModel: getPaginationRowModel(),
		// //query pagination / set false for use above
		// manualPagination,
		// pageCount: manualPagination ? pageCount : undefined,
		// onPaginationChange: manualPagination ? onPageUpdate : undefined,
	});

	return (
		<>
			{/* 
        Render props for each component?
        If provided then render
        You 'could' pass in table as props and then whatever goes 
    */}
			<Typography variant="h4" component="h1">
				Data Table
			</Typography>
			<TableContainer component={Paper} className={styles.container}>
				<TanTableColumnsToggle table={table} />
				<Table aria-label="customized table" className={styles.table}>
					{/* Probably memoise */}
					<TanTableHeader headerGroups={table.getHeaderGroups()} />
					<TanTableBody rows={table.getRowModel().rows} />
					<TanTableFooter footerGroups={table.getFooterGroups()} />
				</Table>
				{/* need set show 5, 10, 20, accordingly */}
				{/* need set goto page limits - 0 - number of pages */}
				<TanTablePagination table={table} />
				<Button onClick={() => rerender()}>Redraw</Button>
			</TableContainer>
		</>
	);
};
