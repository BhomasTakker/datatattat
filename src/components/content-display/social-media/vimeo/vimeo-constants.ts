// take from config

import {
	BASE_URL,
	ROOT,
	ALBUM,
	CHANNEL,
	GROUP,
	ONDEMAND,
	fallbackVideo,
	VimeoEmbedType,
} from "./vimeo.config";

export const VIMEO_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, video, showcase, group, channel, ondemand } = quearyData;
	let url;

	// There is a player and an event endpoint also
	switch (embedType) {
		case VimeoEmbedType.video:
			url = new URL(`${ROOT}${video}`);
			break;
		case VimeoEmbedType.showcaseVideo:
			url = new URL(`${ALBUM}${showcase}/video/${video}`);
			break;
		case VimeoEmbedType.channelVideo:
			url = new URL(`${CHANNEL}${channel}/${video}`);
			break;
		case VimeoEmbedType.groupVideo:
			url = new URL(`${GROUP}${group}/videos/${video}`);
			break;
		case VimeoEmbedType.onDemandVideo:
			url = new URL(`${ONDEMAND}${ondemand}/${video}`);
			break;
		default:
			url = new URL(`${ROOT}${fallbackVideo}`);
	}

	// there are some
	const returnParams = {
		url: url.toString(),
		dnt: true,
		maxwidth: 800,
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const VIMEO_OEMBED_MAP = new Map([
	["vimeoRoot", VIMEO_ROOT_OEMBED_CREATOR],
]);
