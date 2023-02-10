import styles from "./Auth.module.css";
import { Button, InputAdornment, Stack, Typography } from "@mui/material";
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
import { Auth } from "@/src/lib/i18n/translation";
import { UsernameInputWithControl } from "../../input/UsernameInput";
import { signIn } from "next-auth/react";
//need schemas and individual rules in a forms/validation lib

//load from somewhere
const schema = yup.object().shape({
	email: validate.email,
	password: validate.password,
	confirm: validate.confirmPassword,
	//need add regex pattern etc, translations
	username: validate.username,
});

export const SignUpForm = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const dispatch = useAppDispatch();

	//stupid question - this function needs to be shared between SignUp and SignIn
	//is there a way without passing the router in so this can just be a function
	//I mean return true or false and you have to notify
	//although we want like a partial component
	async function signUserIn(data: any) {
		//login / call function here / we will need to wrap and mock wrapper for storybook...
		const result = await signIn("credentials", {
			redirect: false,
			...data,
		});

		//this needs a way better check what the hell is this>#?
		if (!result!.error) {
			//create a redirect call in a router lib?
			router
				.replace("/profile")
				.then(() => dispatch(addNotification(NOTIFICATIONS.signInSuccess)));
		} else {
			dispatch(addNotification(NOTIFICATIONS.signInError));
		}
	}
	function switchAuthModeHandler() {
		router.replace("/auth/signin");
	}

	async function submitHandler(data: any) {
		try {
			const result = await createUser(data.email, data.password, data.username);

			dispatch(addNotification(NOTIFICATIONS.signUpSuccess));
			signUserIn(data);
		} catch (err) {
			dispatch(addNotification(NOTIFICATIONS.signUpError));
		}
	}
	return (
		<Box className={styles.content}>
			<Typography variant="h4" component="h1">
				{t(Auth.signUp)}
			</Typography>
			<section>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(submitHandler)}>
						<Stack spacing={2}>
							<Box>
								{/* Need add check if taken */}
								<UsernameInputWithControl
									label={"select username"}
									name="username"
								/>
							</Box>
							<AuthInputs confirmPassword />
							{/* buttons the same but for labels and onClick */}
							<Stack spacing={3}>
								<Button variant="contained" color="primary" type="submit">
									{t(Auth.createAccount)}
								</Button>
								<Button
									variant="text"
									color="primary"
									onClick={switchAuthModeHandler}
								>
									{t(Auth.loginWithExisting)}
								</Button>
							</Stack>
						</Stack>
					</form>
				</FormProvider>
			</section>
		</Box>
	);
};
