// import { withA11y } from "@storybook/addon-a11y";

import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/lib/i18n/i18n";
import { theme } from "../src/theme/theme";
// import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
// i18n;
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	//https://storybook.js.org/docs/react/essentials/backgrounds
	backgrounds: {
		default: "light",
		values: [
			{
				name: "light",
				value: "#ddd",
			},
			{
				name: "dark",
				value: "#333",
			},
		],
	},
};

const withI18next = (Story) => {
	return (
		// This catches the suspense from components not yet ready (still loading translations)
		// Alternative: set useSuspense to false on i18next.options.react when initializing i18next
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};

const withMuiTheme = (Story) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	);
};

export const decorators = [withI18next, withMuiTheme];
