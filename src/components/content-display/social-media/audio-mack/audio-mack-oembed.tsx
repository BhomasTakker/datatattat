import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { audioMackConfig } from "./audio-mack.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const audioMackOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={audioMackConfig.scriptSrc} />,
		searchParams,
	};
};
