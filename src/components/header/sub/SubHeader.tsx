import React, { ReactElement, useCallback } from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";
import { SubHeaderProps } from "./types";

//Need to take data and prefix post fix any titles, icons, extra functionality, etc
//we are passed the actual mongo document at this point so all data should be available
//logo id? / title - show / don't show
export const SubHeader = ({ headerData }: SubHeaderProps) => {
	//We're returning null if no header found
	//get passed pre and post fix element arrays
	const { nav = [], homeIcon: HomeIcon } = headerData || {};

	const prefix = useCallback((): ReactElement => {
		//This is getting called quite high number of times
		return HomeIcon ? HomeIcon : <></>;
	}, [HomeIcon]);

	//if nav === [] show <></>
	//But maybe we want if title show
	//if prefix/postfix, etc shen show
	//easy enough no?

	if (nav.length > 0) {
		return <NavigationMenu navigationItems={nav} prefix={prefix} />;
	}

	//if prefix
	//if postfix

	return <></>;
};
