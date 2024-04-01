// @ts-nocheck / FIX ME
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
	HeaderGroup,
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

	showHeader: boolean;
	showFooter: boolean;
	manualPagination?: boolean;
	showColumnToggles?: boolean;
	showColumnFilters?: boolean;
	showPagination?: boolean;
	canSort?: boolean;

	//do we offset the
	// pageOffset?: boolean;
};

//We should be using useContext for table properties / sortable, etc
//TanTable of Generic TableData
export const TanTable = ({
	//really need if and manage better
	queryData,
	onPageUpdate,
	queryState,
	//these are the actual table props
	showHeader = true,
	showFooter = false,
	manualPagination = false,
	showColumnToggles = false,
	showColumnFilters = false,
	showPagination = false,
	canSort = false,
}: TanTableProps) => {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	//call as a function to rerender
	const rerender = React.useReducer(() => ({}), {})[1]; //need understand this properly and if required

	const { data, pageCount } = queryData;

	//Stupid question perhaps but is there a way to memoise list in this instance?
	//We absolutely need to put some focus into memoisation, etc
	useEffect(() => {
		list = Object.keys(data[0]);
	}, [data]);

	const { columns } = useColumns(list);

	let tableState: Partial<TableState> = {};
	// if (manualPagination) tableState.pagination = queryState;

	//default table options
	//thenspread manualPagination table options over the top
	let tableOptions: Partial<TableOptions<any>> = {
		getPaginationRowModel: getPaginationRowModel(),
	};

	if (manualPagination) {
		tableState.pagination = queryState;
		tableOptions = {
			getPaginationRowModel: undefined,
			// getPaginationRowModel: getPaginationRowModel(),
			//query pagination / set false for use above
			manualPagination,
			pageCount: pageCount,
			onPaginationChange: onPageUpdate,
		};
	}

	//There are a lot of available options
	//We need to go over in detail
	const table = useReactTable({
		data,
		columns,
		//This is where we can set column visibility, default ordering, etc
		state: {
			sorting,
			...tableState,
		},

		enableSorting: canSort,

		//works in combination with column.getCanFilter(); in header
		enableColumnFilters: showColumnFilters,

		//these are global filters - I suppose affecting all results
		// enableFilters: showColumnFilters,
		// enableColumnFilters: showColumnFilters,
		// enableGlobalFilter: showColumnFilters,

		getCoreRowModel: getCoreRowModel(),
		//sorting
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		//Filter
		getFilteredRowModel: getFilteredRowModel(),

		...tableOptions,
	});

	return (
		<>
			<TableContainer component={Paper} className={styles.container}>
				<Typography variant="h4" component="h1">
					Data Table
				</Typography>
				{showColumnToggles && <TanTableColumnsToggle table={table} />}
				<Table aria-label="customized table" className={styles.table}>
					{/* Probably memoise */}
					{showHeader && (
						<TanTableHeader headerGroups={table.getHeaderGroups()} />
					)}
					<TanTableBody rows={table.getRowModel().rows} />
					{showFooter && (
						<TanTableFooter footerGroups={table.getFooterGroups()} />
					)}
				</Table>
				{/* need set show 5, 10, 20, accordingly */}
				{/* need set goto page limits - 0 - number of pages */}
				{showPagination && <TanTablePagination table={table} />}
				{/* <Button onClick={() => rerender()}>Redraw</Button> */}
			</TableContainer>
		</>
	);
};
