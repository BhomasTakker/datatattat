import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { screenSize, ScreenWidth } from "../../../store/screen/screenSlice";

export const SearchButton = () => {
	const { push } = useRouter();
	const size = useAppSelector(screenSize);

	//This is just an icon button
	//that displays differently on small screen
	//props label, href, and icon, makes this generic

	const searchHandler = () => {
		push("/auth/search");
	};

	if (size === ScreenWidth.XS) {
		return (
			<IconButton color="inherit" aria-label="search" onClick={searchHandler}>
				<SearchIcon />
			</IconButton>
		);
	}

	return (
		<Button startIcon={<SearchIcon />} color="inherit" onClick={searchHandler}>
			Search
		</Button>
	);
};
