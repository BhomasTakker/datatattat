//https://www.worldatlas.com/articles/which-languages-are-written-from-right-to-left.html
//I'm very confused as to whether hausa is a rtl language!!
//up says no below says yes!
//https://lingohub.com/academy/best-practices/rtl-language-list

//Hausa language is written in both latin script and arabic!!
//Okay I'm not going to worry about it for the timebeing!

export enum LanguageType {
	EN = "en",
	AR = "ar",
	EU = "eu",
	ZH = "zh",
	NL = "nl",
	HA = "ha",
	ES = "es",
	SV = "sv",
	TR = "tr",
	UK = "uk",
	CY = "cy",
}

export enum RtlType {
	AR = "ar",
	ARC = "arc",
	DV = "dv",
	FA = "fa",
	// HA = "ha", //if using arabic script ...
	HE = "he",
	KHW = "khw",
	KS = "ks",
	KU = "ku",
	PS = "ps",
	UR = "ur",
	YI = "yi",
}

export enum LocaleDir {
	LTR = "ltr",
	RTL = "rtl",
}

export const rightToLeftLanguages = [
	"ar",
	"arc",
	"dv",
	"fa",
	"hs",
	"he",
	"khw",
	"ks",
	"ku",
	"ps",
	"ur",
	"yi",
];
