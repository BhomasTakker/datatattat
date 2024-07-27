import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { flickrConfig } from "./flickr.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const flickrOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={flickrConfig.scriptSrc} />,
		searchParams,
	};
};
