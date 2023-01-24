import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import { screenSize, ScreenWidth } from "@/store/screen/screenSlice";

type MoreButtonProps = { onClickHandler: () => void };
export const MoreButton = ({ onClickHandler }: MoreButtonProps) => {
	const size = useAppSelector(screenSize);

	// const moreHandler = () => {};

	if (size === ScreenWidth.XS) {
		return (
			<IconButton color="inherit" aria-label="search" onClick={onClickHandler}>
				<MenuIcon />
			</IconButton>
		);
	}

	return (
		<IconButton color="inherit" aria-label="user" onClick={onClickHandler}>
			<MoreHorizIcon />
		</IconButton>
	);
};
