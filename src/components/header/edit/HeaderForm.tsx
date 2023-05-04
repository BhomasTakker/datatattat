import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DTAFormProvider } from "../../forms/edit/DTAFormProvider";
import { useUser } from "@/src/hooks/useUser";
import { FieldValues } from "react-hook-form";
import { HeaderEdit } from "./HeaderEdit";
import { EditContext } from "@/src/context/edit-context";
import { saveHeader } from "@/src/queries/header/save-header";
import { NOTIFICATIONS } from "@/src/lib/notifications/notifications";
import { addNotification } from "@/src/store/notifications/notificationSlice";
import { useAppDispatch } from "@/store/hooks";
//How to do an array of known things?
//This is possible - I saw that when investigating dynamic form validation ... :/
const defaultSchema = {};

//We need to remove the add header button from here
//We need to create additional sub headers at the page level
//i.e. each page without a header will show add header
//We will need remove header but yar
export const HeaderForm = () => {
	const editCtx = useContext(EditContext);
	const dispatch = useAppDispatch();
	const { currentPage } = editCtx;

	const { user } = useUser();

	type NavItem = {
		label: string;
		route: string;
	};

	const submitHandler = async (data: FieldValues) => {
		if (!user) {
			//Error something went wrong
			return;
		}

		const { _id } = user;
		//loop nav in data and add outer route to each route
		//This doesn't allow for linking to other pages but that can be changed
		//basics first

		const navData = data.nav.map((item: NavItem) => {
			//if homepage - probably do something better
			const route =
				currentPage !== "/" ? `${currentPage}/${item.route}` : `/${item.route}`;
			return {
				label: item.label,
				route, //function - i.e. save typepass type and link and figure it out - for non nested links etc
			};
		});
		const saveData = {
			// ...data,
			nav: navData,
			// Add id and description to form
			// Need possible header title
			// prefix logo / postfix options
			id: "",
			description: "",
			route: currentPage,
			creator: _id,
		};

		//make sure all routes begin with /
		//Do we force all routes to be user sub routes?
		//Or can you at least link to another page?
		//User for now right?

		// We can save by endpoint / making sure that endpoint is always the expected prefix of username
		// This means that we cannot differentiate between POST and PATCH/PUT
		// If we know _id we can PUT if exists and POST if not

		try {
			const savedHeader = await saveHeader(saveData);
			console.log({ saveData });
			console.log({ savedHeader });
			dispatch(addNotification(NOTIFICATIONS.headerSavedSuccess));
		} catch (error) {
			dispatch(addNotification(NOTIFICATIONS.haederSavedError));
		}
	};

	// if (!isShowing) {
	// 	//Create header or create sub header
	// 	//If page has no header
	// 	//then create header/create subheader
	// 	//If page has a header then show it
	// 	/////////////////////////////////////////
	// 	//Header button should be in page edit
	// 	//since we will need to set the header _id
	// 	return (
	// 		<Button
	// 			variant="contained"
	// 			color="primary"
	// 			onClick={() => setIsShowing(true)}
	// 		>
	// 			Create Header
	// 		</Button>
	// 	);
	// }

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
