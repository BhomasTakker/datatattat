import "../../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../store/store";
import { Layout } from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
