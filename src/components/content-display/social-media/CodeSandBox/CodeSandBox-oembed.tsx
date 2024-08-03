import { UnknownObject } from "@/src/types";

interface OembedObject {
	searchParams: UnknownObject;
}
export const codeSandBoxOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={codeSandBoxConfig.scriptSrc} />,
		searchParams,
	};
};
