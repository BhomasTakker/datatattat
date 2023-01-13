import React, { ReactElement, ReactNode } from "react";
import styles from "./layout.module.css";
import { MainFooter } from "../../footer/MainFooter";
import { MainHeader } from "../../header/MainHeader";
import { Box, Container } from "@mui/material";

import { Notification } from "../notifications/Notification";

type Props = {
	children: ReactNode;
};

export const Layout = ({ children }: Props): ReactElement => {
	return (
		<Box className={styles.page}>
			<Box className={styles.header}>
				<MainHeader />
			</Box>
			<Container className={styles.content}>{children}</Container>
			<Notification />
			{/* Footer is currently after content potentially change to 'bottom' if content height <= vh*/}
			<Box className={styles.footer}>
				<MainFooter />
			</Box>
		</Box>
	);
};
