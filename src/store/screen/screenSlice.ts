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
//why is this a function
const dimensions = () => ({
	width: 0,
	height: 0,
});

const initialState: CounterState = {
	dimensions: dimensions(),
	orientation: "portrait",
	size: determineSize(dimensions()),
};

export const screenSlice = createSlice({
	name: "screen",
	initialState,
	reducers: {
		setDimensions: (state, action: PayloadAction<Dimensions>) => {
			const { width, height } = action.payload;
			//don't actually store dimensions - every pixel change getting stored is not okay!
			// state.dimensions = action.payload;
			state.size = determineSize(action.payload);
			//orientation is really just if width > height === landscape
			state.orientation = width >= height ? "landscape" : "portrait";
		},
		setOrientation: () => {},
	},
});

export const { setDimensions, setOrientation } = screenSlice.actions;

export const screenDimensions = (state: AppState) => state.screen.dimensions;
export const screenOrientation = (state: AppState) => state.screen.orientation;
export const screenSize = (state: AppState) => state.screen.size;

export default screenSlice.reducer;
