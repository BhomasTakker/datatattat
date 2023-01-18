import React, { ReactElement, useState } from "react";
//http://reactcommunity.org/react-transition-group/transition-group
//I'd say abstract to something / need go over
//Example from
//https://mui.com/material-ui/transitions/
import { Transition, TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
////////////////////////////////////////////////////////////////////
import { useSession } from "next-auth/react";
import styles from "./main-header.module.css";
import {
	AppBar,
	Toolbar,
	Stack,
	Container,
	Box,
	ClickAwayListener,
} from "@mui/material";
import { DTALogo } from "../../layout/logo/DTALogo";
import { Navigation } from "../nav-links/Navigation";
import { LogInButton } from "../auth/LogInButton";
import { SearchButton } from "../search/SearchButton";
import { UserButton } from "../user/UserButton";
import { LanguageSelector } from "../../navigation/language-select/LanguageSelector";
import { MoreButton } from "../more/MoreButton";
import { NavLink, NavLinkData } from "../nav-links/NavLink";
import { DropdownMenu } from "../dropdown/DropdownMenu";

const LINKS: NavLinkData[] = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "Profile",
		link: "/profile",
	},
	{
		label: "404",
		link: "/404",
	},
	{
		label: "Sign Up",
		link: "/auth/signup",
	},
	{
		label: "Sign In",
		link: "/auth/signin",
	},
	{
		label: "Auth",
		link: "/auth",
	},
];

//this re-renders a lot...
export const MainHeader = () => {
	const [showMore, setShowMore] = useState(false);
	const [isMenuShowing, setIsMenuShowing] = useState(false);

	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";

	//This should possibly all be useContext
	//It all works now but think about it
	const subMenuUpdatedHandler = (menuList: NavLinkData[]) => {
		console.log({ menuList });
		setShowMore(menuList.length > 0);
	};

	//required because if you click the menu button to close
	//two events will be fired cancelling the close...
	const showMenuHandler = () => {
		const debounce = setInterval(() => {
			clearInterval(debounce);
			setIsMenuShowing(!isMenuShowing);
		}, 200);
	};

	const clickAwayHandler = () => {
		if (!isMenuShowing) {
			return;
		}

		showMenuHandler();
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

							<Box sx={{ overflow: "hidden" }}>
								<Navigation
									navLinks={LINKS}
									onMenuUpdate={subMenuUpdatedHandler}
								/>
							</Box>

							<Stack direction={"row"} spacing={2}>
								{showMore && <MoreButton onClickHandler={showMenuHandler} />}
								{/* <LanguageSelector /> */}
								{!isAuthenticated && <LogInButton />}
								{isAuthenticated && <UserButton />}
							</Stack>
						</Toolbar>
					</nav>
				</Container>
			</AppBar>
			{/* Perhaps needs extracting as expected to change - also is here the best place or pass onClose handler? */}
			<ClickAwayListener
				mouseEvent="onMouseDown"
				touchEvent="onTouchStart"
				onClickAway={clickAwayHandler}
			>
				<Box>
					{/* better name */}
					<DropdownMenu
						links={LINKS}
						isShowing={isMenuShowing}
						onClose={showMenuHandler}
					/>
				</Box>
			</ClickAwayListener>
			{/* Would content header go here - or layout? */}
			{/* Abstract some compoennts away from here - to simplify a little  */}
		</header>
	);
};