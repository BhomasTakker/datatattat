import React from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";

//Need provide description for each
export const EditContainer = () => {
	const createContainerList = () => {
		return Object.keys(CONTAINERS).map((container) => (
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};

	return (
		<Box>
			<SelectInputWithControl
				label="Select Container"
				name="containerSelect"
				fullWidth={true}
				required
			>
				{createContainerList()}
			</SelectInputWithControl>
		</Box>
	);
};
