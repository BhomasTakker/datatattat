import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "../store";

//pefix all with screen and export from a types file/folder
type Dimensions = {
	width: number;
	height: number;
};
//create enums
type Orientation = "portrait" | "landscape";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const determineSize = ({ width }: Dimensions): Size => {
	if (width < 600) {
		return "xs";
	} else if (width < 900) {
		return "sm";
	} else if (width < 1200) {
		return "md";
	} else if (width < 1536) {
		return "lg";
	} else {
		return "xl";
	}
};

export interface CounterState {
	dimensions: Dimensions;
	orientation: Orientation;
	size: Size;
}

const dimensions = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const initialState: CounterState = {
	dimensions,
	orientation: "portrait",
	size: determineSize(dimensions),
};

export const screenSlice = createSlice({
	name: "screen",
	initialState,
	reducers: {
		setDimensions: (state, action: PayloadAction<Dimensions>) => {
			state.dimensions = action.payload;
			state.size = determineSize(action.payload);
		},
		setOrientation: () => {},
	},
});

export const { setDimensions, setOrientation } = screenSlice.actions;

export const screenDimensions = (state: AppState) => state.screen.dimensions;
export const screenOrientation = (state: AppState) => state.screen.orientation;
export const screenSize = (state: AppState) => state.screen.size;

export default screenSlice.reducer;
