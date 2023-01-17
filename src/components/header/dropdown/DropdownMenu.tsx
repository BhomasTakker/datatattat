import { Box, Stack } from "@mui/material";
import React, { ReactElement } from "react";
import { BaseLink } from "../nav-links/BaseLink";
import { NavLinkData } from "../nav-links/NavLink";
import styles from "./DropDownMenu.module.css";

type DropdownMenuProps = {
	onClose: () => void;
	links: NavLinkData[];
	isShowing: boolean;
};

export const DropdownMenu = ({
	links,
	isShowing,
	onClose,
}: DropdownMenuProps) => {
	const menuClass = isShowing
		? styles.subMenu + " " + styles.subMenuOpen
		: styles.subMenu;

	const renderSubMenu = (): ReactElement[] => {
		return links.map((link) => (
			<BaseLink
				key={link.label}
				link={link.link}
				label={link.label}
				color="primary"
			/>
		));
	};
	return (
		<Box className={menuClass}>
			<Box className={styles.grid}>{renderSubMenu()}</Box>
		</Box>
	);
};
