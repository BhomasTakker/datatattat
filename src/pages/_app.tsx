import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "@/store/store";
import { Layout } from "@/components/layout/page/layout";
import { ScreenController } from "@/components/layout/screen/ScreenController";
import { appWithTranslation } from "next-i18next";
import { LocaleProvider } from "@/components/layout/locale/LocaleProvider";

function App({ Component, pageProps }: AppProps) {
	const { session } = pageProps;
	return (
		<SessionProvider
			session={session}
			// Re-fetch session every 5 minutes
			refetchInterval={5 * 60}
			// Re-fetches session when window is focused
			refetchOnWindowFocus={true}
		>
			<Provider store={store}>
				{/* Layout or behaviours etc */}
				{/* Have a behaviours and a layout so we don't end up with 100s of nesting? */}
				<ScreenController>
					<LocaleProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</LocaleProvider>
				</ScreenController>
			</Provider>
		</SessionProvider>
	);
}

export default appWithTranslation(App);
