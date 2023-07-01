import { TIKTOK_OEMBED_OBJECT } from "./tik-tok/constants";
import { TWITTER_OEMBED_OBJECT } from "./twitter/constants";

export const OEMBED_MAP = new Map<string, object>([
	["twitterProfileOembed", TWITTER_OEMBED_OBJECT.profile],
	["twitterListOembed", TWITTER_OEMBED_OBJECT.list],
	["twitterTweetOembed", TWITTER_OEMBED_OBJECT.tweet],

	["tiktokCreatorOembed", TIKTOK_OEMBED_OBJECT.creator],
	["tiktokVideoOembed", TIKTOK_OEMBED_OBJECT.video],
]);
