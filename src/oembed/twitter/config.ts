// We can argue that an oembed is way different from an api call
// Should an oembed be a completely new type like rss, api, ultimately graphql?
// We will need an html or a meta
enum TWITTER_OEMBED_ENDPOINTS {
	profile = "profile",
	tweet = "tweet",
	list = "list",
}

const profileTextInput = {
	type: "text",
	id: "profile",
	label: "profile",
	key: "profile",
	info: "Enter the profile you wish to embed. Omit the @.",
};

const listInput = {
	type: "text", // text / length / regex
	id: "listId",
	label: "listId",
	key: "listId",
	info: "Enter the listId you wish to embed. Here's how to get it.",
};

const tweetIdInput = {
	type: "text", // text / length / regex
	id: "tweetId",
	label: "tweetId",
	key: "tweetId",
	info: "Enter the tweetId you wish to embed. Go here/here to get it",
};

const maxWidthParameter = {
	type: "text", // number / range 220 - 550
	id: "maxwidth",
	label: "maxwidth",
	key: "maxwidth",
	info: "",
};

const hideMediaParameter = {
	type: "text", // boolean
	id: "hide_media",
	label: "hide_media",
	key: "hide_media",
	info: "",
};

const hideThreadParameter = {
	type: "text", // boolean
	id: "hide_thread",
	label: "hide_thread",
	key: "hide_thread",
	info: "",
};

const langParameter = {
	type: "text", // boolean
	id: "lang",
	label: "lang",
	key: "lang",
	info: "",
};

const themeParameter = {
	type: "text", // boolean
	id: "theme",
	label: "theme",
	key: "theme",
	info: "",
};

// We need ability to set params without user being able to override
// this would be in query builder server sidesurely

// all toggles
// should be able to minimise toggles
const twitterParameters = [
	maxWidthParameter,
	hideMediaParameter,
	hideThreadParameter,
	langParameter,
	themeParameter,
];

const tweetParams = [profileTextInput, tweetIdInput];

const profileObject = {
	id: "twitter_oembed_profile_endpoint",
	setState: false,
	apiId: "twitterProfileOembed",
	params: [profileTextInput, ...twitterParameters],
};

const tweetObject = {
	id: "twitter_oembed_tweet_endpoint",
	setState: false,
	apiId: "twitterTweetOembed",
	params: [...tweetParams, ...twitterParameters],
};

const listObject = {
	id: "twitter_oembed_profile_endpoint",
	setState: false,
	apiId: "twitterListOembed",
	params: [listInput, ...twitterParameters],
};

const twitterObject = {
	id: "twitter_oembed_endpoint",
	label: "Select Endpoint",
	setState: true, //default

	type: "select",
	endpoints: TWITTER_OEMBED_ENDPOINTS,

	defaultEndpoint: "profile",

	endpointObjects: {
		profile: profileObject,
		tweet: tweetObject,
		list: listObject,
	},
};

export const TWITTER_OEMBED_CONFIG_OBJECT = {
	endpointInput: twitterObject,
};
