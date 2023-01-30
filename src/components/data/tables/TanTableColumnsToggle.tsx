import { Stack } from "@mui/material";
import { Table } from "@tanstack/react-table";
import React from "react";
import { DTACheckbox } from "@/components/input/DTACheckbox";

//Do a 'header' checkall box
//do stacks of 5 in a row stack / grid / flex
//Add show/hide

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
