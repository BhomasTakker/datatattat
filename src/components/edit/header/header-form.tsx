import { Box } from "@mui/material";
import { DTAFormProvider } from "../../forms/edit/DTAFormProvider";
import { HeaderEdit } from "../../header/edit/HeaderEdit";
import { useContext } from "react";
import { HeaderContext } from "./context/header.context";

export const HeaderForm = () => {
	const { submit } = useContext(HeaderContext);
	return (
		<Box>
			<DTAFormProvider defaultSchema={{}} submitHandler={submit} debug={true}>
				<HeaderEdit />
			</DTAFormProvider>
		</Box>
	);
};
