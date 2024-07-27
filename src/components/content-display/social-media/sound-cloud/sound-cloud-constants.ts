import {
	BASE_URL,
	ROOT,
	fallback,
	SoundCloudEmbedType,
} from "./sound-cloud.config";

export const SOUND_CLOUD_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route, showcase, group, channel, ondemand } = quearyData;
	let url;

	switch (embedType) {
		case SoundCloudEmbedType.route:
			url = new URL(`${ROOT}${route}`);
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

export const SOUND_CLOUD_OEMBED_MAP = new Map([
	["soundCloudRoot", SOUND_CLOUD_ROOT_OEMBED_CREATOR],
]);
