import React, { FC, ReactComponentElement } from "react";
import { useSession, signOut } from "next-auth/react";
import {
	AppBar,
	Button,
	Toolbar,
	IconButton,
	Stack,
	Typography,
	Container,
} from "@mui/material";
import styles from "./MainHeader.module.css";
import { CatchingPokemon } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

import {
	addNotification,
	notificationTypes,
} from "../../store/notifications/notificationSlice";
import { useAppDispatch } from "../../store/hooks";
import { NOTIFICATIONS } from "../../../config/notifications/notifications";

export const MainHeader = () => {
	const dispatch = useAppDispatch();
	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const router = useRouter();
	const isAuthenticated = status === "authenticated";
	//so stuff only on authenticated
	// if (status === "authenticated") {
	// 	console.log({ user: session.user });
	// }
	// console.log({ status });

	//Obviously use link
	const tempProfileHandler = () => {
		router.replace("/profile");
	};

	const logoutHandler = async () => {
		//because we are using useSession here we will automatically re-render
		//https://next-auth.js.org/getting-started/client#signout
		//Prob have all NextAuth calls in a lib?? So we're not all oer the place
		const response = await signOut({
			redirect: false,
		});

		dispatch(addNotification(NOTIFICATIONS.userLoggedOut));
		//assume logout successful!
	};

	const showAuthButton = (userAuthenticated: boolean) => {
		if (userAuthenticated) {
			return (
				<Button color="inherit" onClick={logoutHandler}>
					Logout
				</Button>
			);
		}
		return <Button color="inherit">Login</Button>;
	};

	return (
		<AppBar position="static">
			<Container>
				<nav>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="logo"
						>
							<CatchingPokemon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							POKEMONAPP
						</Typography>
						<Stack direction={"row"} spacing={2}>
							{/* <Button color="inherit">Features</Button>
							<Button color="inherit">Pricing</Button>
							<Button color="inherit">About</Button> */}
							<Button color="inherit" onClick={tempProfileHandler}>
								Profile
							</Button>
							{showAuthButton(isAuthenticated)}
						</Stack>
					</Toolbar>
				</nav>
			</Container>
		</AppBar>
	);
};
