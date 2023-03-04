import React, { ReactElement, useCallback } from "react";
import { EditNavigationMenu } from "./EditNavigationMenu";
import { SubHeaderProps } from "../sub/types";

//Need to take data and prefix post fix any titles, icons, extra functionality, etc
export const EditSubHeader = ({ headerData }: SubHeaderProps) => {
	const { homeIcon: HomeIcon } = headerData;

	const prefix = useCallback((): ReactElement => {
		//This is getting called quite high number of times
		// console.log("Create Home Icon");
		return HomeIcon ? HomeIcon : <></>;
	}, [HomeIcon]);

	return <EditNavigationMenu prefix={prefix} />;
};
