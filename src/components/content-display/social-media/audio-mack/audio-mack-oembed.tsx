import { UnknownObject } from "@/src/types";

interface OembedObject {
	searchParams: UnknownObject;
}
export const audioMackOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={audioMackConfig.scriptSrc} />,
		searchParams,
	};
};
