import styles from "./Auth.module.css";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
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
import { Auth } from "@/src/lib/i18n/translation";
//need schemas and individual rules in a forms/validation lib

const schema = yup.object().shape({
	email: validate.email,
	password: validate.password,
});

export const SignInForm = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const dispatch = useAppDispatch();

	function switchAuthModeHandler() {
		router.replace("/auth/signup");
	}

	async function submitHandler(data: any) {
		//login / call function here / we will need to wrap and mock wrapper for storybook...
		const result = await signIn("credentials", {
			redirect: false,
			...data,
		});

		//this needs a way better check what the hell is this>#?
		if (!result!.error) {
			const { email } = data;
			const response = await fetch(`/api/user/get-user?email=${email}`);
			const user = await response.json();
			const { username } = user;
			// // console.log({ user });
			//create a redirect call in a router lib?
			router
				.replace(`/users/${username}`)
				.then(() => dispatch(addNotification(NOTIFICATIONS.signInSuccess)));
		} else {
			dispatch(addNotification(NOTIFICATIONS.signInError));
		}
	}
	return (
		<Box className={styles.content}>
			{/* create title */}
			<Typography variant="h4" component="h1">
				{t(Auth.login)}
			</Typography>
			<section>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(submitHandler)}>
						<Stack spacing={2}>
							<AuthInputs />

							<Stack spacing={3}>
								<Button variant="contained" color="secondary" type="submit">
									{t(Auth.login)}
								</Button>
								<Button
									variant="text"
									color="secondary"
									onClick={switchAuthModeHandler}
								>
									{t(Auth.createNewAccount)}
								</Button>
							</Stack>
						</Stack>
					</form>
				</FormProvider>
			</section>
		</Box>
	);
};
