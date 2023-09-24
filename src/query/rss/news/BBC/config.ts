import { createSelectEndpoint } from "../../utils/endpoints";
import { BBC_MAIN_ENDPOINT_OBJECTS } from "./endpoint-configs";
import { BBC_MAIN_ENDPOINTS } from "./endpoints";

export const BBC_NEWS_ROOT = createSelectEndpoint({
	id: "bbc_news_root",
	label: "Select Endpoint",
	endpoints: BBC_MAIN_ENDPOINTS,
	defaultEndpoint: "World",
	endpointObjects: BBC_MAIN_ENDPOINT_OBJECTS,
});
