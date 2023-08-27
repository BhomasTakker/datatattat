import { ReactNode, createContext, useContext, useEffect } from "react";
import { QueryContext } from "./query-context";
import { useWatch, useFormContext } from "react-hook-form";
import { useUnregisterForm } from "../../hooks/useUnregisterForm";
import { ContentComponentContext } from "../../content/context/content-component.context";

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

export const CreatorContextProvider = ({
	value,
	children,
}: {
	value: CreatorState;
	children: ReactNode;
}) => {
	const { setValue } = useFormContext();

	// 100% have to try / unknown
	// const { selectedQueryConfig: asSomething } = useContext(CreatorContext);
	// console.log({ asSomething });

	const {
		queryFormKey,
		queryIdFormKey,
		providerFormKey,
		parametersFormKey,
		setQueryId,
	} = useContext(QueryContext);
	const { withComponentType } = useContext(ContentComponentContext);
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
	});

	const selectedQueryConfig = endpointObjects[formInputValue];

	// This all needs cleaning up
	// Shouldn't have unregister form
	// the setValue useEffect is far too messy / hacky
	// nope....
	// useUnregisterForm({ name: formInputId });
	// console.log("ISSUE:999", "WUT", { withComponentType });
	// useEffect(() => {
	// 	// console.log("ISSUE:999", { formInputId });
	// 	console.log("ISSUE:999", { queryFormKey });
	// 	// console.log("ISSUE:999", { queryIdFormKey });
	// 	// console.log("ISSUE:999", { providerFormKey });
	// 	// console.log("ISSUE:999", { parametersFormKey });
	// 	console.log("ISSUE:999", { withComponentType });
	// 	// setValue(queryFormKey, {});
	// }, [withComponentType, queryFormKey, setValue]);

	useEffect(() => {
		if (!queryId) {
			return;
		}

		setQueryId(queryId);
	}, [queryId, setQueryId]);

	useEffect(() => {
		if (!type || type === "none") {
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
			// console.log("DO WE HERE???", { defaultEndpoint }, { formInputId });
			setValue(formInputId, defaultEndpoint);
		}
	}, [formInputId, defaultEndpoint, setValue, formInputValue, endpoints, type]);

	return (
		<CreatorContext.Provider value={{ ...value, selectedQueryConfig }}>
			{children}
		</CreatorContext.Provider>
	);
};

export const CreatorContext = createContext({ ...initialState });
