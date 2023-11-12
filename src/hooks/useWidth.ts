import { useMediaQuery, useTheme } from "@mui/material";

// export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export enum ScreenWidth {
	XS = "xs",
	SM = "sm",
	MD = "md",
	LG = "lg",
	XL = "xl",
}

// Cheap and choppy
export const useWidth = () => {
	const theme = useTheme();

	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const sm = useMediaQuery(theme.breakpoints.down("md"));
	const md = useMediaQuery(theme.breakpoints.down("lg"));
	const lg = useMediaQuery(theme.breakpoints.down("xl"));

	let size = ScreenWidth.XS;

	if (xs) size = ScreenWidth.XS;
	else if (sm) size = ScreenWidth.SM;
	else if (md) size = ScreenWidth.MD;
	else if (lg) size = ScreenWidth.LG;
	else size = ScreenWidth.XL;

	return size;
};
