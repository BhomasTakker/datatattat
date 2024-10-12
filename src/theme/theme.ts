//Dude create an actual theme already
//Need use theme augmentation

import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, common, pink, grey } from "@mui/material/colors";
// import { Acme, Roboto } from "@next/font/google";
// import { Roboto, Risque, Poppins } from "next/font/google";
// https://mui.com/material-ui/customization/theming/#custom-variables
// export const roboto = Roboto({
// 	weight: "400",
// 	subsets: ["latin"],
// });
// export const risque = Risque({
// 	weight: "400",
// 	subsets: ["latin"],
// });
// export const poppins = Poppins({
// 	weight: "400",
// 	// subsets: ["latin"],
// });
export const theme = createTheme({
	typography: {
		// default font
		fontFamily: [
			// roboto.style.fontFamily,
			// risque.style.fontFamily,
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
			main: common.white,
			light: grey[300],
		},

		secondary: {
			main: common.black,
			light: common.white,
		},
	},
});
