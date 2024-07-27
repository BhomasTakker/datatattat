const scriptSrc = "";

const format = ".json";
export const BASE_URL = `https://rumble.com/api/Media/oembed.${format}`;
export const ROOT = "https://rumble.com/";

// find one
export const fallback = "";

export enum RumbleEmbedType {
	video = "video",
}

export const rumbleConfig = {
	scriptSrc,
};
