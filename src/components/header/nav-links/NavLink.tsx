import React, { useContext } from "react";

import { EditContext } from "@/src/context/edit-context";
import { Button } from "@mui/material";
import { useUser } from "@/src/hooks/useUser";
import { COLOURS } from "scss/colours/colours.config";
import Link from "next/link";

import styles from "./NavLink.module.scss";

export type NavLinkData = {
	route: string;
	label: string;
	key?: string;
};

type NavLinkProps = {} & NavLinkData;

export const NavLink = ({ route, label }: NavLinkProps) => {
	const editCtx = useContext(EditContext);
	const { user } = useUser();
	const username = user?.username || "";

	// HACK for edit - should just diverge
	const editClickHandler = (route: string) => {
		//temporary alert - you will lose any unsaved information
		//Or if route does not == currentRoute?
		//repeat need to outsource the function
		const usernameIndex = route.indexOf(`/users/${username}`);
		if (usernameIndex === 0) {
			editCtx.setCurrentPageHandler(route);
		}
	};

	//////////////// HACK /////////////////////////
	//If Edit Context exists replace BaseLink with an EditLink
	//That just passes route to context
	//Not the greatest thing to do but it is the simplest
	//Then edit subheaders will 'navigate' correctly
	//refactor
	if (editCtx.currentPage) {
		return (
			<Button
				sx={{ color: COLOURS.textColourDark }}
				onClick={() => editClickHandler(route)}
				key={label}
			>
				<div>{label}</div>
			</Button>
		);
	}
	//////////////////////////////////
	// return <BaseLink link={route} label={label} />;
	return (
		<div className={styles.root}>
			<Link className={styles.link} href={route}>
				<div className={styles.padding}>{label}</div>
			</Link>
		</div>
	);
};
