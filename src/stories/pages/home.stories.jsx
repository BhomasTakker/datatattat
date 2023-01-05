// /stories/pages/home.stories.jsx

import Home from "../../pages/index";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Layout } from "../../components/layout/layout";

export default {
	title: "Pages/Home",
	component: Home,
	decorators: [
		(story) => (
			<Provider store={store}>
				<Layout>{story()}</Layout>
			</Provider>
		),
	],
};

export const HomePage = () => <Home />;
