import { QuerySelector } from "../components/edit/query/query-select";
import { NEW_RSS_CONFIG_LIST, RSS_CONFIG_LIST } from "../query/rss";
import { API_CONFIG_LIST } from "../query/api";
import { XLSX_CONFIG_LIST } from "../query/xlsx";
import { FILE_CONFIG_LIST } from "../query/file";
import { CUSTOM_DATA_CONFIG_LIST } from "../query/customData";

export const EDIT_WITH: any = {
	["new-rss-query"]: QuerySelector({
		title: "RSS Query",
		titleInfo: "RSSTitleInfo",
		providerLabel: "Select RSS Provider",
		providerInfo: "RSSProviderInfo",
		configList: NEW_RSS_CONFIG_LIST,
	}),
	// ["oembed-query"]: QuerySelector({
	// 	title: "Oembed Resource",
	// 	// Pass info object no?
	// 	titleInfo: "OembedTitleInfo",
	// 	providerLabel: "Select Oembed ",
	// 	providerInfo: "OembedResourceProviderInfo",
	// 	configList: OEMBED_CONFIG_LIST,
	// }),
	/////////////////////////////////////////////////

	//these in a config etc
	["rss-query"]: QuerySelector({
		title: "RSS Query",
		titleInfo: "RSSTitleInfo",
		providerLabel: "Select RSS Provider",
		providerInfo: "RSSProviderInfo",
		configList: RSS_CONFIG_LIST,
	}),

	// Should just be an input?
	// Query selector would not be correct in this instance
	// Currently we have fudged to work but should update
	["custom-data"]: QuerySelector({
		title: "Custom Data",
		titleInfo: "CustomDataTitleInfo",
		providerLabel: "Select Data Type",
		providerInfo: "ThinkThisIsVoid",
		configList: CUSTOM_DATA_CONFIG_LIST,
	}),
	["api-query"]: QuerySelector({
		title: "API Query",
		titleInfo: "APITitleInfo",
		providerLabel: "Select API Provider",
		providerInfo: "APIProviderInfo",
		configList: API_CONFIG_LIST,
	}),
	// ["iframely-oembed-query"]: QuerySelector({
	// 	title: "Oembed Resource",
	// 	// Pass info object no?
	// 	titleInfo: "IframelyOembedTitleInfo",
	// 	providerLabel: "Select Resource",
	// 	providerInfo: "IframelyOIembedResourceProviderInfo",
	// 	configList: IFRAMELY_OEMBED_CONFIG_LIST,
	// }),
	///////////////////////////////////////
	["xlsx-query"]: QuerySelector({
		title: "XLSX Query",
		titleInfo: "XLSXTitleInfo",
		// We would just need to pass in a url
		providerLabel: "Select Resource",
		providerInfo: "What-is-this?",
		configList: XLSX_CONFIG_LIST,
	}),

	["file-query"]: QuerySelector({
		title: "File Query",
		titleInfo: "FileTitleInfo",
		// We would just need to pass in a url
		providerLabel: "Select Resource",
		providerInfo: "What-is-this?",
		configList: FILE_CONFIG_LIST,
	}),
	//////////////////////////////////////////////
	// This would be different / look into this
	// Not a resource select / it is a provide url
	// Get Meta data from it
	////////////////////////////////////////
	// Fake it - i.e. get this meta data
	// Or get open graph meta data
	// get twitter metadata
	// get all, etc
	["html-meta-query"]: QuerySelector({
		title: "HTML Meta Query",
		titleInfo: "HTMLMetaTitleInfo",
		// We would just need to pass in a url
		providerLabel: "Select Resource",
		providerInfo: "HTMLMetaQueryInfo",
		configList: new Map([]), // wut? / just unused I guess
	}),
};
