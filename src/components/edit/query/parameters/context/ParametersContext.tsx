import { ReactNode, createContext } from "react";

// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

type ParametersState = {
	objectKey: null | string;
};

type ParametersInterface = {
	updateParameters: (param: any) => void;
};

const parametersInitialState: ParametersState & ParametersInterface = {
	objectKey: null,
	updateParameters: (param: any) => {},
};

const parameterList = new Map();

export const ParametersContextProvider = ({
	value,
	children,
}: {
	value: ParametersState;
	children: ReactNode;
}) => {
	const addParameter = (param: any) => {
		const { id, value } = param;
		parameterList.set(id, value);
	};

	const updateParameters = (param: any) => {
		addParameter(param);
	};

	return (
		<ParametersContext.Provider value={{ ...value, updateParameters }}>
			{children}
		</ParametersContext.Provider>
	);
};

export const ParametersContext = createContext({ ...parametersInitialState });
