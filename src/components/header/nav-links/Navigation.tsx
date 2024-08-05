import React from "react";
import { NavLink, NavLinkData } from "./NavLink";
import styles from "./Navigation.module.scss";

type NavigationProps = {
	navLinks: NavLinkData[];
};

// Potentially an abstract too far
// We aren't adding much more than a div
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

	// Double div so we can center the nav
	return <div className={styles.root}>{drawNavLinks(navLinks)}</div>;
};
