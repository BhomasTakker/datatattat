import "../../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../store/store";
import { Layout } from "../components/layout/layout";
import { ScreenController } from "../components/layout/screen/ScreenController";

export default function App({ Component, pageProps }: AppProps) {
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
				<ScreenController>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ScreenController>
			</Provider>
		</SessionProvider>
	);
}
