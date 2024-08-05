import { NavigationMenuProps } from "./types";
import { Navigation } from "@/components/header/nav-links/Navigation";
import React from "react";
import classes from "./NavigationMenu.module.scss";

export const NavigationMenu = ({
	navigationItems,
	styles = classes,
}: NavigationMenuProps) => {
	const showNav = !!navigationItems?.length;

	return (
		<div className={classes.root}>
			{showNav && (
				<nav className={classes.toolbar}>
					<Navigation navLinks={navigationItems} />
				</nav>
			)}
		</div>
	);
};
