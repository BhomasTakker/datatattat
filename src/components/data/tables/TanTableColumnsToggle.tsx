import { Stack } from "@mui/material";
import { Table } from "@tanstack/react-table";
import React from "react";
import { DTACheckbox } from "@/components/input/DTACheckbox";

export const TanTableColumnsToggle = ({ table }: { table: Table<any> }) => {
	const {
		getIsAllColumnsVisible,
		getToggleAllColumnsVisibilityHandler,
		getAllLeafColumns,
	} = table;
	return (
		<Stack direction="row">
			<DTACheckbox
				label="Check All"
				checked={getIsAllColumnsVisible()}
				onChange={getToggleAllColumnsVisibilityHandler()}
			/>
			{getAllLeafColumns().map((column) => {
				const { getIsVisible, getToggleVisibilityHandler } = column;
				return (
					<DTACheckbox
						key={column.id}
						label={column.id}
						checked={getIsVisible()}
						onChange={getToggleVisibilityHandler()}
					/>
				);
			})}
		</Stack>
	);
};
