import React, { useState } from "react";
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
	Tabs,
	Tab,
	Box,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

import {
	addNotification,
	notificationTypes,
} from "../../../store/notifications/notificationSlice";

import { useAppDispatch } from "../../../store/hooks";
import { NOTIFICATIONS } from "../../../lib/notifications/notifications";
import { useTranslation } from "next-i18next";
import { setLocale } from "../../../store/locale/localeSlice";
import { LanguageType } from "../../../types/locale";
import { DTALogo } from "../../layout/logo/DTALogo";
import { Navigation } from "../tabs/Navigation";
import { LogInButton } from "../auth/LogInButton";
import { SearchButton } from "../search/SearchButton";
import { UserButton } from "../user/UserButton";

export const MainHeader = () => {
	const dispatch = useAppDispatch();
	const { i18n } = useTranslation();
	const [isActive, setIsActive] = useState(0);

	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const { replace, locale, locales, push, pathname } = useRouter();
	const isAuthenticated = status === "authenticated";

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
		const loginHandler = () => {
			push("/auth/signin");
		};
		return (
			<Button color="inherit" onClick={loginHandler}>
				Sign in
			</Button>
		);
	};

	const changeLanguage = (lng: LanguageType) => {
		dispatch(setLocale(lng));
	};

	const handleChange = (e: React.SyntheticEvent, value: number) => {
		console.log({ value });
		setIsActive(value);
	};

	return (
		<header>
			<AppBar position="static">
				<Container>
					<nav>
						<Toolbar className={styles.toolbar}>
							<Stack direction="row">
								<DTALogo />
								{/* Can just be a 'nav icon button' dry with login  */}
								<SearchButton />
							</Stack>

							<Navigation />

							<Stack direction={"row"} spacing={2}>
								{/* <Button color="inherit">Features</Button>*/}
								{/* <Button
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
								</Button> */}

								{!isAuthenticated && <LogInButton />}
								{isAuthenticated && <UserButton />}
							</Stack>
						</Toolbar>
					</nav>
				</Container>
			</AppBar>
		</header>
	);
};
