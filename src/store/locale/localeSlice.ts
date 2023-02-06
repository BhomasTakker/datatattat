//https://mui.com/material-ui/guides/right-to-left/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageType, LocaleDir, rightToLeftLanguages } from "@/types/locale";

import type { AppState, AppThunk } from "@/store/store";

export interface LocaleState {
	language: LanguageType;
	rtl: boolean;
	dir: LocaleDir;
}

//get initial state from cookies - or how next does it?
const initialState: LocaleState = {
	language: LanguageType.EN,
	rtl: false,
	dir: LocaleDir.LTR,
	// activeNotifications: [],
};

function checkIsRtl(code: LanguageType): boolean {
	//es2017 syntax
	// if(Object.values(RtlType).includes(code)){}
	const truthy = rightToLeftLanguages.includes(code);
	// console.log({ truthy });
	// console.log({ code });
	// console.log({ rightToLeftLanguages });
	return truthy;
}

export const localeSlice = createSlice({
	name: "locale",
	initialState,
	reducers: {
		setLocale: (state, action: PayloadAction<LanguageType>) => {
			state.language = action.payload;
			state.rtl = checkIsRtl(action.payload);
			state.dir = checkIsRtl(action.payload) ? LocaleDir.RTL : LocaleDir.LTR;
		},
	},
});

export const { setLocale } = localeSlice.actions;

export const locale = (state: AppState) => state.locale.language;
export const rtl = (state: AppState) => state.locale.rtl;
export const dir = (state: AppState) => state.locale.dir;

export default localeSlice.reducer;
