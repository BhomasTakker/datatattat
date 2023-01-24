//redux effetively logging for every pixel move on resize
//Should come back to this and sort out
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@/store/store";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
export enum ScreenWidth {
	XS = "xs",
	SM = "sm",
	MD = "md",
	LG = "lg",
	XL = "xl",
}

export interface CounterState {
	size: Size;
}

const initialState: CounterState = {
	size: ScreenWidth.XS,
};

export const screenSlice = createSlice({
	name: "screen",
	initialState,
	reducers: {
		setScreenSize: (state, action: PayloadAction<ScreenWidth>) => {
			state.size = action.payload;
		},
	},
});

export const { setScreenSize } = screenSlice.actions;

export const screenSize = (state: AppState) => state.screen.size;

export default screenSlice.reducer;
