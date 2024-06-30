//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render
import React from "react";
import { NavLink, NavLinkData } from "./NavLink";
import styles from "./Navigation.module.scss";

type NavigationProps = {
	navLinks: NavLinkData[];
	// onMenuUpdate: (menuList: NavLinkData[]) => void;
};

//dynamic list from props
export const Navigation = ({ navLinks }: NavigationProps) => {
	const drawNavLinks = (links: NavLinkData[]) => {
		return links.map((link) => {
			const element = (
				<NavLink
					route={link.route}
					label={link.label}
					key={link.label}
				></NavLink>
			);
			return element;
		});
	};

	return <div className={styles.root}>{drawNavLinks(navLinks)}</div>;
};
