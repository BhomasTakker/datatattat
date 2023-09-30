import { ReactNode, createContext, useEffect } from "react";
import { ParametersType } from "../types";
import { useFormContext } from "react-hook-form";
// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

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
