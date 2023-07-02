import { YOUTUBE_IFRAME_OBJECT } from "./youtube/constants";

export const IFRAME_EMBED_MAP = new Map<string, object>([
	["youtubeWatch", YOUTUBE_IFRAME_OBJECT.video],
	["youtubePlaylist", YOUTUBE_IFRAME_OBJECT.playlist],
	["youtubeUser", YOUTUBE_IFRAME_OBJECT.user],
]);
