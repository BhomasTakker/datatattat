import Script from "next/script";
import { UnknownObject } from "../../new-article/types";
import { codeSandBoxConfig } from "./CodeSandBox.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const codeSandBoxOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={codeSandBoxConfig.scriptSrc} />,
		searchParams,
	};
};
