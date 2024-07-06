import { stringIsAValidUrl } from "@/src/utils/url";

export const CUSTOM_RSS_RSS_CREATOR = (queryParams: any) => {
	const { url } = queryParams;

	// If validUrl else return
	const validUrl = stringIsAValidUrl(url);

	// We probably need a big rethink?
	// Really? - THIS would just be for RSS
	// That style/shape of object can be whatever we need
	// We tried to be too generic - or we just copied and pasted
	return {
		url,
		headers: {},
		returns: (data: any) => {}, // <- this needs a big work / this is void
		queryParams: {},
	};
};
