import { BASE_URL, ROOT, TumblrEmbedType } from "./tumblr.config";

export const TUMBLR_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, username, post } = quearyData;
	let url;
	let returnParams = {};

	switch (embedType) {
		case TumblrEmbedType.post:
			url = new URL(`${ROOT}${post}`);
			returnParams = {
				url: url.toString(),
			};
			break;
		default:
			url = new URL(`${ROOT}${"datatattat"}/${""}`);
			returnParams = {
				url: url.toString(),
			};
	}

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const TUMBLR_OEMBED_MAP = new Map([
	["tumblrRoot", TUMBLR_ROOT_OEMBED_CREATOR],
]);
