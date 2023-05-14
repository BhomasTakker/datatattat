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
