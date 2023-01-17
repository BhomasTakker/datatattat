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
import { AppBar, Toolbar, Stack, Container, Box } from "@mui/material";
import { DTALogo } from "../../layout/logo/DTALogo";
import { Navigation } from "../nav-links/Navigation";
import { LogInButton } from "../auth/LogInButton";
import { SearchButton } from "../search/SearchButton";
import { UserButton } from "../user/UserButton";
import { LanguageSelector } from "../../navigation/language-select/LanguageSelector";
import { MoreButton } from "../more/MoreButton";
import { NavLink, NavLinkData } from "../nav-links/NavLink";
import Menu from "@mui/icons-material/Menu";
import { BaseLink } from "../nav-links/BaseLink";

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

	const renderSubMenu = (): ReactElement[] => {
		return LINKS.map((link) => (
			<BaseLink
				key={link.label}
				link={link.link}
				label={link.label}
				color="primary"
			/>
		));
	};

	///////////////////////////////
	//We need / or do we?
	//css in modules
	//Begs question what css should be in a module file what shouldn't
	//or is it blanket should unless a dynamic value
	//Overflow hidden in this instance is a requirement or the dynamic nav just won't work
	//And is that the line that answers the question?
	//p.s. language selectr doesn't live here - also needs redoing
	/////////////////////////////////////
	const menuClass = isMenuShowing
		? styles.subMenuClosed + " " + styles.subMenuOpen
		: styles.subMenuClosed;
	// let menuClass = styles.subMenuClosed;
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
								{showMore && (
									<MoreButton
										onClickHandler={() => setIsMenuShowing(!isMenuShowing)}
									/>
								)}
								{/* <LanguageSelector /> */}
								{!isAuthenticated && <LogInButton />}
								{isAuthenticated && <UserButton />}
							</Stack>
						</Toolbar>
					</nav>
				</Container>
			</AppBar>

			{/* Effectively unable to get this working as intended  */}
			{/* <Transition in={isMenuShowing} timeout={500} mountOnEnter unmountOnExit>
				{(state) => (
					<> */}
			<Box className={menuClass}>
				{/* withAnimation  */}

				{renderSubMenu()}

				{/* <TransitionGroup>{renderSubMenu()}</TransitionGroup> */}
			</Box>
			{/* </>
				)}
			</Transition> */}
		</header>
	);
};
