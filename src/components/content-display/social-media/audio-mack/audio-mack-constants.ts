import {
	BASE_URL,
	ROOT,
	fallback,
	AudioMackEmbedType,
} from "./audio-mack.config";

export const AUDIO_MACK_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, song, album, artist, playlist } = quearyData;
	let url;

	// There is a player and an event endpoint also
	switch (embedType) {
		case AudioMackEmbedType.song:
			url = new URL(`${ROOT}${artist}/song/${song}`);
			break;
		case AudioMackEmbedType.album:
			url = new URL(`${ROOT}${artist}/album/${album}`);
			break;
		case AudioMackEmbedType.playlist:
			url = new URL(`${ROOT}${artist}/playlist/${playlist}`);
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

export const AUDIO_MACK_OEMBED_MAP = new Map([
	["audioMackRoot", AUDIO_MACK_ROOT_OEMBED_CREATOR],
]);
