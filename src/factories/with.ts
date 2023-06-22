import { ReactQueryEdit } from "../components/edit/api-query/ReactQueryEdit";
import { RssQuerySelect } from "../components/edit/rss-query/RssQuerySelectComponent";
import { withRss } from "../components/edit/with/with-rss";

export const EDIT_WITH: any = {
	// query is deprecated
	// return a bespoke component OR
	// Query wrapped in RSS or API
	// That can provide relevant data
	// i.e. titles, info, etc
	["query"]: ReactQueryEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["api-query"]: ReactQueryEdit,
	["rss-query"]: withRss(RssQuerySelect),
};
