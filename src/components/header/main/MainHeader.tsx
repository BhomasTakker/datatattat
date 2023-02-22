import React from "react";
//http://reactcommunity.org/react-transition-group/transition-group
//I'd say abstract to something / need go over
//Example from
//https://mui.com/material-ui/transitions/
////////////////////////////////////////////////////////////////////
import { useSession } from "next-auth/react";
import styles from "./main-header.module.css";
import { DTALogo } from "@/components/layout/logo/DTALogo";
import { LogInButton } from "@/components/header/auth/LogInButton";
import { SearchButton } from "@/components/header/search/SearchButton";
import { UserButton } from "@/components/header/user/UserButton";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";
import { SubHeadersList } from "../sub/SubHeadersList";

//Question perhaps in should we use context
//doesn't quite seem required yet
export const MainHeader = ({ headerData }: any) => {
	const [mainHeader, subnav] = headerData;
	const { nav } = mainHeader;

	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";

	//probably call a function from elsewheres same with generating postfix
	const menuPrefix = () => {
		return [<DTALogo key={"Logo"} />, <SearchButton key={"Search"} />];
	};
	const menuPostfix = () => {
		return !isAuthenticated ? <LogInButton /> : <UserButton />;
	};

	return (
		<header>
			<NavigationMenu
				navigationItems={nav}
				prefix={menuPrefix}
				postfix={menuPostfix}
				styles={styles}
			/>
			<SubHeadersList headersArray={subnav} />
		</header>
	);
};
