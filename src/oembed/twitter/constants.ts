export const TWEET_PATH = "api/social-media/twitter/tweet"; //LOCAL_PATH
export const LIST_PATH = "api/social-media/twitter/list"; //LOCAL_PATH
export const PROFILE_PATH = "api/social-media/twitter/profile"; //LOCAL_PATH

export const TWITTER_BASE_URL = "https://publish.twitter.com/oembed";

//return seems incorrect perhaps

//We know the return data shape
export const TWITTER_PROFILE_OEMBED_OBJECT = {
	url: `${PROFILE_PATH}`,
	returns: (data: any) => data,
};

export const TWITTER_LIST_OEMBED_OBJECT = {
	url: `${LIST_PATH}`,
	returns: (data: any) => data,
};

export const TWITTER_TWEET_OEMBED_OBJECT = {
	url: `${TWEET_PATH}`,
	returns: (data: any) => data,
};

// https://publish.twitter.com/oembed/url=?https://twitter.com/aoc
////////////////////////////////
// if this is a function by default and we pass in the query, etc
// we can do it easily
export const TWITTER_OEMBED_PROFILE_OBJECT = (data: any) => {
	const url = `https://twitter.com/${data.profile}`;
	const returnData = { ...data, url };
	delete returnData.profile;
	return {
		url: "https://publish.twitter.com/oembed",
		returns: (data: any) => data,
		data: returnData,
	};
};

export const TWITTER_OEMBED_LIST_OBJECT = (data: any) => {
	const url = `https://twitter.com/i/lists/${data.listId}`;
	const returnData = { ...data, url };
	delete returnData.listId;
	return {
		url: `https://publish.twitter.com/oembed/`,
		returns: (data: any) => data,
		data,
	};
};

export const TWITTER_OEMBED_TWEET_OBJECT = (data: any) => {
	const url = `https://twitter.com/${data.profile}/status/${data.tweetId}`;
	const returnData = { ...data, url };
	delete returnData.profile;
	delete returnData.tweetId;

	return {
		url: `https://publish.twitter.com/oembed/`,
		returns: (data: any) => data,
		data,
	};
};

export const TWITTER_OEMBED_OBJECT = {
	profile: TWITTER_OEMBED_PROFILE_OBJECT,
	list: TWITTER_OEMBED_LIST_OBJECT,
	tweet: TWITTER_OEMBED_TWEET_OBJECT,
};
