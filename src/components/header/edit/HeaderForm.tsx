import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { DTAFormProvider } from "../../forms/edit/DTAFormProvider";
import { useUser } from "@/src/hooks/useUser";
import { FieldValues } from "react-hook-form";
import { HeaderEdit } from "./HeaderEdit";

//How to do an array of known things?
//This is possible - I saw that when investigating dynamic form validation ... :/
const defaultSchema = {};

//We need to remove the add header button from here
//We need to create additional sub headers at the page level
//i.e. each page without a header will show add header
//We will need remove header but yar
export const HeaderForm = () => {
	const [isShowing, setIsShowing] = useState<boolean>(false);

	const { user } = useUser();

	const submitHandler = async (data: FieldValues) => {
		const { _id } = user;
		if (!user) {
			//Error something went wrong
			return;
		}
		const saveData = {
			...data,
			creator: _id,
		};
	};

	if (!isShowing) {
		//Create header or create sub header
		//If page has no header
		//then create header/create subheader
		//If page has a header then show it
		/////////////////////////////////////////
		//Header button should be in page edit
		//since we will need to set the header _id
		return (
			<Button
				variant="contained"
				color="primary"
				onClick={() => setIsShowing(true)}
			>
				Create Header
			</Button>
		);
	}

	return (
		<Box>
			<Typography>Create Header</Typography>

			<DTAFormProvider
				defaultSchema={defaultSchema}
				submitHandler={submitHandler}
			>
				<HeaderEdit />
			</DTAFormProvider>
		</Box>
	);
};
