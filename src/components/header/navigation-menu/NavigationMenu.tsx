import { NavigationMenuProps } from "./types";
import { Box, Container, Stack, Toolbar } from "@mui/material";
import { Navigation } from "@/components/header/nav-links/Navigation";
import React from "react";
import classes from "./NavigationMenu.module.scss";
import Link from "next/link";

export const NavigationMenu = ({
	navigationItems,
	prefix = () => <></>,
	postfix = () => <></>,
	styles = classes,
}: NavigationMenuProps) => {
	return (
		<Container className={classes.root}>
			<nav className={styles.topBar}>
				<Stack direction="row">{prefix()}</Stack>
				<div className={classes.logoContainer}>
					<Link href={"/"} key={"Home"} aria-hidden>
						<h2 className={classes.logo}>DATATATTAT</h2>
					</Link>
				</div>
				<Stack direction={"row"} spacing={2}>
					{postfix()}
				</Stack>
			</nav>
			<nav>
				<Toolbar className={styles.toolbar}>
					<Box sx={{ overflow: "hidden" }}>
						<Navigation navLinks={navigationItems} />
					</Box>
				</Toolbar>
			</nav>
		</Container>
	);
};
