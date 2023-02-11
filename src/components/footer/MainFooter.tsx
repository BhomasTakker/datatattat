import React from "react";
import { Box, Container } from "@mui/material";

export const MainFooter = ({ footerData }: any) => {
	// console.log({ footerData });
	return (
		<footer>
			<Box display="flex" height={"100px"} bgcolor={"primary.main"}>
				<Container sx={{ color: "white", textAlign: "center", margin: "auto" }}>
					Footer
				</Container>
			</Box>
		</footer>
	);
};
