import { useUser } from "@/src/hooks/useUser";
import { NOTIFICATIONS } from "@/src/lib/notifications/notifications";
import { createLandingPage } from "@/src/queries/pages/createLandingPage";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notifications/notificationSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { DTAFormProvider } from "./DTAFormProvider";

import { validate } from "@/lib/validation/form-input-validators";
import * as yup from "yup";
import { PageEdit } from "./PageEdit";

const defaultSchema = {
	// route: validate.username,
	content: yup.object().shape({
		container: yup.object().shape({
			containerType: validate.username,
		}),
	}),
	// content.container.containerType: validate.username,
};

export const PageForm = () => {
	const { user } = useUser();
	const dispatch = useAppDispatch();
	const router = useRouter();

	// console.log({ user });

	const submitHandler = async (data: any) => {
		const { _id } = user;
		if (!user) {
			//Error something went wrong
			return;
		}
		const pageData = {
			...data,
			creator: _id,
		};

		try {
			const result = await createLandingPage(pageData);
			//No redirect
			// router
			// 	.replace(`/users/${user.username}`) //how to actually get username here
			// 	.then(() => dispatch(addNotification(NOTIFICATIONS.signInSuccess)));
			dispatch(addNotification(NOTIFICATIONS.pageCreationSuccess));
		} catch (err) {
			dispatch(addNotification(NOTIFICATIONS.pageCreationError));
		}
	};
	return (
		<DTAFormProvider
			defaultSchema={defaultSchema}
			submitHandler={submitHandler}
			debug={true}
		>
			<PageEdit />
			<Box>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</Box>
		</DTAFormProvider>
	);
};
