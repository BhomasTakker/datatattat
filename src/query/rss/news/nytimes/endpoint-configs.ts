import {
	createBasicEndpoint,
	createSelectEndpoint,
} from "../../utils/endpoints";
import { NYTIMES_NEWS_WORLD_ENDPOINTS } from "./endpoints";

export const NYTIMES_ENDPOINT_OBJECTS = {
	Homepage: createBasicEndpoint({ id: "nytimes_homepage" }),
	World: createSelectEndpoint({
		id: "nytimes_world",
		label: "Select World Endpoint",
		endpoints: NYTIMES_NEWS_WORLD_ENDPOINTS,
		defaultEndpoint: "World",
	}),
	["WorldHeadlines"]: createBasicEndpoint({ id: "nytimes_world_headlines" }),
	US: createBasicEndpoint({ id: "nytimes_us" }),
	["New York"]: createBasicEndpoint({ id: "nytimes_newyork" }),
	Business: createBasicEndpoint({ id: "nytimes_business" }),
	Technology: createBasicEndpoint({ id: "nytimes_technology" }),
	Sports: createBasicEndpoint({ id: "nytimes_sports" }),
	Science: createBasicEndpoint({ id: "nytimes_science" }),
	Health: createBasicEndpoint({ id: "nytimes_health" }),
};
