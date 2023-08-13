import { PageContainerConfig } from "../types";
import { PageComponentContextProvider } from "./context/page-component.context";
import { PageComponent } from "./page-component";

interface PageComponentContainerProps {
	config: PageContainerConfig;
}

export const PageComponentContainer = ({
	config,
}: PageComponentContainerProps) => {
	return (
		<PageComponentContextProvider value={{ config }}>
			<PageComponent />
		</PageComponentContextProvider>
	);
};
