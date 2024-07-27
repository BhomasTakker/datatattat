import { UnknownObject } from "../new-article/types";
import { getSocialMediaProvider } from "./social.map";
import { xOembedObject } from "./x/x-oembed";

// Grab from elsewhere
const defaultObject = xOembedObject({
	searchParams: { queryId: "xRoot", profile: "datatattat", embedType: "X" },
});

interface CreateOembedObject {
	params: UnknownObject;
	id: string;
}

export const createOembedObject = ({ params, id }: CreateOembedObject) => {
	const createSocialMediaProvider = getSocialMediaProvider(id);
	return createSocialMediaProvider?.({ searchParams: params }) || defaultObject;
};
