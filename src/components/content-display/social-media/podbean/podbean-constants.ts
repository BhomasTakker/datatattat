import {
	BASE_URL,
	createRoot,
	fallback,
	PodbeanEmbedType,
} from "./podbean.config";

export const PODBEAN_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, username, episode } = quearyData;
	let url;

	const ROOT = createRoot(username);
	// There is a player and an event endpoint also
	switch (embedType) {
		case PodbeanEmbedType.episode:
			url = new URL(`${ROOT}${episode}`);
			break;
		default:
			url = new URL(`${ROOT}${fallback}`);
	}

	const returnParams = {
		url: url.toString(),
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const PODBEAN_OEMBED_MAP = new Map([
	["podbeanRoot", PODBEAN_ROOT_OEMBED_CREATOR],
]);
