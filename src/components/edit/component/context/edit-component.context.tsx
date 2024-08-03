import { ReactNode, createContext } from "react";
import { useWatch } from "react-hook-form";

type EditComponentState = {
	objectKey: string;
	onDelete: () => void;
	onMove: (dir: number) => void;
};

type EditComponentInterface = {
	component: string;
	componentTypeFormId: string;
};

const initialState: EditComponentState & EditComponentInterface = {
	objectKey: "",
	component: "",
	componentTypeFormId: "",
	onDelete: () => {},
	onMove: () => {},
};

export const EditComponentContextProvider = ({
	value,
	children,
}: {
	value: EditComponentState;
	children: ReactNode;
}) => {
	const { objectKey } = value;
	const componentTypeFormId = `${objectKey}.componentType`;

	const component = useWatch({
		name: componentTypeFormId,
	});

	return (
		// Would you always spread given value here?
		<EditComponentContext.Provider
			value={{ ...value, component, componentTypeFormId }}
		>
			{children}
		</EditComponentContext.Provider>
	);
};

export const EditComponentContext = createContext({ ...initialState });
