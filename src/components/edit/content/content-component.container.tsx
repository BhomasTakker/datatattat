import { ContentComponent } from "./content-component";
import { ContentComponentContextProvider } from "./context/content-component.context";

export const ContentComponentContainer = () => {
	console.log("FEATURE:404", "CONTENT:COMPONENT:CONTAINER");
	return (
		<ContentComponentContextProvider>
			<ContentComponent />
		</ContentComponentContextProvider>
	);
};
