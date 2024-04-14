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
import link from "next/link";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import { useFeatureToggle } from "@/src/hooks/useFeatureToggle";

//Question perhaps in should we use context
//doesn't quite seem required yet
export const MainHeader = ({ headerData }: any) => {
	const [mainHeader, subnav] = headerData;
	const { nav } = mainHeader;

	const { data: session, status } = useSession();
	const [isEnabled] = useFeatureToggle();
	const isLogin = isEnabled("membership-enabled");

	const isAuthenticated = status === "authenticated";

	//probably call a function from elsewheres same with generating postfix
	const menuPrefix = () => {
		return [
			<Link href={"/"} key={"Home"}>
				<HomeIcon />
			</Link>,
		];
		return [
			// Goto 'home' if logo exists
			<Link href={"/"} key={"Logo"}>
				<DTALogo />
			</Link>,
			<SearchButton key={"Search"} />,
		];
	};
	const menuPostfix = () => {
		console.log("999111", { isLogin, isEnabled });
		if (!isLogin) {
			return <></>;
		}
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
