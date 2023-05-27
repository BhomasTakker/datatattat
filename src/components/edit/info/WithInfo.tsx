//More of a layout no?

import { Box, IconButton, Stack } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { InfoProps } from "../types/ui";
import { MARGINS } from "config/styles/styles.config";

export const WithInfo = ({ children }: InfoProps): ReactElement => {
	return (
		<Stack direction={"row"} justifyContent="space-between">
			{children}
			<Box height={MARGINS.MID}>
				<IconButton aria-label="Info" onClick={() => {}} color="info">
					<InfoIcon />
				</IconButton>
			</Box>
		</Stack>
	);
};
