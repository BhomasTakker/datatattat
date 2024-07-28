import { UnknownObject } from "@/src/types";

interface OembedObject {
	searchParams: UnknownObject;
}
export const codePenOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={codePenConfig.scriptSrc} />,
		searchParams,
	};
};
