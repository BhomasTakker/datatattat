// With something like flickr - wouldn't you just reference the image location?
// take from config

import { BASE_URL, ROOT, fallback, FlickrEmbedType } from "./flickr.config";

export const FLICKR_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, user, page } = quearyData;
	let url;

	// There is a player and an event endpoint also
	switch (embedType) {
		case FlickrEmbedType.user:
			url = new URL(`${ROOT}photos/${user}`);
			break;
		case FlickrEmbedType.page:
			url = new URL(`${ROOT}${page}`);
			break;
		// we need if page etc doen't exist then default
		// new URL would fail so throw
		default:
			url = new URL(`${ROOT}${fallback}`);
	}

	// there are some
	// This maybe should be done in oembed?
	// return the defaults?
	const returnParams = {
		url: url.toString(),
		dnt: true,
		format: "json",
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const FLICKR_OEMBED_MAP = new Map([
	["flickrRoot", FLICKR_ROOT_OEMBED_CREATOR],
]);
