const BASE_URL = "https://www.tiktok.com";

// pass in more than params
export const TIKTOK_VIDEO_OEMBED_CREATOR = (queryParams: any) => {
	const { username, videoId } = queryParams;
	// delete queryParams.username; // not okay make a copy
	// delete queryParams.videoId;
	const returnParams = {
		...queryParams,
		username: undefined,
		videoId: undefined,
		url: `${BASE_URL}/${username}/video/${videoId}`,
	};

	return {
		headers: {},
		returns: (data: any) => data, // <- this needs a big work
		queryParams: returnParams,
	};
};
