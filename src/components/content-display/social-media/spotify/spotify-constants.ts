import { BASE_URL, ROOT, fallback, SpotifyEmbedType } from "./spotify.config";

export const SPOTIFY_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route, showcase, group, channel, ondemand } = quearyData;
	let url;

	switch (embedType) {
		case SpotifyEmbedType.route:
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

export const SPOTIFY_OEMBED_MAP = new Map([
	["spotifyRoot", SPOTIFY_ROOT_OEMBED_CREATOR],
]);
