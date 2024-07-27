import {
	BASE_URL,
	ROOT,
	fallback,
	MixCloudEmbedType,
} from "./mix-cloud.config";

export const MIX_CLOUD_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route } = quearyData;
	let url;

	// There is a player and an event endpoint also
	switch (embedType) {
		case MixCloudEmbedType.route:
			url = new URL(`${ROOT}${route}`);
			break;
		default:
			url = new URL(`${ROOT}${fallback}`);
	}

	// there are some
	const returnParams = {
		url: url.toString(),
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const MIX_CLOUD_OEMBED_MAP = new Map([
	["mixCloudRoot", MIX_CLOUD_ROOT_OEMBED_CREATOR],
]);
