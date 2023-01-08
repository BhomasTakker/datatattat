import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, getSession } from "next-auth/react";
//elsewheres? / should be user model?
async function createUser(email: string, password: string) {
	//store somewhere no?
	//pass date
	// let data = {};
	// try {

	let response;

	response = await fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		//create somne standard headers
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	//TODO
	//improve responses etc
	if (!response.ok) {
		throw new Error(data.message || "Something went wrong");
	}
	// } catch (error) {
	// 	console.log({ error });
	// }
	return data;
}

//Clean this up
//Page should effectively be just that and draw content
//seperate page and component logic
function AuthForm() {
	const emailRef = useRef<HTMLInputElement | null>(); //Correct Types?
	const passwordRef = useRef<HTMLInputElement | null>();
	const router = useRouter();
	//redirect if already logged in
	const { data: session, status } = useSession();

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/");
			}
		});
	}, [router]);

	//Can we seperate this
	const [isLogin, setIsLogin] = useState(true);

	if (status === "loading") {
		return <Typography variant="h3">Loading...</Typography>;
	}
	if (status === "authenticated") {
		return <Typography variant="h3">Redirecting...</Typography>;
	}
	////////////////////////

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(event: any) {
		event.preventDefault();

		console.log("Did we submit");

		const enteredEmail = emailRef.current?.value;
		const enteredPassword = passwordRef.current?.value;
		//sort this out - fairly sure we don't need it
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
				router.replace("/profile");
				//show some kind of loading
			}

			console.log({ result });
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

	//not great / because here is where we would/could use getSession / see use in useEffect up
	//this was called before the redirect to /profile on successful login
	//We need an agreed set behaviour
	// if (session) {
	// 	router.replace("/");
	// }

	return (
		<Container>
			<section>
				<Typography variant="h3" component="h1">
					{isLogin ? "Login" : "Sign Up"}
				</Typography>
				{/* Form in forms component folder / auth */}
				<form onSubmit={submitHandler}>
					<Box>
						<TextField
							inputRef={emailRef}
							label="email"
							type="email"
							variant="outlined"
							required
						></TextField>
					</Box>
					{/* 
					TODO
					Confirm password box 
					*/}
					<Box>
						<TextField
							inputRef={passwordRef}
							label="password"
							type="password"
							variant="outlined"
							required
						></TextField>
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
		</Container>
	);
}

export default AuthForm;
