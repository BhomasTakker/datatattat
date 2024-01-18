import { ReactNode, createContext } from "react";
import { ParametersType } from "../types";
// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

// This is only being used for the objectId now

type ParametersState = {
	objectKey: string;
	parameters: ParametersType[];
};

type ParametersInterface = {
	// updateParameters: (param: any) => void;
};

const parametersInitialState: ParametersState & ParametersInterface = {
	objectKey: "",
	parameters: [],
	// updateParameters: (param: any) => {},
};

export const ParametersContextProvider = ({
	value,
	children,
}: {
	value: ParametersState;
	children: ReactNode;
}) => {
	return (
		<ParametersContext.Provider value={{ ...value }}>
			{children}
		</ParametersContext.Provider>
	);
};

export const ParametersContext = createContext({ ...parametersInitialState });
