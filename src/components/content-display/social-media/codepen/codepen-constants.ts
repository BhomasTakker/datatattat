import { BASE_URL, ROOT, fallback, CodePenEmbedType } from "./codepen.config";

export const CODEPEN_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route } = quearyData;
	let url;

	switch (embedType) {
		case CodePenEmbedType.route:
			url = new URL(`${ROOT}${route}`);
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

export const CODEPEN_OEMBED_MAP = new Map([
	["codePenRoot", CODEPEN_ROOT_OEMBED_CREATOR],
]);
