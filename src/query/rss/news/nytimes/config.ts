// https://www.nytimes.com/rss
import { baseRSSConversion } from "../../rss-feed.config";
import { NYTIMES_ENDPOINT_OBJECTS } from "./endpoint-configs";
import { NYTIMES_NEWS_ENDPOINTS } from "./endpoints";

// And this is just a select
export const NYTIMES_ROOT = {
	id: "nytimes_endpoint",
	label: "Select Endpoint",
	type: "select",

	endpoints: NYTIMES_NEWS_ENDPOINTS,
	defaultEndpoint: "World",

	params: [],

	info: "id or explanation - or just an explanation",

	endpointObjects: NYTIMES_ENDPOINT_OBJECTS,

	//not actually needed here
	conversions: baseRSSConversion,
};
