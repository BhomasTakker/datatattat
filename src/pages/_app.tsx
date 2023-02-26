import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "@/store/store";
import { Layout } from "@/components/layout/page/layout";
import { ScreenController } from "@/components/layout/screen/ScreenController";
import { appWithTranslation } from "next-i18next";
import { LocaleProvider } from "@/components/layout/locale/LocaleProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainHeader } from "../components/header/main/MainHeader";
import { MainFooter } from "../components/footer/MainFooter";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
	},
});

//Create a Controller
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
	const { session, pageData, headerData, footerData } = pageProps;
	// const { header, footer } = pageData;

	// console.log({ session });
	// console.log({ headerData });
	// console.log({ pageData });

	const renderHeader = () =>
		headerData ? <MainHeader headerData={headerData} /> : <></>;
	const renderFooter = () => <MainFooter footerData={footerData} />;

	return (
		<SessionProvider
			session={session}
			// Re-fetch session every 5 minutes
			//This is what resets our edit periodically
			//Would it be any component that is using useUser and you just don't notice elsewhere?
			refetchInterval={10}
			// Re-fetches session when window is focused
			refetchOnWindowFocus={true}
		>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					{/* Layout or behaviours etc */}
					{/* Have a behaviours and a layout so we don't end up with 100s of nesting? */}
					<ScreenController>
						<LocaleProvider>
							{/* Theme manager - manage themes - we will need to change theme - light/dark/dyslexia/colorBlind mode etc */}
							{/* Argument for nested themes eventually - i.e. a user to brand there own pages/content */}
							<ThemeProvider theme={theme}>
								<CssBaseline />
								{/* Here something - we need to pass pageProps to header */}
								{/* You could well argue that we should use a context here */}
								{/* Then body, header, and footer can all have access to page data without props */}
								{/* Or render props for each */}
								<Layout renderHeader={renderHeader} renderFooter={renderFooter}>
									<Component {...pageProps} />
								</Layout>
							</ThemeProvider>
						</LocaleProvider>
					</ScreenController>
				</Provider>
			</QueryClientProvider>
		</SessionProvider>
	);
}

export default appWithTranslation(App);
