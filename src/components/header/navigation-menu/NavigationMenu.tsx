import { NavigationMenuProps } from "./types";
import {
	AppBar,
	Box,
	ClickAwayListener,
	Container,
	Stack,
	Toolbar,
} from "@mui/material";
import { Navigation } from "@/components/header/nav-links/Navigation";
import React, { useState } from "react";
import classes from "./NavigationMenu.module.scss";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { NavLinkData } from "../nav-links/NavLink";
import { MoreButton } from "../more/MoreButton";

export const NavigationMenu = ({
	navigationItems,
	prefix = () => <></>,
	postfix = () => <></>,
	styles = classes,
}: NavigationMenuProps) => {
	const [showMore, setShowMore] = useState(false);
	const [isMenuShowing, setIsMenuShowing] = useState(false);

	const subMenuUpdatedHandler = (menuList: NavLinkData[]) => {
		// console.log({ menuList });
		setShowMore(menuList.length > 0);
	};

	//These should all be wrapped in a useCallback
	const showMenuHandler = () => {
		const debounce = setInterval(() => {
			clearInterval(debounce);
			setIsMenuShowing(!isMenuShowing);
		}, 200);
	};

	const clickAwayHandler = () => {
		if (!isMenuShowing) {
			return;
		}

		showMenuHandler();
	};

	return (
		<>
			<AppBar position="static">
				<Container>
					<nav>
						<Toolbar className={styles.toolbar}>
							<Stack direction="row">{prefix()}</Stack>
							{/* name or something */}
							<Box sx={{ overflow: "hidden" }}>
								<Navigation
									navLinks={navigationItems}
									onMenuUpdate={subMenuUpdatedHandler}
								/>
							</Box>
							<Stack direction={"row"} spacing={2}>
								{showMore && <MoreButton onClickHandler={showMenuHandler} />}
								{postfix()}
							</Stack>
						</Toolbar>
					</nav>
				</Container>
			</AppBar>
			<ClickAwayListener
				mouseEvent="onMouseDown"
				touchEvent="onTouchStart"
				onClickAway={clickAwayHandler}
			>
				<Box>
					{/* better name */}
					<DropdownMenu
						links={navigationItems}
						isShowing={isMenuShowing}
						onClose={showMenuHandler}
					/>
				</Box>
			</ClickAwayListener>
		</>
	);
};
