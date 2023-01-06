import { Provider } from "react-redux";
import store from "../../../store/store";
import { ScreenController } from "../screen/ScreenController";
import Display3 from "./Display3";

export default {
	title: "Components/content/display/Display3",
	component: Display3,
	decorators: [
		(story) => (
			<Provider store={store}>
				<ScreenController>{story()}</ScreenController>
			</Provider>
		),
	],
};

export const Display = () => <Display3 />;
