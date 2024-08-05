import React, { ReactElement } from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";

// type me
const renderSubMenu = (item: any, i: number): ReactElement => {
	const { nav = [] } = item || {};
	return <NavigationMenu navigationItems={nav} />;
};

const renderList = (list: any[]): ReactElement => {
	return <div>{list.map(renderSubMenu)}</div>;
};

const trimList = (list: any[]) => {
	const { length } = list;
	return length <= 2 ? list : list.slice(length - 2);
};

export const SubHeadersList = ({ headersArray }: { headersArray: any[] }) => {
	if (!headersArray) {
		return <></>;
	}

	// Take in list and reverse
	const reversedList = headersArray.reverse();

	// Show last 2 by default / check if more than 2
	// renderList or split and renderList
	const trimmedList = trimList(reversedList); //if show all show all else

	// enable opening all / have an arrow or something
	// put a little seperator in ? Or main header control
	return renderList(trimmedList);
};
