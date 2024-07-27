const scriptSrc = "";

export const BASE_URL = `https://api.podbean.com/v1/oembed`;
export const ROOT = "https://www.podbean.com/e/";

export const createRoot = (username: string) => {
	return `https://${username}.podbean.com/e/`;
};

export const fallback = "";

export enum PodbeanEmbedType {
	episode = "episode",
}

export const podbeanConfig = {
	scriptSrc,
};
