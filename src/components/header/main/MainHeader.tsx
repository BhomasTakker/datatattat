import React from "react";
//http://reactcommunity.org/react-transition-group/transition-group
//I'd say abstract to something / need go over
//Example from
//https://mui.com/material-ui/transitions/
////////////////////////////////////////////////////////////////////
import { useSession } from "next-auth/react";
import styles from "./main-header.module.scss";
import { LogInButton } from "@/components/header/auth/LogInButton";
import { UserButton } from "@/components/header/user/UserButton";
import { NavigationMenu } from "../navigation-menu/NavigationMenu";
import { SubHeadersList } from "../sub/SubHeadersList";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import { useFeatureToggle } from "@/src/hooks/useFeatureToggle";
import { IconButton } from "@mui/material";

//Question perhaps in should we use context
//doesn't quite seem required yet
export const MainHeader = ({ headerData }: any) => {
	const [mainHeader, subnav] = headerData || [null, null];
	const { nav = [] } = mainHeader || {};

	const { data: session, status } = useSession();
	const [isEnabled] = useFeatureToggle();
	const isLogin = isEnabled("membership-enabled");

	const isAuthenticated = status === "authenticated";

	//probably call a function from elsewheres same with generating postfix
	const menuPrefix = () => {
		return [
			// button AND link is wildly wrong
			// <Link href={"/"} key={"Home"}>
			// Works but background is skewed
			<IconButton
				color="inherit"
				aria-label="Home"
				LinkComponent={Link}
				href="/"
				key="home"
			>
				<HomeIcon />
			</IconButton>,
			// </Link>,
		];
	};
	const menuPostfix = () => {
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
			{subnav && <SubHeadersList headersArray={subnav} />}
		</header>
	);
};
