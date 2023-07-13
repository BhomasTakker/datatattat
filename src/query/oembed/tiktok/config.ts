const username = {
	type: "text",
	id: "username",
	label: "username",
	key: "username",
};

const videoId = {
	type: "text",
	id: "videoId",
	label: "videoId",
	key: "videoId",
};

export const TIKTOK_VIDEO_ROOT = {
	id: "tiktok_video_endpoint",
	label: "Select Endpoint",

	queryId: "tiktokVideo",

	params: [username, videoId], // required?

	info: "id or explanation - or just an explanation",

	// Our list of conversions
	// object default conversion, & list
	conversions: {},
};
