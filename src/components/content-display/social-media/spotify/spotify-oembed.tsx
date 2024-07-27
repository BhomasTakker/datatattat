import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { spotifyConfig } from "./spotify.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const spotifyOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={spotifyConfig.scriptSrc} />,
		searchParams,
	};
};
