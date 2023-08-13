import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { EditComponentContextProvider } from "./context/edit-component.context";
import { EditComponent } from "./edit-component";

type inputFuncs = {
	onDelete: () => void;
	onMove: (dir: number) => void;
};

export const EditComponentContainer = ({
	objectKey,
	onDelete,
	onMove,
}: BaseEditProps & inputFuncs) => {
	const contextInit = {
		objectKey,
		onDelete,
		onMove,
	};
	return (
		<EditComponentContextProvider value={contextInit}>
			<EditComponent />
		</EditComponentContextProvider>
	);
};
