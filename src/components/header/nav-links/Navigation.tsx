//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { NavLink, NavLinkData } from "./NavLink";

// type LinkData = {
// 	isVisible: boolean;
// } & NavLinkData;

type NavigationProps = {
	navLinks: NavLinkData[];
	onMenuUpdate: (menuList: NavLinkData[]) => void;
};

//dynamic list from props
export const Navigation = ({ onMenuUpdate, navLinks }: NavigationProps) => {
	const boxRef = useRef<null | HTMLDivElement>(null);
	let menuLinks: NavLinkData[] = [];

	const onIntersect = (data: NavLinkData, isVisible: boolean) => {
		//technically not being used for anything at the moment
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
			<Stack direction="row">{drawNavLinks(navLinks)}</Stack>
		</Box>
	);
};
