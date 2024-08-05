import { NavLinkData } from "../nav-links/NavLink";

export type NavigationMenuProps = {
	navigationItems: NavLinkData[];
	styles?: {
		readonly [key: string]: string;
	};
};
