import styles from "./TanTable.module.css";
import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { flexRender, Row } from "@tanstack/react-table";

export const TanTableBody = ({ rows }: { rows: Row<any>[] }) => {
	return (
		<TableBody className={styles.body}>
			{rows.map((row) => (
				<TableRow key={row.id} className={`${styles.row} ${styles.bodyRow}`}>
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
	);
};
