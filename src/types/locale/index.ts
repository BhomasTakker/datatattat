//https://www.worldatlas.com/articles/which-languages-are-written-from-right-to-left.html
//I'm very confused as to whether hausa is a rtl language!!
//up says no below says yes!
//https://lingohub.com/academy/best-practices/rtl-language-list

//Flags for language is going to be awful controversial!!
//Hausa language is written in both latin script and arabic!!
//Okay I'm not going to worry about it for the timebeing!
//id type
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

export enum LanguageName {
	EN = "English",
	AR = "Arabic",
	EU = "Basque",
	ZH = "Chinese",
	NL = "Dutch",
	HA = "Hausa",
	ES = "Spanish",
	SV = "Swedish",
	TR = "Turkish",
	UK = "Ukranian",
	CY = "Welsh",
}

export enum CountryCode {
	EN = "GB",
	AR = "SA",
	EU = "PS",
	ZH = "CN",
	NL = "NL",
	HA = "NG",
	ES = "ES",
	SV = "SE",
	TR = "TR",
	UK = "UA",
	CY = "GB",
}

export interface ILanguageData {
	id: LanguageType;
	language: LanguageName;
	icon: string; //cdn link
	code: CountryCode;
}

export const languageData = {
	[LanguageType.AR]: {
		id: LanguageType.AR,
		language: LanguageName.AR,
		code: CountryCode.AR,
		icon: `https://flagcdn.com/w20/${CountryCode.AR.toLowerCase()}.png`,
	},
	[LanguageType.CY]: {
		id: LanguageType.CY,
		language: LanguageName.CY,
		code: CountryCode.CY,
		icon: `https://flagcdn.com/w20/${CountryCode.CY.toLowerCase()}.png`,
	},
	[LanguageType.EN]: {
		id: LanguageType.EN,
		language: LanguageName.EN,
		code: CountryCode.EN,
		icon: `https://flagcdn.com/w20/${CountryCode.EN.toLowerCase()}.png`,
	},
	[LanguageType.ES]: {
		id: LanguageType.ES,
		language: LanguageName.ES,
		code: CountryCode.ES,
		icon: `https://flagcdn.com/w20/${CountryCode.ES.toLowerCase()}.png`,
	},
	[LanguageType.EU]: {
		id: LanguageType.EU,
		language: LanguageName.EU,
		code: CountryCode.EU,
		icon: `https://flagcdn.com/w20/${CountryCode.EU.toLowerCase()}.png`,
	},
	[LanguageType.HA]: {
		id: LanguageType.HA,
		language: LanguageName.HA,
		code: CountryCode.HA,
		icon: `https://flagcdn.com/w20/${CountryCode.HA.toLowerCase()}.png`,
	},
	[LanguageType.NL]: {
		id: LanguageType.NL,
		language: LanguageName.NL,
		code: CountryCode.NL,
		icon: `https://flagcdn.com/w20/${CountryCode.NL.toLowerCase()}.png`,
	},
	[LanguageType.SV]: {
		id: LanguageType.SV,
		language: LanguageName.SV,
		code: CountryCode.SV,
		icon: `https://flagcdn.com/w20/${CountryCode.SV.toLowerCase()}.png`,
	},
	[LanguageType.TR]: {
		id: LanguageType.TR,
		language: LanguageName.TR,
		code: CountryCode.TR,
		icon: `https://flagcdn.com/w20/${CountryCode.TR.toLowerCase()}.png`,
	},
	[LanguageType.UK]: {
		id: LanguageType.UK,
		language: LanguageName.UK,
		code: CountryCode.UK,
		icon: `https://flagcdn.com/w20/${CountryCode.UK.toLowerCase()}.png`,
	},
	[LanguageType.ZH]: {
		id: LanguageType.ZH,
		language: LanguageName.ZH,
		code: CountryCode.ZH,
		icon: `https://flagcdn.com/w20/${CountryCode.ZH.toLowerCase()}.png`,
	},
};

export const languagesList: readonly ILanguageData[] = [
	{
		...languageData[LanguageType.AR],
	},
	{
		...languageData[LanguageType.CY],
	},
	{
		...languageData[LanguageType.EN],
	},
	{
		...languageData[LanguageType.ES],
	},
	{
		...languageData[LanguageType.EU],
	},
	{
		...languageData[LanguageType.HA],
	},
	{
		...languageData[LanguageType.NL],
	},
	{
		...languageData[LanguageType.SV],
	},
	{
		...languageData[LanguageType.TR],
	},
	{
		...languageData[LanguageType.UK],
	},
	{
		...languageData[LanguageType.ZH],
	},
];

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
