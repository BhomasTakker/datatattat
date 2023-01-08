import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { createUser } from "../../../queries/auth/createUser";
import { PasswordInput } from "../../input/PasswordInput";
import { EmailInput } from "../../input/EmailInput";

export const SignUpSignInForm = () => {
	const emailRef = useRef<HTMLInputElement | null>(); //Correct Types?
	const passwordRef = useRef<HTMLInputElement | null>();
	const router = useRouter();

	const [isLogin, setIsLogin] = useState(true);

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(event: any) {
		event.preventDefault();

		const enteredEmail = emailRef.current?.value;
		const enteredPassword = passwordRef.current?.value;
		//sort this out - fairly sure we don't need it / plus return msg
		if (!enteredEmail || !enteredPassword) {
			return;
		}

		if (isLogin) {
			//login
			const result = await signIn("credentials", {
				redirect: false,
				email: enteredEmail,
				password: enteredPassword,
			});

			if (!result!.error) {
				//create a redirect call in a router lib?
				router.replace("/profile");
			}
		} else {
			//create user#
			try {
				const result = await createUser(enteredEmail, enteredPassword);
			} catch (err) {
				//TODO error handling
				console.log({ err });
			}
		}
	}
	return (
		<section>
			<Typography variant="h3" component="h1">
				{isLogin ? "Login" : "Sign Up"}
			</Typography>

			<form onSubmit={submitHandler}>
				<Box>
					<EmailInput ref={emailRef} />
				</Box>
				{/* 
					TODO
					Confirm password box 
					*/}
				<Box>
					<PasswordInput ref={passwordRef} />
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
		</section>
	);
};
