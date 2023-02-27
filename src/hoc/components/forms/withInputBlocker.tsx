import { Box } from "@mui/material";
import { ReactElement } from "react";
import styles from "./withInputBlocker.module.scss";

//What should component type be?
export const withInputBlocker = (Component: any) => {
	return function ComponentWithInputBlocker(props: any): ReactElement {
		return (
			//Okay that there be fly
			<Box className={styles.blocker}>
				<Component {...props} />
			</Box>
		);
	};
};
