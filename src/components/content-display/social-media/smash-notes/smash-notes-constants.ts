import {
	BASE_URL,
	ROOT,
	fallback,
	SmashNotesEmbedType,
} from "./smash-notes.config";

export const SMASH_NOTES_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route } = quearyData;
	let url;

	switch (embedType) {
		case SmashNotesEmbedType.route:
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

export const SMASH_NOTES_OEMBED_MAP = new Map([
	["smashNotesRoot", SMASH_NOTES_ROOT_OEMBED_CREATOR],
]);
