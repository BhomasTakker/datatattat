import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Navigation } from "@/components/header/nav-links/Navigation";
import React from "react";
import styles from "./sub-header.module.scss";

//Need be an array
export const SubHeader = ({ headersArray }: any) => {
	if (!headersArray) {
		return <></>;
	}
	const data = headersArray[0];
	const { nav } = data;
	return (
		<AppBar position="static">
			<Container>
				<nav>
					<Toolbar className={styles.toolbar}>
						<Box sx={{ overflow: "hidden" }}>
							<Navigation navLinks={nav} onMenuUpdate={() => {}} />
						</Box>
					</Toolbar>
				</nav>
			</Container>
		</AppBar>
	);
};
