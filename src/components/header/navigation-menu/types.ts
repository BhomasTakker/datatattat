import { ReactElement } from "react";
import { NavLinkData } from "../nav-links/NavLink";

export type NavigationMenuProps = {
	prefix?: () => ReactElement | ReactElement[];
	postfix?: () => ReactElement | ReactElement[];
	navigationItems: NavLinkData[];
	styles?: {
		readonly [key: string]: string;
	};
};
