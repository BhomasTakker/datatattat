import React, { useContext } from "react";
import { EditContext } from "@/src/context/edit-context";
import { Box, Stack, Typography } from "@mui/material";

export function CurrentEndpoint() {
	const editCtx = useContext(EditContext);
	const { currentPage } = editCtx;

	return (
		<Stack direction="row">
			<Typography>Current Endpoint</Typography>
			<Box
				borderRadius={"5%"}
				bgcolor={"highlights.light"}
				marginLeft={"0.5rem"}
				paddingLeft={"0.5rem"}
				minWidth={"200px"}
			>
				<Typography>{currentPage}</Typography>
			</Box>
		</Stack>
	);
}
