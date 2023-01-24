import { useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, ReactNode } from "react";
import { useAppDispatch } from "@/store/hooks";
import { ScreenWidth, setScreenSize } from "@/store/screen/screenSlice";

type Props = {
	children: ReactNode;
};

export const ScreenController = ({ children }: Props): ReactElement => {
	const dispatch = useAppDispatch();
	const theme = useTheme();

	//this works perfectly if a little verbose
	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const sm = useMediaQuery(theme.breakpoints.down("md"));
	const md = useMediaQuery(theme.breakpoints.down("lg"));
	const lg = useMediaQuery(theme.breakpoints.down("xl"));
	const xl = !xs && !sm && !md && !lg;

	let size = ScreenWidth.XS;

	if (xs) size = ScreenWidth.XS;
	else if (sm) size = ScreenWidth.SM;
	else if (md) size = ScreenWidth.MD;
	else if (lg) size = ScreenWidth.LG;
	else size = ScreenWidth.XL;

	useEffect(() => {
		dispatch(setScreenSize(size));
	}, [size, dispatch]);

	return <>{children}</>;
};
