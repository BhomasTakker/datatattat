import React, { FC, ReactComponentElement } from "react";
import { useSession, signOut } from "next-auth/react";
import styles from "./main-header.module.css";
import {
	AppBar,
	Button,
	Toolbar,
	IconButton,
	Stack,
	Typography,
	Container,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

import {
	addNotification,
	notificationTypes,
} from "../../store/notifications/notificationSlice";

import { useAppDispatch } from "../../store/hooks";
import { NOTIFICATIONS } from "../../lib/notifications/notifications";
import { useTranslation } from "next-i18next";
import { setLocale } from "../../store/locale/localeSlice";
import { LanguageType } from "../../types/locale";

export const MainHeader = () => {
	const dispatch = useAppDispatch();
	const { i18n } = useTranslation();

	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const { replace, locale, locales, push, pathname } = useRouter();
	const isAuthenticated = status === "authenticated";
	//so stuff only on authenticated
	// if (status === "authenticated") {
	// 	console.log({ user: session.user });
	// }
	// console.log({ status });

	//Obviously use link
	const tempProfileHandler = () => {
		replace("/profile");
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

	const changeLanguage = (lng: LanguageType) => {
		// i18n.changeLanguage(lng);/not in next - or next-118 one of
		// if (lng !== "en") {
		// 	document.dir = "rtl";
		// } else {
		// 	document.dir = "ltr";
		// }
		dispatch(setLocale(lng));
		// replace(pathname, undefined, { locale: lng });
	};

	return (
		<header>
			<AppBar position="static">
				<Container>
					<nav>
						<Toolbar className={styles.toolbar}>
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
							<Typography>{`Locale ${locale}`}</Typography>
							<Stack direction={"row"} spacing={2}>
								{/* <Button color="inherit">Features</Button>*/}
								<Button
									color="inherit"
									onClick={() => changeLanguage(LanguageType.EN)}
								>
									EN &#9872;
								</Button>
								<Button
									color="inherit"
									onClick={() => changeLanguage(LanguageType.AR)}
								>
									AR &#127462;
								</Button>
								<Button color="inherit" onClick={tempProfileHandler}>
									Profile
								</Button>
								{showAuthButton(isAuthenticated)}
							</Stack>
						</Toolbar>
					</nav>
				</Container>
			</AppBar>
		</header>
	);
};
