// https://developers.google.com/youtube/player_parameters

enum YOUTUBE_OEMBED_ENDPOINTS {
	watch = "watch",
	playlist = "playlist",
	user = "user",
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

const watchTextInput = {
	type: "text", // boolean
	id: "v",
	label: "video",
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
	id: "listId",
	label: "listId",
	key: "listId",
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

const youtubeObject = {
	id: "youtube_iframe_embed_endpoint",
	label: "Select Endpoint",
	setState: true, //default

	type: "select",
	endpoints: YOUTUBE_OEMBED_ENDPOINTS,

	defaultEndpoint: "watch",

	endpointObjects: {
		watch: watchObject,
		playlist: playlistObject,
		user: userObject,
	},
};

export const YOUTUBE_OEMBED_CONFIG_OBJECT = {
	endpointInput: youtubeObject,
};
