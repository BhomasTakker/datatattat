import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { QueryContext } from "./query-context";
import { useWatch, useFormContext } from "react-hook-form";
// import { useUnregisterForm } from "../../hooks/useUnregisterForm";

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
		parametersFormKey,
		setQueryId,
	} = useContext(QueryContext);
	// const { withComponentType } = useContext(ContentComponentContext);
	const { config } = value;

	const {
		id,
		queryId,
		endpointObjects = {},
		endpoints,
		type,
		defaultEndpoint,
	} = config;
	//, ...config // spread config into

	const formInputId = `${queryFormKey}.${id}`;

	const formInputValue = useWatch({
		name: formInputId,
		defaultValue: null,
	});

	const [selectedQueryConfig, setSelectedQueryConfig] = useState(
		endpointObjects[formInputValue]
	);

	useEffect(() => {
		if (!formInputValue) return;
		setSelectedQueryConfig(endpointObjects[formInputValue]);
	}, [endpointObjects, formInputValue]);

	// This all needs cleaning up
	// Shouldn't have unregister form
	// the setValue useEffect is far too messy / hacky
	// nope....
	// Crazily required for parameters at the moment
	// re-renders and form state are getting wild
	// ERROR HERE PERHAPS - removed as should not be a thing
	// useUnregisterForm({ name: formInputId });

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
