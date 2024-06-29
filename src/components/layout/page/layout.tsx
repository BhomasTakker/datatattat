import React, { ReactElement, ReactNode } from "react";
import styles from "./layout.module.scss";
import { Box, Container } from "@mui/material";

import { Notification } from "@/components/layout/notifications/Notification";

type Props = {
	children: ReactNode;
	renderHeader: () => ReactElement;
	renderFooter: () => ReactElement;
};

export const Layout = ({
	children,
	renderHeader = () => <></>,
	renderFooter = () => <></>,
}: Props): ReactElement => {
	return (
		<Box className={styles.page}>
			<Box className={styles.header}>{renderHeader()}</Box>
			<Container className={styles.content}>{children}</Container>
			<Notification />
			{/* Footer is currently after content potentially change to 'bottom' if content height <= vh*/}
			<Box className={styles.footer}>{renderFooter()}</Box>
		</Box>
	);
};
