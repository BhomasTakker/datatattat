import { YOUTUBE_IFRAME_OBJECT } from "../iframe-embeds/youtube/constants";
import { TIKTOK_OEMBED_OBJECT } from "./tik-tok/constants";
import { TWITTER_OEMBED_OBJECT } from "./twitter/constants";
import { YOUTUBE_OEMBED_OBJECT } from "./youtube/constants";

export const OEMBED_MAP = new Map<string, object>([
	["twitterProfileOembed", TWITTER_OEMBED_OBJECT.profile],
	["twitterListOembed", TWITTER_OEMBED_OBJECT.list],
	["twitterTweetOembed", TWITTER_OEMBED_OBJECT.tweet],

	// ["tiktokCreatorOembed", TIKTOK_OEMBED_OBJECT.creator],
	["tiktokVideoOembed", TIKTOK_OEMBED_OBJECT.video],

	// ["youtubeWatchOembed", YOUTUBE_OEMBED_OBJECT.video],
	["youtubeWatch", YOUTUBE_OEMBED_OBJECT.video],
	["youtubePlaylist", YOUTUBE_OEMBED_OBJECT.playlist],
	["youtubeUser", YOUTUBE_OEMBED_OBJECT.user],
	["youtubeShorts", YOUTUBE_OEMBED_OBJECT.shorts],
]);
