import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { QueryContext } from "./query-context";
import { useWatch, useFormContext } from "react-hook-form";

type CreatorState = {
	config: any;
};

type CreatorInterface = {
	// id: string,
	selectedQueryConfig: any;
};

const initialState: CreatorState & CreatorInterface = {
	config: undefined,
	selectedQueryConfig: undefined,
};

// This guys a mess
export const CreatorContextProvider = ({
	value,
	children,
}: {
	value: CreatorState;
	children: ReactNode;
}) => {
	const { setValue } = useFormContext();

	const {
		queryFormKey,
		queryIdFormKey,
		providerFormKey,
		endpointsFormKey,
		parametersFormKey,
		setQueryId,
	} = useContext(QueryContext);

	const { config } = value;

	const {
		id,
		queryId,
		endpointObjects = {},
		endpoints,
		type,
		defaultEndpoint,
	} = config;

	const formInputId = `${endpointsFormKey}.${id}`;

	const formInputValue = useWatch({
		name: formInputId,
		defaultValue: null,
	});

	const [selectedQueryConfig, setSelectedQueryConfig] = useState(
		endpointObjects[formInputValue]
	);

	useEffect(() => {
		if (!formInputValue || !endpointObjects) {
			// FIX ISSUE:0003
			// This feels more like a cheat
			// If the object keys are still there - that's an issue
			// This also feels like it may cause an issue?
			setSelectedQueryConfig(null);
			return;
		}
		setSelectedQueryConfig(endpointObjects[formInputValue]);
	}, [endpointObjects, formInputValue]);

	useEffect(() => {
		// this protection is incprrect
		// stops from changing / but why did we add it?
		// if (!queryId) {
		// 	return;
		// }

		setQueryId(queryId);
	}, [queryId, setQueryId]);

	useEffect(() => {
		// if (!type || type === "none") {
		// 	return;
		// }

		// should be type endpoint or something
		if (type !== "select") {
			return;
		}

		// not yet loaded
		if (formInputValue === null) {
			return;
		}
		// if type !== select <- endpoint select?
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default
		if (
			!formInputValue ||
			(endpoints && typeof endpoints?.[formInputValue] !== "string")
		) {
			setValue(formInputId, defaultEndpoint);
		}
	}, [
		defaultEndpoint,
		endpointObjects,
		endpoints,
		formInputId,
		formInputValue,
		setValue,
		type,
	]);

	return (
		<CreatorContext.Provider value={{ ...value, selectedQueryConfig }}>
			{children}
		</CreatorContext.Provider>
	);
};

export const CreatorContext = createContext({ ...initialState });
