import { ContentComponent } from "./content-component";
import { ContentComponentContextProvider } from "./context/content-component.context";

interface ContentComponentContainerProps {
	config: any;
}

export const ContentComponentContainer = ({
	config,
}: ContentComponentContainerProps) => {
	console.log("FEATURE:404", "CONTENT:COMPONENT:CONTAINER");
	return (
		<ContentComponentContextProvider value={{ config }}>
			<ContentComponent />
		</ContentComponentContextProvider>
	);
};
