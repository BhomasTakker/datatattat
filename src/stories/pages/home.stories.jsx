// /stories/pages/home.stories.jsx

import Home from "../../pages/index";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Layout } from "../../components/layout/layout";
import { ScreenController } from "../../components/layout/screen/ScreenController";
export default {
	title: "Pages/Home",
	component: Home,
	decorators: [
		(story) => (
			<Provider store={store}>
				<ScreenController>
					<Layout>{story()}</Layout>
				</ScreenController>
			</Provider>
		),
	],
};

export const HomePage = () => <Home />;
