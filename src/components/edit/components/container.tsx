import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { ComponentsContextProvider } from "./context/components.context";
import { EditComponents } from "./edit-components";

export const EditComponentsContainer = ({ objectKey }: BaseEditProps) => {
	console.log("FEAT:102", "EDIT:COMPONENTS", "CONTAINER");
	return (
		<ComponentsContextProvider>
			<EditComponents objectKey={objectKey} />
		</ComponentsContextProvider>
	);
};
