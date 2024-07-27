import { BASE_URL, ROOT, fallback, RumbleEmbedType } from "./rumble.config";

/**
 *
 * @param queryParams WARNING - First click sent me to a 'dangerous' page
 * We prbably want to not use this
 * @returns
 */
export const RUMBLE_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, video } = quearyData;
	let url;

	switch (embedType) {
		case RumbleEmbedType.video:
			url = new URL(`${ROOT}${video}`);
			break;
		default:
			url = new URL(`${ROOT}${fallback}`);
	}

	const returnParams = {
		url: url.toString(),
		dnt: true,
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const RUMBLE_OEMBED_MAP = new Map([
	["rumbleRoot", RUMBLE_ROOT_OEMBED_CREATOR],
]);
