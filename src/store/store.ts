//https://github.com/vercel/next.js/tree/canary/examples/with-redux

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import screenReducer from "./screen/screenSlice";
import notificationReducer from "./notifications/notificationSlice";
import localeSlice from "./locale/localeSlice";
import displaySlice from "./media-display/displaySlice";

export function makeStore() {
	return configureStore({
		reducer: {
			screen: screenReducer,
			notification: notificationReducer,
			locale: localeSlice,
			display: displaySlice,
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
