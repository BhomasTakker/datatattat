import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "../store";

export enum notificationTypes {
	error = "error",
	success = "success",
	warning = "warning",
	info = "info",
}

export type Notification = {
	id: string;
	message: string;
	type: notificationTypes;
	i18n: string;
};

export interface NavigationState {
	notifications: Notification[];
	activeNotification: Notification | null;
	// activeNotifications: Notification[];
}

const initialState: NavigationState = {
	notifications: [],
	activeNotification: null,
	// activeNotifications: [],
};

export const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<Notification>) => {
			state.notifications.push({ ...action.payload });
			state.activeNotification = { ...action.payload };
			// state.activeNotifications.push({...action.payload});
		},
		//Not sure we would actually need to do this?
		//doesn't hurt to?
		removeActiveNotification: (state) => {
			state.activeNotification = null;
		},
	},
});

export const { addNotification, removeActiveNotification } =
	notificationSlice.actions;

export const notifications = (state: AppState) =>
	state.notification.notifications;
export const activeNotification = (state: AppState) =>
	state.notification.activeNotification;
// export const activeNotifications = (state: AppState) =>
// 	state.notification.activeNotifications;

export default notificationSlice.reducer;
