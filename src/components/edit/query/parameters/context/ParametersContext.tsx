import { ReactNode, createContext } from "react";
// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

type ParametersState = {
	objectKey: string;
};

type ParametersInterface = {
	updateParameters: (param: any) => void;
};

const parametersInitialState: ParametersState & ParametersInterface = {
	objectKey: "",
	updateParameters: (param: any) => {},
};

const parameterList = new Map();

const addParameter = (param: any) => {
	const { id, value } = param;
	parameterList.set(id, value);
};

const updateParameters = (param: any) => {
	addParameter(param);
};

export const ParametersContextProvider = ({
	value,
	children,
}: {
	value: ParametersState;
	children: ReactNode;
}) => {
	return (
		<ParametersContext.Provider value={{ ...value, updateParameters }}>
			{children}
		</ParametersContext.Provider>
	);
};

export const ParametersContext = createContext({ ...parametersInitialState });
