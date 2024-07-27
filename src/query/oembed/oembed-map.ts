import { UnknownObject } from "@/src/components/content-display/new-article/types";
import {
	TIKTOK_OEMBED_MAP,
	// TIKTOK_VIDEO_OEMBED_CREATOR,
} from "../../components/content-display/social-media/tiktok/constants";
import {
	X_OEMBED_MAP,
	XROOT_OEMBED_CREATOR,
} from "../../components/content-display/social-media/x/constants";
import { REDDIT_OEMBED_MAP } from "@/src/components/content-display/social-media/reddit/reddit-constants";
import { BLUESKY_OEMBED_MAP } from "@/src/components/content-display/social-media/bluesky/bluesky-constants";
import { YOUTUBE_OEMBED_MAP } from "@/src/components/content-display/social-media/youtube/youtube-constants";
import { VIMEO_OEMBED_MAP } from "@/src/components/content-display/social-media/vimeo/vimeo-constants";
import { TUMBLR_OEMBED_MAP } from "@/src/components/content-display/social-media/tumblr/tumblr-constants";
import { FLICKR_OEMBED_MAP } from "@/src/components/content-display/social-media/flickr/flickr-constants";
import { DAILY_MOTION_OEMBED_MAP } from "@/src/components/content-display/social-media/daily-motion/daily-motion-constants";
import { AUDIO_MACK_OEMBED_MAP } from "@/src/components/content-display/social-media/audio-mack/audio-mack-constants";
import { SPOTIFY_OEMBED_MAP } from "@/src/components/content-display/social-media/spotify/spotify-constants";
import { SOUND_CLOUD_OEMBED_MAP } from "@/src/components/content-display/social-media/sound-cloud/sound-cloud-constants";
import { MIX_CLOUD_OEMBED_MAP } from "@/src/components/content-display/social-media/mix-cloud/mix-cloud-constants";
import { PODBEAN_OEMBED_MAP } from "@/src/components/content-display/social-media/podbean/podbean-constants";
import { SMASH_NOTES_OEMBED_MAP } from "@/src/components/content-display/social-media/smash-notes/smash-notes-constants";
import { RUMBLE_OEMBED_MAP } from "@/src/components/content-display/social-media/rumble/rumble-constants";
import { CODEPEN_OEMBED_MAP } from "@/src/components/content-display/social-media/codepen/codepen-constants";
import { CODE_SANDBOX_OEMBED_MAP } from "@/src/components/content-display/social-media/CodeSandBox/CodeSandBox-constants";

export const OEMBED_PROVIDERS = {
	tiktok: "tiktok",
} as const;

export const OEMBED_CREATOR_MAP = new Map<string, object>([
	// ["bing", BING_NEWS_API_OBJECT],
	// ["tiktokVideo", TIKTOK_VIDEO_OEMBED_CREATOR],
]);

/////////////////////////////////////////////////////
// HERE WE ARE
// YOU A HERE
// FOLLOW X
// TikTok, BlueSky, Reddit, Instagram, facebook, snap?
// Youtube,
// Are the main ones
/////////////////////////////////////////////////////
type OembedReturn = {
	headers: UnknownObject;
	baseUrl: string;
	queryParams: UnknownObject;
};
type OembedCreator = any; // (queryParams: UnknownObject) => OembedReturn;

////////////////////////////////////
export const NEW_OEMBED_CREATOR_MAP = new Map<string, OembedCreator>([
	// ["bing", BING_NEWS_API_OBJECT],
	// ["xRoot", XROOT_OEMBED_CREATOR],
	...X_OEMBED_MAP,
	// ["tiktokVideo", TIKTOK_VIDEO_OEMBED_CREATOR],
	...TIKTOK_OEMBED_MAP,
	...REDDIT_OEMBED_MAP,
	...BLUESKY_OEMBED_MAP,
	...YOUTUBE_OEMBED_MAP,
	...VIMEO_OEMBED_MAP,
	...TUMBLR_OEMBED_MAP,
	...FLICKR_OEMBED_MAP,
	...DAILY_MOTION_OEMBED_MAP,
	...AUDIO_MACK_OEMBED_MAP,
	...SPOTIFY_OEMBED_MAP,
	...SOUND_CLOUD_OEMBED_MAP,
	...MIX_CLOUD_OEMBED_MAP,
	...PODBEAN_OEMBED_MAP,
	...SMASH_NOTES_OEMBED_MAP,
	...RUMBLE_OEMBED_MAP,
	...CODEPEN_OEMBED_MAP,
	...CODE_SANDBOX_OEMBED_MAP,
]);
