// /stories/pages/home.stories.jsx

import Home from "../../pages/index";
import { LocaleProvider } from "../../components/layout/locale/LocaleProvider";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Layout } from "../../components/layout/page/layout";
import { ScreenController } from "../../components/layout/screen/ScreenController";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
export default {
	title: "Pages/Home",
	component: Home,
	decorators: [
		(story) => (
			// <SessionProvider
			// 	session={session}
			// 	// Re-fetch session every 5 minutes
			// 	refetchInterval={5 * 60}
			// 	// Re-fetches session when window is focused
			// 	refetchOnWindowFocus={true}
			// >
			<Provider store={store}>
				<ScreenController>
					<LocaleProvider>
						<Layout>{story()}</Layout>
					</LocaleProvider>
				</ScreenController>
			</Provider>
			// </SessionProvider>
		),
	],
};

export const HomePage = (props) => {
	const session = useSession();
	return <Home {...props} />;
};

HomePage.args = {
	nextAuthMock: {
		session: "unknown",
	},
};
