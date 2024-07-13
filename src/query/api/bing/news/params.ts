import { EditInputs } from "@/src/components/edit/inputs/input.map";

//https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/reference/query-parameters
export const mainParams = [
	{
		type: EditInputs.text,
		id: "q",
		label: "q",
		key: "q",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "cc",
		label: "cc",
		key: "cc",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "category",
		label: "category",
		key: "category",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "count",
		label: "count",
		key: "count",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "freshness",
		label: "freshness",
		key: "freshness",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "mkt",
		label: "mkt",
		key: "mkt",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "offset",
		label: "offset",
		key: "offset",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "originalImg",
		label: "originalImg",
		key: "originalImg",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "safeSearch",
		label: "safeSearch",
		key: "safeSearch",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "setLang",
		label: "setLang",
		key: "setLang",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "since",
		label: "since",
		key: "since",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "sortBy",
		label: "sortBy",
		key: "sortBy",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "textDecorations",
		label: "textDecorations",
		key: "textDecorations",
		info: "",
	},
	{
		type: EditInputs.textToggle,
		id: "textFormat",
		label: "textFormat",
		key: "textFormat",
		info: "",
	},
];
