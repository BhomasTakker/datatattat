import { QuerySelector } from "../components/edit/query/query-select";
import { RSS_CONFIG_LIST } from "../rss";
import { API_CONFIG_LIST } from "../api";
import { IFRAMELY_OEMBED_CONFIG_LIST } from "../query/oembed";

export const EDIT_WITH: any = {
	//these in a config etc
	["rss-query"]: QuerySelector({
		title: "RSS Query",
		titleInfo: "RSSTitleInfo",
		providerLabel: "Select RSS Provider",
		providerInfo: "RSSProviderInfo",
		configList: RSS_CONFIG_LIST,
	}),
	["api-query"]: QuerySelector({
		title: "API Query",
		titleInfo: "APITitleInfo",
		providerLabel: "Select API Provider",
		providerInfo: "APIProviderInfo",
		configList: API_CONFIG_LIST,
	}),
	["iframely-oembed-query"]: QuerySelector({
		title: "Oembed Resource",
		// Pass info object no?
		titleInfo: "IframelyOembedTitleInfo",
		providerLabel: "Select Resource",
		providerInfo: "IframelyOIembedResourceProviderInfo",
		configList: IFRAMELY_OEMBED_CONFIG_LIST,
	}),
};
