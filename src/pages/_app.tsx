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
import { isConstructorDeclaration } from "typescript";

//Create a Controller
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
	const { session, pageData } = pageProps;
	const { headerData, footerData } = pageData;

	console.log({ session });

	const renderHeader = () => <MainHeader headerData={headerData} />;
	const renderFooter = () => <MainFooter footerData={footerData} />;

	return (
		<SessionProvider
			session={session}
			// Re-fetch session every 5 minutes
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
							{/* Here something - we need to pass pageProps to header */}
							{/* You could well argue that we should use a context here */}
							{/* Then body, header, and footer can all have access to page data without props */}
							{/* Or render props for each */}
							<Layout renderHeader={renderHeader} renderFooter={renderFooter}>
								<Component {...pageProps} />
							</Layout>
						</LocaleProvider>
					</ScreenController>
				</Provider>
			</QueryClientProvider>
		</SessionProvider>
	);
}

export default appWithTranslation(App);
