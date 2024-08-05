import { IconButton } from "@mui/material";
import styles from "./navigation-header.module.scss";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import { useFeatureToggle } from "@/src/hooks/useFeatureToggle";
import { useSession } from "next-auth/react";
import { LogInButton } from "../auth/LogInButton";
import { UserButton } from "../user/UserButton";

type NavigationHeader = {};

const Logo = () => {
	return (
		<IconButton
			className={styles.logo}
			aria-label="Home"
			LinkComponent={Link}
			href="/"
			key="home"
		>
			<HomeIcon />
		</IconButton>
	);
};

const Datatattat = () => {
	return (
		<div className={styles.logoContainer}>
			<Link href={"/"} key={"Home"} aria-hidden>
				{/* Pull from state - We should have a state config */}
				<h2 className={styles.logo}>DATATATTAT</h2>
			</Link>
		</div>
	);
};

const UserLogin = () => {
	const [isEnabled] = useFeatureToggle();
	const isFeatureEnabled = isEnabled("membership-enabled");

	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";

	return !isAuthenticated ? (
		<LogInButton isDisabled={!isFeatureEnabled} />
	) : (
		<UserButton isDisabled={!isFeatureEnabled} />
	);
};

export const NavigationHeader = ({}: NavigationHeader) => {
	return (
		<nav className={styles.root}>
			<Logo />
			<Datatattat />
			<UserLogin />
		</nav>
	);
};
