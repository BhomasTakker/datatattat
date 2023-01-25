import styles from "./TanTable.module.css";
import { TableCell, TableFooter, TableRow } from "@mui/material";
import React from "react";
import { flexRender, HeaderGroup } from "@tanstack/react-table";

export const TanTableFooter = ({
	footerGroups,
}: {
	footerGroups: HeaderGroup<any>[];
}) => {
	return (
		<TableFooter className={styles.foot}>
			{footerGroups.map((footerGroup) => (
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
	);
};
