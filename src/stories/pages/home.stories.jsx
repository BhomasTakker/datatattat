// /stories/pages/home.stories.jsx

import Home from "../../../pages/index";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Layout } from "../../components/layout/layout";

export default {
	title: "Pages/Home",
	component: Home,
};

export const HomePage = () => (
	<Provider store={store}>
		<Layout>
			<Home />
		</Layout>
	</Provider>
);
