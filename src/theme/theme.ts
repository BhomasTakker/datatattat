//Dude create an actual theme already
//Need use theme augmentation

import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
// import { Acme, Roboto } from "@next/font/google";
import { Roboto, Risque, Poppins } from "@next/font/google";
// https://mui.com/material-ui/customization/theming/#custom-variables
export const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});
export const risque = Risque({
	weight: "400",
	subsets: ["latin"],
});
export const poppins = Poppins({
	weight: "400",
	// subsets: ["latin"],
});
export const theme = createTheme({
	typography: {
		// default font
		fontFamily: [
			roboto.style.fontFamily,
			risque.style.fontFamily,
			// poppins.style.fontFamily,
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	palette: {
		primary: {
			main: orange[500],
			light: orange[300],
		},
		// @ts-ignore think it's a chore to sort out
		highlights: {
			main: alpha(orange[300], 0.3),
			light: alpha(orange[300], 0.1),
		},
	},
});
