import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { codePenConfig } from "./codepen.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const codePenOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={codePenConfig.scriptSrc} />,
		searchParams,
	};
};
