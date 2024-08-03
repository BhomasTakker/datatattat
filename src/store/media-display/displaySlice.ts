import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@/store/store";

type Displays = {
	[key: string]: string;
};

type SetDisplay = {
	key: string;
	value: string;
};

export interface DisplayState {
	displays: Displays;
}

const initialState: DisplayState = {
	displays: {},
};

export const mediaDisplaySlice = createSlice({
	name: "display",
	initialState,
	reducers: {
		setMediaSource: (state, action: PayloadAction<SetDisplay>) => {
			const { key, value } = action.payload;
			state.displays[key] = value;
		},
	},
});

export const { setMediaSource } = mediaDisplaySlice.actions;

export const mediaSource = (state: AppState) => state.display.displays;

export default mediaDisplaySlice.reducer;
