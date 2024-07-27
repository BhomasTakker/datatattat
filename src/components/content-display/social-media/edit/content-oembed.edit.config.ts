import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";
import { X_ROOT } from "../x/x.edit.config";
import { TIKTOK_ROOT } from "../tiktok/tiktok.edit.config";
import { REDDIT_ROOT } from "../reddit/reddit.edit.config";
import { BLUESKY_ROOT } from "../bluesky/bluesky.edit.config";
import { YOUTUBE_ROOT } from "../youtube/youtube.edit.config";
import { SocialVariant } from "../types";
import { VIMEO_ROOT } from "../vimeo/vimeo.edit.config";
import { TUMBLR_ROOT } from "../tumblr/tumblr.edit.config";
import { FLICKR_ROOT } from "../flickr/flickr.edit.config";
import { DAILY_MOTION_ROOT } from "../daily-motion/daily-motion.edit.config";
import { SOUND_CLOUD_ROOT } from "../sound-cloud/sound-cloud.edit.config";
import { SMASH_NOTES_ROOT } from "../smash-notes/smash-notes.edit.config";
import { SPOTIFY_ROOT } from "../spotify/spotify.edit.config";
import { PODBEAN_ROOT } from "../podbean/podbean.edit.config";
import { MIX_CLOUD_ROOT } from "../mix-cloud/mix-cloud.edit.config";
import { AUDIO_MACK_ROOT } from "../audio-mack/audio-mack.edit.config";
import { CODE_SANDBOX_ROOT } from "../CodeSandBox/CodeSandBox.edit.config";
import { CODEPEN_ROOT } from "../codepen/codepen.edit.config";
import { RUMBLE_ROOT } from "../rumble/rumble.edit.config";

// This is really oembed and not strictly social

type SocialProvidersProps = typeof X_ROOT;

const socialsVariantMap = new Map<string, SocialProvidersProps>([
	[SocialVariant.X, X_ROOT],
	[SocialVariant.Bluesky, BLUESKY_ROOT],
	[SocialVariant.TikTok, TIKTOK_ROOT],
	[SocialVariant.Reddit, REDDIT_ROOT],
	[SocialVariant.YouTube, YOUTUBE_ROOT],
	[SocialVariant.Vimeo, VIMEO_ROOT],
	[SocialVariant.Tumblr, TUMBLR_ROOT],
	[SocialVariant.Flickr, FLICKR_ROOT],
	[SocialVariant.DailyMotion, DAILY_MOTION_ROOT],
	[SocialVariant.AudioMack, AUDIO_MACK_ROOT],
	[SocialVariant.MixCloud, MIX_CLOUD_ROOT],
	[SocialVariant.Podbean, PODBEAN_ROOT],
	[SocialVariant.Spotify, SPOTIFY_ROOT],
	[SocialVariant.SmashNotes, SMASH_NOTES_ROOT],
	[SocialVariant.SoundCloud, SOUND_CLOUD_ROOT],
	[SocialVariant.Rumble, RUMBLE_ROOT],
	[SocialVariant.CodePen, CODEPEN_ROOT],
	[SocialVariant.CodeSandBox, CODE_SANDBOX_ROOT],
]);

const socialSelect = {
	id: "socialSelect",
	type: EditInputs.objectSelect,
	options: [
		SocialVariant.X,
		SocialVariant.TikTok,
		SocialVariant.Reddit,
		SocialVariant.Bluesky,
		SocialVariant.YouTube,
		SocialVariant.Vimeo,
		SocialVariant.Tumblr,
		SocialVariant.Flickr,
		SocialVariant.DailyMotion,
		SocialVariant.AudioMack,
		SocialVariant.MixCloud,
		SocialVariant.Podbean,
		SocialVariant.SmashNotes,
		SocialVariant.SoundCloud,
		SocialVariant.Spotify,
		SocialVariant.Rumble,
		SocialVariant.CodePen,
		SocialVariant.CodeSandBox,
	],
	label: "Select Oembed",
	info: "SocialSelect",
	optionsMap: socialsVariantMap,
};

// we can absolutely type these
export const CONTENT_OEMBED = {
	id: "ContentOembed",
	info: "ContentOembed",
	title: "Content Oembed",
	withObject: [], //filterObjectByKeys(EDIT_WITH, ['oembed-query']),"oembed-query"

	props: [...COMPONENT_DETAILS, socialSelect],
};
