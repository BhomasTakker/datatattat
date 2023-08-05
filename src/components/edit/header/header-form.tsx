import { Box } from "@mui/material";
import { DTAFormProvider } from "../../forms/edit/DTAFormProvider";
import { useContext } from "react";
import { HeaderContext } from "./context/header.context";
import { HeaderQueryProvider } from "./query/context/header-query.context";
import { HeaderLayout } from "./layout/header-layout";
import { HeaderFormContext } from "./context/form/header-form.context";

export const HeaderForm = () => {
	const { submit } = useContext(HeaderFormContext);
	return (
		<Box>
			{/* <DTAFormProvider defaultSchema={{}} submitHandler={submit} debug={true}> */}
			{/* This is way bigger than simply create a context - this is multiple state objects */}
			<HeaderQueryProvider>
				<HeaderLayout />
				{/* <HeaderControls /> */}
			</HeaderQueryProvider>
			{/* </DTAFormProvider> */}
		</Box>
	);
};
