import { createBasicEndpoint } from "../../utils/endpoints";

export const MAIN_ENDPOINT_OBJECTS = {
	["Top Stories"]: createBasicEndpoint({ id: "bbc_news_top_stories_endpoint" }),
	World: createBasicEndpoint({ id: "bbc_news_world_endpoint" }),
	UK: createBasicEndpoint({ id: "bbc_news_uk_endpoint" }),
};
