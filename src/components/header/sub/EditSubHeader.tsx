import React, { ReactElement, useCallback } from "react";
import { EditNavigationMenu } from "../navigation-menu/EditNavigationMenu";
import { SubHeaderProps } from "./types";

//Need to take data and prefix post fix any titles, icons, extra functionality, etc
export const EditSubHeader = ({ headerData }: SubHeaderProps) => {
	const { nav, homeIcon: HomeIcon } = headerData;

	console.log({ headerData });

	const prefix = useCallback((): ReactElement => {
		//This is getting called quite high number of times
		console.log("Create Home Icon");
		return HomeIcon ? HomeIcon : <></>;
	}, [HomeIcon]);

	return <EditNavigationMenu navigationItems={nav} prefix={prefix} />;
};
