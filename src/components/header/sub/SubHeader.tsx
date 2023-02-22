import React from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";

//Need to take data and prefix post fix any titles, icons, extra functionality, etc
export const SubHeader = ({ headerData }: any) => {
	const { nav } = headerData;

	return <NavigationMenu navigationItems={nav} />;
};
