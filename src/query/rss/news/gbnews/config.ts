import { baseRSSConversion } from "../../rss-feed.config";
import { GBNEWS_MAIN_ENDPOINT_OBJECTS } from "./endpoint-configs";
import { GBNEWS_MAIN_ENDPOINTS } from "./endpoints";

export const GBNEWS_ROOT = {
	id: "gbnews_endpoint",
	label: "Select Endpoint",
	type: "select",

	endpoints: GBNEWS_MAIN_ENDPOINTS,
	defaultEndpoint: "News",

	params: [],

	info: "id or explanation - or just an explanation",

	endpointObjects: GBNEWS_MAIN_ENDPOINT_OBJECTS,

	conversions: baseRSSConversion,
};
