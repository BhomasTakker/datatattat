const BASE_URL = "https://www.tiktok.com/oembed";
const ROOT = "https://www.tiktok.com/";
const datatattat = "@datatattat";
// WE NEED TO UPDATE AND REDO FROM HERE SAY
// We have updated the X ones need update these

const PLAYER = "https://www.tiktok.com/player/v1/";

// pass in more than params
// export const TIKTOK_VIDEO_OEMBED_CREATOR = (queryParams: any) => {
// 	const { username, videoId } = queryParams;
// 	// delete queryParams.username; // not okay make a copy
// 	// delete queryParams.videoId;
// 	const returnParams = {
// 		...queryParams,
// 		username: undefined,
// 		videoId: undefined,
// 		url: `${ROOT}${username}/video/${videoId}`,
// 	};

// 	return {
// 		headers: {},
// 		returns: (data: any) => data, // <- this needs a big work
// 		queryParams: returnParams,
// 	};
// };

type TikTokOembedProps = {
	profile: string;
	video: string;
	embedType: string;
};

export type TikTokOembedCreator = {
	quearyData: TikTokOembedProps;
};

// https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173
const TIKTOK_ROOT_OEMBED_CREATOR = (queryParams: TikTokOembedCreator) => {
	const { quearyData } = queryParams;
	const { profile, video, embedType } = quearyData;

	let url = "";

	switch (embedType) {
		case "profile":
			url = `${ROOT}${profile}`;
			break;
		case "video":
			url = `${ROOT}${profile}/video/${video}`;
			break;
		default:
			url = `${ROOT}${datatattat}`;
	}

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: { url },
	};
};

export const TIKTOK_OEMBED_MAP = new Map([
	["tikTokRoot", TIKTOK_ROOT_OEMBED_CREATOR],
]);
