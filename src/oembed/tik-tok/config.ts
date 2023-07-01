// There are wsome cheeky things you can do with tiktok embeds
// Hashtags and playlists, etc
//https://www.tiktok.com/embed/?type=video

// We can argue that an oembed is way different from an api call
// Should an oembed be a completely new type like rss, api, ultimately graphql?
// We will need an html or a meta
enum TIKTOK_OEMBED_ENDPOINTS {
	creator = "creator",
	video = "video",
}

// ultimately allow prefix @ for user etc
const userTextInput = {
	type: "text",
	id: "user",
	label: "user",
	key: "user",
	info: "Input user. Please include the @ prefixing user name. ",
};

const videoIdInput = {
	type: "text",
	id: "videoId",
	label: "videoId",
	key: "videoId",
	info: "Input video id. Here's how to get it.",
};

const creatorObject = {
	id: "tiktok_oembed_profile_endpoint",
	setState: false,
	apiId: "tiktokCreatorOembed",
	params: [userTextInput],
};

const videoObject = {
	id: "tiktok_oembed_video_endpoint",
	setState: false,
	apiId: "tiktokVideoOembed",
	params: [userTextInput, videoIdInput],
};

const tiktokObject = {
	id: "tiktok_oembed_endpoint",
	label: "Select Endpoint",
	setState: true, //default

	type: "select",
	endpoints: TIKTOK_OEMBED_ENDPOINTS,

	defaultEndpoint: "creator",

	endpointObjects: {
		creator: creatorObject,
		video: videoObject,
	},
};

export const TIKTOK_OEMBED_CONFIG_OBJECT = {
	endpointInput: tiktokObject,
};
