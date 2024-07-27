import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { tumblrConfig } from "./tumblr.config";

// A number of these are actually identical
// The others are too - if you pass in a script src
// we can/should add any defaults here
// at least that was the theory - leave for now
interface OembedObject {
	searchParams: UnknownObject;
}
export const tumblrOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <Script src={tumblrConfig.scriptSrc} />,
		searchParams,
	};
};
