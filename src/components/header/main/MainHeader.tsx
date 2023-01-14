import React from "react";
import { useSession, signOut } from "next-auth/react";
import styles from "./main-header.module.css";
import { AppBar, Toolbar, Stack, Container } from "@mui/material";

import { addNotification } from "../../../store/notifications/notificationSlice";

import { useAppDispatch } from "../../../store/hooks";
import { NOTIFICATIONS } from "../../../lib/notifications/notifications";
import { DTALogo } from "../../layout/logo/DTALogo";
import { Navigation } from "../tabs/Navigation";
import { LogInButton } from "../auth/LogInButton";
import { SearchButton } from "../search/SearchButton";
import { UserButton } from "../user/UserButton";
import { LanguageSelector } from "../../navigation/language-select/LanguageSelector";

export const MainHeader = () => {
	const dispatch = useAppDispatch();

	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";

	//create & mobve to usermenu drop down
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
								<LanguageSelector />
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
