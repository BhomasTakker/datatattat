import "@/styles/globals.css";
//import all from overides? - this should be a temp solution
import "@/styles/overides/SelectInput.styles.css";
import "@/styles/overides/AccordionDetails.styles.css";
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
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme/theme";
import { FeatureContextProvider } from "../context/feature-context";
interface highlightsColor {
	main: string;
	light?: string;
	dark?: string;
}

//Create a Controller
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
	const { session, pageData, headerData, footerData } = pageProps;

	//Why have we done this?
	const renderHeader = () =>
		headerData ? <MainHeader headerData={headerData} /> : <></>;
	const renderFooter = () => <MainFooter footerData={footerData} />;

	return (
		<SessionProvider
			session={session}
			// Re-fetch session every 5 minutes
			//This is what resets our edit periodically
			//Would it be any component that is using useUser and you just don't notice elsewhere?
			refetchInterval={5 * 60}
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
								<FeatureContextProvider
								// value={{ enabledFeatures: ["sign-in", "edit"] }}
								>
									<Layout
										renderHeader={renderHeader}
										renderFooter={renderFooter}
									>
										<Component {...pageProps} />
									</Layout>
								</FeatureContextProvider>
							</ThemeProvider>
						</LocaleProvider>
					</ScreenController>
				</Provider>
			</QueryClientProvider>
		</SessionProvider>
	);
}

export default appWithTranslation(App);
