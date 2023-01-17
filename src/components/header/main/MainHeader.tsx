import React, { useState } from "react";
//http://reactcommunity.org/react-transition-group/transition-group
//I'd say abstract to something / need go over
//Example from
//https://mui.com/material-ui/transitions/
import { TransitionGroup } from "react-transition-group";
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

//this re-renders a lot...
export const MainHeader = () => {
	const [showMore, setShowMore] = useState(false);
	const [isOverflowVisible, setIsOverflowVisible] = useState(false);
	const [overflowMenuList, setOverflowMenuList] = useState<NavLinkData[]>([]);
	// let overflowMenuList: NavLinkData[] = [];

	//perhaps better got from user store then user getAuthenticated
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";

	//This should possibly all be useContext
	//It all works now but think about it
	const subMenuUpdatedHandler = (menuList: NavLinkData[]) => {
		// console.log({ menuList });
		setShowMore(menuList.length > 0);
		// // setOverflowMenuList(menuList);
		// console.log({ overflowMenuList });
	};

	// const createOverflowMenu = () => {
	// 	return overflowMenuList.map((link) => (
	// 		<BaseLink link={link.link} label={link.label} key={link.label}></BaseLink>
	// 	));
	// };

	// const renderOverflowMenu = () => {
	// 	const menu = isOverflowVisible ? createOverflowMenu() : [];
	// 	console.log({ menu });
	// 	console.log({ overflowMenuList });
	// 	console.log({ isOverflowVisible });
	// 	return <Collapse key="Overflow-Menu">{menu}</Collapse>;
	// };

	///////////////////////////////
	//We need / or do we?
	//css in modules
	//Begs question what css should be in a module file what shouldn't
	//or is it blanket should unless a dynamic value
	//Overflow hidden in this instance is a requirement or the dynamic nav just won't work
	//And is that the line that answers the question?
	//p.s. language selectr doesn't live here - also needs redoing
	/////////////////////////////////////
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
								<Navigation onMenuUpdate={subMenuUpdatedHandler} />
							</Box>

							<Stack direction={"row"} spacing={2}>
								{showMore && (
									<MoreButton
										onClickHandler={() => console.log("menu clicked")}
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
			{/* <Box sx={{ mt: 1, width: "100%", backgroundColor: "white" }}>
				<TransitionGroup>{renderOverflowMenu()}</TransitionGroup>
			</Box> */}
		</header>
	);
};
