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
const iframelyParams = {
	api_key: `${process.env.IFRAMELY_API_KEY}`,
	iframe: 1,
	omit_script: 1,
	// lazy: 1, // something killed it!
	// consent: 1, //try 0
	maxheight: 600,
};
///////////////////////////////////////////
// Update / not on iframely
export const TIKTOK_OEMBED_CREATOR_OBJECT = (data: any) => {
	const url = `https://tiktok.com/${data.user}`;
	const returnData = { ...data, url };
	delete returnData.user;
	return {
		url: `https://www.tiktok.com/oembed`,
		returns: (data: any) => data,
		data: returnData,
	};
};

// should really just put it through an iframely
// i.e. return iframely({...});
export const TIKTOK_OEMBED_VIDEO_OBJECT = (data: any) => {
	const url = `https://tiktok.com/${data.user}/video/${data.videoId}`;
	const returnData = { ...data, url };
	delete returnData.user;
	delete returnData.videoId;
	return {
		// url: "https://cdn.iframe.ly/api/iframely",
		// returns: (data: any) => data,
		data: returnData,
	};
};

export const TIKTOK_OEMBED_OBJECT = {
	creator: TIKTOK_OEMBED_CREATOR_OBJECT,
	video: TIKTOK_OEMBED_VIDEO_OBJECT,
};
