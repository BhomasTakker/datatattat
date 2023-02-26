import { NavigationMenuProps } from "./types";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import React from "react";
import classes from "./NavigationMenu.module.scss";
import { EditNavigation } from "../nav-links/EditNavigation";

//This is not really up to standard - not going to work as the main header in mobile - i.e. desktop only
export const EditNavigationMenu = ({
	prefix = () => <></>,
	postfix = () => <></>,
	styles = classes,
}: NavigationMenuProps) => {
	//Edit Navigation Props - not including nav
	return (
		<AppBar position="static">
			<Container>
				<nav>
					<Toolbar className={styles.toolbar}>
						<Stack direction="row">{prefix()}</Stack>
						{/* name or something */}
						<Box sx={{ overflow: "hidden" }}>
							<EditNavigation />
						</Box>
						<Stack direction={"row"} spacing={2}>
							{/* {showMore && <MoreButton onClickHandler={showMenuHandler} />} */}
							{postfix()}
						</Stack>
					</Toolbar>
				</nav>
			</Container>
		</AppBar>
	);
};
