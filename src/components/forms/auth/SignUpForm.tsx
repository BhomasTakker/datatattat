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

//need schemas and individual rules in a forms/validation lib
const schema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.max(15, "Password must be at most 15 characters")
		.required("Password is required"),
});

export const SignUpSignInForm = () => {
	const router = useRouter();
	const methods = useForm({ resolver: yupResolver(schema) });

	const [isLogin, setIsLogin] = useState(true);

	const dispatch = useAppDispatch();

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(data: any) {
		console.log({ data });

		if (isLogin) {
			//login / call function here
			const result = await signIn("credentials", {
				redirect: false,
				...data,
			});

			if (!result!.error) {
				//create a redirect call in a router lib?
				router.replace("/profile");

				dispatch(
					addNotification({
						id: "login-successful",
						message: "log in successful",
						type: notificationTypes.success,
					})
				);
			}
		} else {
			//create user#
			try {
				const result = await createUser(data.email, data.password);

				dispatch(
					addNotification({
						id: "account-creation-successful",
						message: "Account Created. Welcome!",
						type: notificationTypes.success,
					})
				);
			} catch (err) {
				//TODO error handling

				console.log({ err });
				dispatch(
					addNotification({
						id: "account-creation-failed",
						message: "Account Creation Failed. ",
						type: notificationTypes.error,
					})
				);
			}
		}
	}
	return (
		<section>
			<Typography variant="h3" component="h1">
				{isLogin ? "Login" : "Sign Up"}
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
							{isLogin ? "Login" : "Create Account"}
						</Button>
						<Button
							variant="outlined"
							color="primary"
							onClick={switchAuthModeHandler}
						>
							{isLogin ? "Create new account" : "Login with existing account"}
						</Button>
					</Box>
				</form>
			</FormProvider>
		</section>
	);
};
