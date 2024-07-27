const scriptSrc = "";

const format = ".json";
export const BASE_URL = `https://vimeo.com/api/oembed${format}`;
export const ROOT = "https://vimeo.com/";
export const ALBUM = `${ROOT}showcase/`;
export const CHANNEL = `${ROOT}channels/`;
export const GROUP = `${ROOT}groups/`;
export const ONDEMAND = `${ROOT}ondemand/`;

// find one
export const fallbackVideo = "";

export enum VimeoEmbedType {
	video = "video",
	showcaseVideo = "showcaseVideo",
	channelVideo = "channelVideo",
	groupVideo = "groupVideo",
	onDemandVideo = "onDemandVideo",
}

export const vimeoConfig = {
	scriptSrc,
};
