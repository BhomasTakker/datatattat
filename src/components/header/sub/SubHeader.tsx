import React from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";

//Need be an array of these / show only the last two unless expand all
//This is effectively 90% the same as MainHeader
//We should find a way of re-using
//It feels like pass in an element to render before nav and after nav
//That is the only difference
export const SubHeader = ({ headersArray }: any) => {
	if (!headersArray) {
		return <></>;
	}
	const data = headersArray[0];
	const { nav } = data;

	return <NavigationMenu navigationItems={nav} />;
};
