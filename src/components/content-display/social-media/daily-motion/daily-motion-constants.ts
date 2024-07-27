// With something like dailyMotion - wouldn't you just reference the image location?
// take from config

import {
	BASE_URL,
	ROOT,
	fallback,
	DailyMotionEmbedType,
} from "./daily-motion.config";

export const DAILY_MOTION_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, video } = quearyData;
	let url;

	// There is a player and an event endpoint also
	switch (embedType) {
		case DailyMotionEmbedType.video:
			// these variations should be in config or somewhere
			url = new URL(`${ROOT}video/${video}`);
			break;
		default:
			url = new URL(`${ROOT}video/${fallback}`);
	}

	// there are some
	// This maybe should be done in oembed?
	// return the defaults?
	const returnParams = {
		url: url.toString(),
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const DAILY_MOTION_OEMBED_MAP = new Map([
	["dailyMotionRoot", DAILY_MOTION_ROOT_OEMBED_CREATOR],
]);
