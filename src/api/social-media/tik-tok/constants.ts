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

///////////////////////////////////////////
// Update
export const TIKTOK_OEMBED_CREATOR_OBJECT = (data: any) => ({
	url: `https://www.tiktok.com/${data.endpoint}`,
	returns: (data: any) => data,
	data,
});

export const TIKTOK_OEMBED_VIDEO_OBJECT = (data: any) => ({
	url: `https://www.tiktok.com/${data.user}/video/${data.videoId}`,
	returns: (data: any) => data,
	data,
});

export const TIKTOK_OEMBED_OBJECT = {
	creator: TIKTOK_OEMBED_CREATOR_OBJECT,
	video: TIKTOK_OEMBED_VIDEO_OBJECT,
};
