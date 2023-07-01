// We can argue that an oembed is way different from an api call
// Should an oembed be a completely new type like rss, api, ultimately graphql?
// We will need an html or a meta
enum TWITTER_OEMBED_ENDPOINTS {
	profile = "profile",
	tweet = "tweet",
	list = "list",
}

const endpointTextInput = {
	type: "text",
	id: "endpoint",
	label: "endpoint",
	key: "endpoint",
	info: "",
};

const profileObject = {
	id: "twitter_oembed_profile_endpoint",
	setState: false,
	apiId: "twitterProfileOembed",
	params: [endpointTextInput],
};

const tweetObject = {
	id: "twitter_oembed_tweet_endpoint",
	setState: false,
	apiId: "twitterTweetOembed",
	params: [endpointTextInput],
};

const listObject = {
	id: "twitter_oembed_profile_endpoint",
	setState: false,
	apiId: "twitterListOembed",
	params: [endpointTextInput],
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
