import { ReactNode, createContext } from "react";
import { useFormContext } from "react-hook-form";

type ParametersState = {
	objectKey: null | string;
	shouldCreateParametersString: boolean;
};

type ParametersInterface = {
	updateParameters: (param: any) => void;
};

const parametersInitialState: ParametersState & ParametersInterface = {
	objectKey: null,
	updateParameters: (param: any) => {},
	shouldCreateParametersString: true,
};

const parameterList = new Map();

export const ParametersContextProvider = ({
	value,
	children,
}: {
	value: ParametersState;
	children: ReactNode;
}) => {
	const { objectKey, shouldCreateParametersString } = value;
	const { setValue } = useFormContext();

	const addParameter = (param: any) => {
		const { id, value } = param;
		parameterList.set(id, value);
	};
	const createParametersList = () => {
		let queryString = "";
		parameterList.forEach((value, id) => {
			// const { id, value } = param;
			if (value) {
				const prefix = queryString ? "&" : "?";
				queryString += `${prefix}${id}=${value}`;
			}
		});
		return queryString;
	};

	const updateParameters = (param: any) => {
		console.log("Update parameters!!!");
		console.log({ param });

		// check doesn't exist
		// if value removed - remove parameter - we may need to specify empty params
		addParameter(param);
		const parameterQueryString = createParametersList();

		//////////////////////////////////////////////////////////////////
		// Probably pass a function to determine what to do when params change
		// decouple fromsetValue / form
		// Then can do nothing on change
		if (!shouldCreateParametersString) {
			return;
		}

		// write params out
		// assign to params form string
		const obj = Object.fromEntries(parameterList);
		setValue(`${objectKey}.params`, parameterQueryString);
	};

	return (
		<ParametersContext.Provider value={{ ...value, updateParameters }}>
			{children}
		</ParametersContext.Provider>
	);
};

export const ParametersContext = createContext({ ...parametersInitialState });
