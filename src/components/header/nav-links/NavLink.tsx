//component width
//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render

import React, { useContext } from "react";
import { BaseLink } from "./BaseLink";

import { EditContext } from "@/src/context/edit-context";
import { Button } from "@mui/material";
import { useUser } from "@/src/hooks/useUser";

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

	const editClickHandler = (route: string) => {
		// console.log("Clicked " + route);
		//temporary alert - you will lose any unsaved information
		//Or if route does not == currentRoute?
		//repeat need to outsource the function
		const usernameIndex = route.indexOf(`/users/${username}`);
		if (usernameIndex === 0) {
			editCtx.setCurrentPageHandler(route);
		}
	};

	//If Edit Context exists replace BaseLink with an EditLink
	//That just passes route to context
	//Not the greatest thing to do but it is the simplest
	//Then edit subheaders will 'navigate' correctly
	//refactor
	if (editCtx.currentPage) {
		return (
			<Button
				color="inherit"
				sx={{ color: "black" }}
				onClick={() => editClickHandler(route)}
				key={label}
			>
				{label}
			</Button>
		);
	}
	//////////////////////////////////
	return <BaseLink link={route} label={label} />;
};
