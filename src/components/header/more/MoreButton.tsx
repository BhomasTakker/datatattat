import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { screenSize, ScreenWidth } from "../../../store/screen/screenSlice";

export const MoreButton = () => {
	const size = useAppSelector(screenSize);

	const moreHandler = () => {};

	if (size === ScreenWidth.XS) {
		return (
			<IconButton color="inherit" aria-label="search" onClick={moreHandler}>
				<MenuIcon />
			</IconButton>
		);
	}

	return (
		<IconButton color="inherit" aria-label="user" onClick={moreHandler}>
			<MoreHorizIcon />
		</IconButton>
	);
};
