// We can argue that an oembed is way different from an api call
// Should an oembed be a completely new type like rss, api, ultimately graphql?
// We will need an html or a meta
enum TIKTOK_OEMBED_ENDPOINTS {
	profile = "profile",
	tweet = "tweet",
	list = "list",
}

// ultimately allow prefix @ for user etc
const endpointTextInput = {
	type: "text",
	id: "endpoint",
	label: "endpoint",
	key: "endpoint",
	info: "",
};

const creatorObject = {
	id: "tiktok_oembed_profile_endpoint",
	setState: false,
	apiId: "tiktokCreatorOembed",
	params: [endpointTextInput],
};

const videoObject = {
	id: "tiktok_oembed_tweet_endpoint",
	setState: false,
	apiId: "tiktokTweetOembed",
	params: [endpointTextInput],
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
