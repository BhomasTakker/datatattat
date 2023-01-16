//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { NavLink, NavLinkData } from "./NavLink";

//ts todo - specify NavLink
//get links from a config
const LINKS: NavLinkData[] = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "Profile",
		link: "/profile",
	},
	{
		label: "404",
		link: "/404",
	},
	{
		label: "Sign Up",
		link: "/auth/signup",
	},
	{
		label: "Sign In",
		link: "/auth/signin",
	},
	{
		label: "Auth",
		link: "/auth",
	},
];

// type LinkData = {
// 	isVisible: boolean;
// } & NavLinkData;

type NavigationProps = {
	onMenuUpdate: (menuList: NavLinkData[]) => void;
};

//dynamic list from props
export const Navigation = ({ onMenuUpdate }: NavigationProps) => {
	const boxRef = useRef<null | HTMLDivElement>(null);
	let menuLinks: NavLinkData[] = [];

	const onIntersect = (data: NavLinkData, isVisible: boolean) => {
		// console.log({ data });
		// console.log({ isVisible });

		if (isVisible) {
			menuLinks = menuLinks.filter((link) => data.label !== link.label);
			onMenuUpdate(menuLinks);
		} else {
			//
			if (menuLinks.find((item) => item.label === data.label)) {
				return;
			}
			menuLinks.splice(0, 0, { ...data });
			onMenuUpdate(menuLinks);
		}

		// console.log({ menuLinks });
	};

	const drawNavLinks = (links: NavLinkData[]) => {
		return links.map((link) => {
			const element = (
				<NavLink
					link={link.link}
					label={link.label}
					key={link.label}
					container={boxRef.current}
					onIntersect={onIntersect}
				></NavLink>
			);
			return element;
		});
	};

	return (
		<Box ref={boxRef}>
			<Stack direction="row">{drawNavLinks(LINKS)}</Stack>
		</Box>
	);
};
