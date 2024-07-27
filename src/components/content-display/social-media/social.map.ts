import { audioMackOembedObject } from "./audio-mack/audio-mack-oembed";
import { blueskyOembedObject } from "./bluesky/bluesky-oembed";
import { codePenOembedObject } from "./codepen/codepen-oembed";
import { codeSandBoxOembedObject } from "./CodeSandBox/CodeSandBox-oembed";
import { dailyMotionOembedObject } from "./daily-motion/daily-motion-oembed";
import { flickrOembedObject } from "./flickr/flickr-oembed";
import { mixCloudOembedObject } from "./mix-cloud/mix-cloud-oembed";
import { podbeanOembedObject } from "./podbean/podbean-oembed";
import { redditOembedObject } from "./reddit/reddit-oembed";
import { rumbleOembedObject } from "./rumble/rumble-oembed";
import { smashNotesOembedObject } from "./smash-notes/smash-notes-oembed";
import { soundCloudOembedObject } from "./sound-cloud/sound-cloud-oembed";
import { spotifyOembedObject } from "./spotify/spotify-oembed";
import { tikTokOembedObject } from "./tiktok/tiktok-oembed";
import { tumblrOembedObject } from "./tumblr/tumblr-oembed";
import { SocialVariant } from "./types";
import { vimeoOembedObject } from "./vimeo/vimeo-oembed";
import { xOembedObject } from "./x/x-oembed";
import { youTubeOembedObject } from "./youtube/youtube-oembed";

type SocialMap =
	| typeof xOembedObject
	| typeof tikTokOembedObject
	| typeof redditOembedObject
	| typeof blueskyOembedObject
	| typeof youTubeOembedObject
	| typeof vimeoOembedObject
	| typeof tumblrOembedObject
	| typeof flickrOembedObject
	| typeof dailyMotionOembedObject
	| typeof audioMackOembedObject
	| typeof spotifyOembedObject
	| typeof soundCloudOembedObject
	| typeof smashNotesOembedObject
	| typeof mixCloudOembedObject
	| typeof podbeanOembedObject
	| typeof rumbleOembedObject
	| typeof codeSandBoxOembedObject
	| typeof codePenOembedObject;

// These functions are mostly the same and coulf easily be generic
const _socialMap = new Map<string, SocialMap>([
	[SocialVariant.X, xOembedObject],
	[SocialVariant.TikTok, tikTokOembedObject],
	[SocialVariant.Reddit, redditOembedObject],
	[SocialVariant.Bluesky, blueskyOembedObject],
	[SocialVariant.YouTube, youTubeOembedObject],
	[SocialVariant.Vimeo, vimeoOembedObject],
	[SocialVariant.Tumblr, tumblrOembedObject],
	[SocialVariant.Flickr, flickrOembedObject],
	[SocialVariant.DailyMotion, dailyMotionOembedObject],
	[SocialVariant.AudioMack, audioMackOembedObject],
	[SocialVariant.MixCloud, mixCloudOembedObject],
	[SocialVariant.Podbean, podbeanOembedObject],
	[SocialVariant.Spotify, spotifyOembedObject],
	[SocialVariant.SmashNotes, smashNotesOembedObject],
	[SocialVariant.SoundCloud, soundCloudOembedObject],
	[SocialVariant.Rumble, rumbleOembedObject],
	[SocialVariant.CodePen, codePenOembedObject],
	[SocialVariant.CodeSandBox, codeSandBoxOembedObject],
]);

export const getSocialMediaProvider = (id: string) => {
	// or?
	return _socialMap.get(id);
};
