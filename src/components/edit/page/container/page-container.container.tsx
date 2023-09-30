import { PageContainerContextProvider } from "../context/container/page-container.context";
import { Config } from "../types";
import { PageContainer } from "./page-container";

interface Props {
	objectKey: string;
	config: Config;
}

export const PageContainerContainer = ({ objectKey, config }: Props) => {
	const contextObject = {
		objectKey,
		config,
	};
	console.log("ISSUE:12345", "PAGE:CONTAINER:CONTAINER");
	return (
		<PageContainerContextProvider value={contextObject}>
			<PageContainer />
		</PageContainerContextProvider>
	);
};
