import Script from "next/script";
import { UnknownObject } from "@/src/types";
import { smashNotesConfig } from "./smash-notes.config";

interface OembedObject {
	searchParams: UnknownObject;
}
export const smashNotesOembedObject = ({ searchParams }: OembedObject) => {
	return {
		script: () => <></>, //<Script src={smashNotesConfig.scriptSrc} />,
		searchParams,
	};
};
