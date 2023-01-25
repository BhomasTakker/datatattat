import styles from "./TanTable.module.css";
import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { flexRender, Header, HeaderGroup } from "@tanstack/react-table";

//Is this overkill?
//It 'feels' a lot better byt is there a cost?
//After transpiling, can there be?
const HeaderRow = ({ headerGroup }: { headerGroup: HeaderGroup<unknown> }) => {
	return (
		<TableRow
			key={headerGroup.id}
			className={`${styles.row} ${styles.headRow}`}
		>
			{headerGroup.headers.map((header) => (
				<HeaderCell key={header.id} header={header} />
			))}
		</TableRow>
	);
};

const HeaderCell = ({ header }: { header: Header<unknown, unknown> }) => {
	const canSort = header.column.getCanSort();
	const pointerClass = canSort ? "cursor-pointer" : "";
	const isSorted = header.column.getIsSorted();
	const toggleSortHnd = header.column.getToggleSortingHandler;
	//set class according to Can be sorted or not

	return (
		<TableCell
			key={header.id}
			className={`${styles.cell} ${styles.headCell} ${pointerClass}`}
			onClick={toggleSortHnd()}
		>
			{header.isPlaceholder
				? null
				: flexRender(header.column.columnDef.header, header.getContext())}
			{{
				asc: " 🔼",
				desc: " 🔽",
			}[isSorted as string] ?? null}
		</TableCell>
	);
};

export const TanTableHeader = ({
	headerGroups,
}: {
	headerGroups: HeaderGroup<unknown>[];
}) => {
	return (
		<TableHead className={styles.head}>
			{headerGroups.map((headerGroup) => (
				<HeaderRow key={headerGroup.id} headerGroup={headerGroup} />
			))}
		</TableHead>
	);
};
