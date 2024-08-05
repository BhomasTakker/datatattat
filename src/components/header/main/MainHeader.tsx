import React from "react";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";
import { SubHeadersList } from "../sub/SubHeadersList";
import { NavigationHeader } from "./navigation-header";

export const MainHeader = ({ headerData }: any) => {
	const [mainHeader, subnav] = headerData || [null, null];
	const { nav = [] } = mainHeader || {};

	return (
		<header>
			<NavigationHeader />
			<NavigationMenu navigationItems={nav} />
			{subnav && <SubHeadersList headersArray={subnav} />}
		</header>
	);
};
