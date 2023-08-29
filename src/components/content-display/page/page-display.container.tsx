import { PageDisplayContextProvider } from "./context/page-display.context";
import { PageDisplay } from "./page-display";
import { PageData } from "./types";

interface PageDisplayContainerProps {
	pageData: PageData;
}

export const PageDisplayContainer = ({
	pageData,
}: PageDisplayContainerProps) => {
	return (
		<PageDisplayContextProvider value={{ pageData }}>
			<PageDisplay />
		</PageDisplayContextProvider>
	);
};
