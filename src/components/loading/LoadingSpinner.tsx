import { Stack, Container, CircularProgress, Box } from "@mui/material";
import { ReactNode } from "react";
import styles from "./LoadingSpinner.module.css";

//perhaps pass some kind of state var
type LabelComponent = () => JSX.Element | undefined;
type Props = {
	renderLabel?: LabelComponent;
};

export const LoadingSpinner = ({ renderLabel }: Props) => {
	return (
		<Container className={styles.container}>
			<Box className={styles.content}>
				{/* {labelComponent ? labelComponent : <></>} */}
				{renderLabel ? renderLabel() : <></>}
				<CircularProgress />
			</Box>
		</Container>
	);
};
