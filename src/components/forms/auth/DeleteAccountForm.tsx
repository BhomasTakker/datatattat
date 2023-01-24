import styles from "./Auth.module.css";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";
import { createUser } from "@/queries/auth/createUser";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//convert to seperate pages for sign in and join
//They are two seperate processes etc

import { addNotification } from "@/store/notifications/notificationSlice";
import { useAppDispatch } from "@/store/hooks";
import { NOTIFICATIONS } from "@/lib/notifications/notifications";
import { useTranslation } from "next-i18next";
import { validate } from "@/lib/validation/form-input-validators";
import { AuthInputs } from "@/components/forms/auth/AuthInputs";
import { deleteUser } from "@/queries/auth/deleteUser";
import { logout } from "@/lib/auth";
import { Auth } from "@/src/lib/i18n/translation";
//need schemas and individual rules in a forms/validation lib

//load from somewhere
const schema = yup.object().shape({
	email: validate.email,
	password: validate.password,
	confirm: validate.confirmPassword,
});

export const DeleteAccountForm = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const dispatch = useAppDispatch();

	async function submitHandler(data: any) {
		console.log("delete account and sign out");
		const result = await deleteUser(data.email, data.password);
		if (result.error) {
			//We could just call a disapatchNotification(Notification.changePasswordError) which is way better
			//look into this - it is outside of react
			//At least put the notification objects into a lib so all in one place
			dispatch(addNotification(NOTIFICATIONS.accountDeletedError));
			return;
		}

		logout(() => {
			dispatch(addNotification(NOTIFICATIONS.accountDeletedSuccess));
		});
	}
	return (
		<Box className={styles.content}>
			<Typography variant="h4" component="h1">
				{t(Auth.deleteAccountTitle)}
			</Typography>
			<section>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(submitHandler)}>
						<Stack spacing={2}>
							<AuthInputs confirmPassword />

							<Stack spacing={3}>
								<Button variant="contained" color="primary" type="submit">
									{t(Auth.deleteAccountButton)}
								</Button>
							</Stack>
						</Stack>
					</form>
				</FormProvider>
			</section>
		</Box>
	);
};
