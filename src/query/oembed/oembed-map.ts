import { TIKTOK_VIDEO_OEMBED_CREATOR } from "./tiktok/constants";

export const OEMBED_PROVIDERS = {
	tiktok: "tiktok",
} as const;

export const OEMBED_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	["tiktokVideo", TIKTOK_VIDEO_OEMBED_CREATOR],
]);
