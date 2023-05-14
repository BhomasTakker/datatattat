export const TIKTOK_VIDEO_PATH = "api/social-media/tiktok/video";
export const TIKTOK_CREATOR_PATH = "api/social-media/tiktok/creator";

export const TIKTOK_BASE_URL = "https://www.tiktok.com/oembed";

//return seems incorrect perhaps

export const TIKTOK_CREATOR_OEMBED_OBJECT = {
	url: `${TIKTOK_CREATOR_PATH}`,
	returns: (data: any) => data,
};

export const TIKTOK_VIDEO_OEMBED_OBJECT = {
	url: `${TIKTOK_VIDEO_PATH}`,
	returns: (data: any) => data,
};
