import { Stack, Container, CircularProgress, Box } from "@mui/material";
import { ReactNode } from "react";

//perhaps pass some kind of state var
type LabelComponent = () => JSX.Element | undefined;
type Props = {
	renderLabel?: LabelComponent;
};

export const LoadingSpinner = ({ renderLabel }: Props) => {
	return (
		<Container>
			<Box>
				{/* {labelComponent ? labelComponent : <></>} */}
				{renderLabel ? renderLabel() : <></>}
				<CircularProgress />
			</Box>
		</Container>
	);
};
