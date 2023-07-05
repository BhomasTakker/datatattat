// https://developers.google.com/youtube/player_parameters

enum YOUTUBE_OEMBED_ENDPOINTS {
	watch = "watch",
	playlist = "playlist",
	user = "user",
	shorts = "shorts",
}

// const formatParameter = {
// 	type: "text", // select
// 	id: "format",
// 	label: "format",
// 	key: "format",
// 	info: "",
// 	// default: json
// 	// disabled: true
// };
const shortsTextInput = {
	type: "text", // boolean
	id: "videoId",
	label: "video id",
	key: "videoId",
	info: "",
};

const watchTextInput = {
	type: "text", // boolean
	id: "v",
	label: "video id",
	key: "v",
	info: "",
};

const userTextInput = {
	type: "text", // boolean
	id: "username",
	label: "username",
	key: "username",
	info: "",
};

const playlistTextInput = {
	type: "text", // boolean
	id: "list",
	label: "listId",
	key: "list",
	info: "",
};

const watchObject = {
	id: "youtube_oembed_watch_endpoint",
	setState: false,
	apiId: "youtubeWatch",
	params: [watchTextInput],
};

const userObject = {
	id: "youtube_oembed_user_endpoint",
	setState: false,
	apiId: "youtubeUser",
	params: [userTextInput],
};

const playlistObject = {
	id: "youtube_oembed_playlist_endpoint",
	setState: false,
	apiId: "youtubePlaylist",
	params: [playlistTextInput],
};

const shortsObject = {
	id: "youtube_oembed_shorts_endpoint",
	setState: false,
	apiId: "youtubeShorts",
	params: [shortsTextInput],
};

const youtubeObject = {
	id: "youtube_oembed_embed_endpoint",
	label: "Select Endpoint",
	setState: true, //default

	type: "select",
	endpoints: YOUTUBE_OEMBED_ENDPOINTS,

	defaultEndpoint: "watch",

	endpointObjects: {
		watch: watchObject,
		playlist: playlistObject,
		user: userObject,
		shorts: shortsObject,
	},
};

export const YOUTUBE_OEMBED_CONFIG_OBJECT = {
	endpointInput: youtubeObject,
};
