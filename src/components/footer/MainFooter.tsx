import React from "react";
import { Box, Paper, Container } from "@mui/material";

export const MainFooter = () => {
	return (
		<footer>
			<Box
				// p={2}
				display="flex"
				height={"100px"}
				// width="100"
				bgcolor={"primary.main"}
			>
				<Container>{/* Container gives us our basic 'body' area */}</Container>
			</Box>
		</footer>
	);
};
