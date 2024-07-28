import { UnknownObject } from "@/src/types";

interface OembedObject {
	searchParams: UnknownObject;
}
export const flickrOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={flickrConfig.scriptSrc} />,
		searchParams,
	};
};
