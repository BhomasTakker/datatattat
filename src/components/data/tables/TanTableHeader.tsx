import styles from "./TanTable.module.css";
import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { flexRender, HeaderGroup } from "@tanstack/react-table";

export const TanTableHeader = ({
	headerGroups,
}: {
	headerGroups: HeaderGroup<unknown>[];
}) => {
	return (
		<TableHead className={styles.head}>
			{headerGroups.map((headerGroup) => (
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
	);
};
