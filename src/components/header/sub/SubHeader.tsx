import React, { ReactElement, useCallback } from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";
import { SubHeaderProps } from "./types";

//Need to take data and prefix post fix any titles, icons, extra functionality, etc
export const SubHeader = ({ headerData }: SubHeaderProps) => {
	// if(!headerData){
	// 	return <></>;
	// }
	//We're returning null if no header found
	const { nav = [], homeIcon: HomeIcon } = headerData || {};

	const prefix = useCallback((): ReactElement => {
		//This is getting called quite high number of times
		return HomeIcon ? HomeIcon : <></>;
	}, [HomeIcon]);

	return <NavigationMenu navigationItems={nav} prefix={prefix} />;
};
