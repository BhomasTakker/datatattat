import { ComponentsContextProvider } from "./context/components.context";
import { EditComponents } from "./edit-components";

export const EditComponentsContainer = () => {
	return (
		<ComponentsContextProvider>
			<EditComponents />
		</ComponentsContextProvider>
	);
};
