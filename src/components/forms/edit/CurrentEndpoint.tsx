import React, { useContext } from "react";
import { EditContext } from "@/src/context/edit-context";
import { Box, Stack, Typography } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";

export function CurrentEndpoint() {
	const { currentPage } = useContext(EditContext);

	return (
		<Stack direction="row">
			<Typography>Current Endpoint</Typography>
			<Box
				borderRadius={"5%"}
				bgcolor={"highlights.light"}
				marginLeft={MARGINS.SMALL}
				paddingLeft={MARGINS.SMALL}
				minWidth={"200px"}
			>
				<Typography>{currentPage}</Typography>
			</Box>
		</Stack>
	);
}
