import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { createUser } from "../../../queries/auth/createUser";
import { PasswordInput } from "../../input/PasswordInput";
import { EmailInput } from "../../input/EmailInput";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
	addNotification,
	notificationTypes,
} from "../../../store/notifications/notificationSlice";
import { useAppDispatch } from "../../../store/hooks";
import { NOTIFICATIONS } from "../../../lib/notifications/notifications";
import { useTranslation, i18n, I18nContext } from "next-i18next";
import { validate } from "../../../lib/validation/form-input-validators";
//need schemas and individual rules in a forms/validation lib

const schema = yup.object().shape({
	email: validate.email,
	password: validate.password,
});

export const SignUpSignInForm = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const [isLogin, setIsLogin] = useState(true);

	const dispatch = useAppDispatch();

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(data: any) {
		if (isLogin) {
			//login / call function here
			const result = await signIn("credentials", {
				redirect: false,
				...data,
			});

			if (!result!.error) {
				//create a redirect call in a router lib?
				router.replace("/profile");

				dispatch(addNotification(NOTIFICATIONS.signInSuccess));
			} else {
				dispatch(addNotification(NOTIFICATIONS.signInError));
			}
		} else {
			//create user#
			try {
				const result = await createUser(data.email, data.password);

				dispatch(addNotification(NOTIFICATIONS.signUpSuccess));
			} catch (err) {
				//TODO error handling

				console.log({ err });
				dispatch(addNotification(NOTIFICATIONS.signUpError));
			}
		}
	}
	return (
		<section>
			<Typography variant="h3" component="h1">
				{isLogin ? t("Auth:login") : t("Auth:sign-up")}
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(submitHandler)}>
					<Box>
						<EmailInput />
					</Box>
					{/* 
					TODO
					Confirm password box 
					*/}
					<Box>
						<PasswordInput />
					</Box>

					<Box>
						<Button variant="contained" color="primary" type="submit">
							{isLogin ? t("Auth:login") : t("Auth:create-account")}
						</Button>
						<Button
							variant="outlined"
							color="primary"
							onClick={switchAuthModeHandler}
						>
							{isLogin
								? t("Auth:create-new-account")
								: t("Auth:login-with-existing")}
						</Button>
					</Box>
				</form>
			</FormProvider>
		</section>
	);
};
