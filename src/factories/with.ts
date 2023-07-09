import { API_CONFIG_LIST } from "../api";
import {
	APIQuerySelect,
	ReactQueryEdit,
} from "../components/edit/api-query/ReactQueryEdit";
import { QuerySelector } from "../components/edit/query/query-select";
import { RssQuerySelect } from "../components/edit/rss-query/RssQuerySelectComponent";
import { withRss } from "../components/edit/with/with-rss";
import { RSS_CONFIG_LIST } from "../rss";

export const EDIT_WITH: any = {
	// query is deprecated
	// return a bespoke component OR
	// Query wrapped in RSS or API
	// That can provide relevant data
	// i.e. titles, info, etc
	["query"]: ReactQueryEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["api-query"]: ReactQueryEdit,
	["new-api-query"]: APIQuerySelect,
	// Intention was to wrap a generic query in rss or api, etc
	// that seems a little too far for now
	// potentially of dubious returns for the level of complexity
	// api-query and rss-query are very close in front end functionality...
	["rss-query"]: withRss(RssQuerySelect),

	//these in a config etc
	["update-rss-query"]: QuerySelector({
		title: "RSS Query",
		titleInfo: "RSSTitleInfo",
		providerLabel: "Select RSS Provider",
		providerInfo: "RSSProviderInfo",
		configList: RSS_CONFIG_LIST,
	}),
	["update-api-query"]: QuerySelector({
		title: "API Query",
		titleInfo: "APITitleInfo",
		providerLabel: "Select API Provider",
		providerInfo: "APIProviderInfo",
		configList: API_CONFIG_LIST,
	}),
};
