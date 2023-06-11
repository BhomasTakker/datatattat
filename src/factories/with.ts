import { ReactQueryEdit } from "./ReactQueryEdit";
import { RssQueryEdit } from "../components/edit/rss/RssQueryEdit";

export const EDIT_WITH: any = {
	// query is deprecated
	["query"]: ReactQueryEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["api-query"]: ReactQueryEdit,
	["rss-query"]: RssQueryEdit,
};
