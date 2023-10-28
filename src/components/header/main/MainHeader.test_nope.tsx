import "@testing-library/jest-dom";

//Integration test since we are using multiple comnponents AND redux store
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockRouter } from "../../../../test-utils/createMockRouter";
import store from "@/store/store";
import { MainHeader } from "@/components/header/main/MainHeader";

//this is not a 'public' import this could change
//perhaps wrap etc
import { RouterContext } from "next/dist/shared/lib/router-context";
import { setupIntersectionalObserverMock } from "../../../../test-utils/setupIntersectionObserver";
import { NextRouter } from "next/router";

let router;
//If a variable render then a function makes sense
const renderHeader = (mock: any) => {
	router = createMockRouter(mock);
	setupIntersectionalObserverMock();
	render(
		<RouterContext.Provider value={router as NextRouter}>
			<Provider store={store}>
				<MainHeader />
			</Provider>
		</RouterContext.Provider>
	);
};

describe("Main Header Integration", () => {
	test("renders MainHeader", () => {
		renderHeader({});
		//should check for logo
	});
	//this test assumes we are not logged in
	//That mock I don't think is working properly at the moment
	test("clicking sign in calls router push method", async () => {
		renderHeader({});
		const signIn = screen.getByRole("button", {
			name: "Sign In",
		});
		fireEvent.click(signIn);

		expect(router.push).toHaveBeenCalled();
	});
});
