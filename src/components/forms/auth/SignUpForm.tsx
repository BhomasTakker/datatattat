import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";
import { createUser } from "../../../queries/auth/createUser";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//convert to seperate pages for sign in and join
//They are two seperate processes etc

import { addNotification } from "../../../store/notifications/notificationSlice";
import { useAppDispatch } from "../../../store/hooks";
import { NOTIFICATIONS } from "../../../lib/notifications/notifications";
import { useTranslation } from "next-i18next";
import { validate } from "../../../lib/validation/form-input-validators";
import { AuthInputs } from "./AuthInputs";
//need schemas and individual rules in a forms/validation lib

//load from somewhere
const schema = yup.object().shape({
	email: validate.email,
	password: validate.password,
});

export const SignUpForm = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const dispatch = useAppDispatch();

	function switchAuthModeHandler() {
		router.replace("/auth/signin");
	}

	async function submitHandler(data: any) {
		try {
			const result = await createUser(data.email, data.password);

			dispatch(addNotification(NOTIFICATIONS.signUpSuccess));
		} catch (err) {
			dispatch(addNotification(NOTIFICATIONS.signUpError));
		}
	}
	return (
		<section>
			<Typography variant="h3" component="h1">
				{t("Auth:sign-up")}
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(submitHandler)}>
					<AuthInputs />

					<Box>
						<Button variant="contained" color="primary" type="submit">
							{t("Auth:create-account")}
						</Button>
						<Button
							variant="outlined"
							color="primary"
							onClick={switchAuthModeHandler}
						>
							{t("Auth:login-with-existing")}
						</Button>
					</Box>
				</form>
			</FormProvider>
		</section>
	);
};
