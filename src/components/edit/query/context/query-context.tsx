import {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";

type QueryState = {
	objectKey: string;
	configList: Map<string, object>;
};

type QueryInterface = {
	providerConfig: any | null; // Map?
	baseFormKey: string;
	queryFormKey: string;
	queryIdFormKey: string;
	providerFormKey: string;
	parametersFormKey: string;
	conversionsFormKey: string;
	setQueryId: (id: string) => void;
};

const initialState: QueryState & QueryInterface = {
	providerConfig: null,
	objectKey: "",
	configList: new Map<string, object>([]),
	baseFormKey: "",
	queryFormKey: "",
	queryIdFormKey: "",
	providerFormKey: "",
	parametersFormKey: "",
	conversionsFormKey: "",
	setQueryId: (id: string) => {},
};

// Could perhaps split form key 'logic' from the rest
//////////////////////////////////////////////
// Here is where Query Resets should be //////
//////////////////////////////////////////////
export const QueryContextProvider = ({
	value,
	children,
}: {
	value: QueryState;
	children: ReactNode;
}) => {
	const { setValue, unregister } = useFormContext();
	const [providerConfig, setProviderConfig] = useState<any>(null);

	const { objectKey, configList } = value;
	const baseFormKey = `${objectKey}`;
	// pos not here
	const withTypeKey = `${objectKey}.type`;
	const queryFormKey = `${objectKey}.query`;
	const queryIdFormKey = `${queryFormKey}.queryId`;
	const providerFormKey = `${queryFormKey}.provider`;
	const parametersFormKey = `${queryFormKey}.params`;
	const conversionsFormKey = `${queryFormKey}.conversions`;
	const formKeys = {
		baseFormKey,
		queryFormKey,
		queryIdFormKey,
		providerFormKey,
		parametersFormKey,
		conversionsFormKey,
	};

	console.log("ISSUE:389", { baseFormKey });
	console.log("ISSUE:389", { queryFormKey });
	console.log("ISSUE:389", { withTypeKey });

	const providerListener = useWatch({
		name: providerFormKey,
	});

	const withTypeKeyListener = useWatch({
		name: withTypeKey,
	});

	useEffect(() => {
		// configList needs to be a set...
		console.log("ISSUE:389", "SET:PROVIDER", { providerListener });
		setProviderConfig(configList.get(providerListener));
	}, [configList, providerListener]);

	useEffect(() => {
		// if()
		console.log("ISSUE:237", "UNREGISTER", { withTypeKeyListener });
		console.log(
			"ISSUE:589",
			"QUERY:CONTEXT:UNREGISTER",
			{ withTypeKeyListener },
			{ parametersFormKey }
		);
		// unregister(queryFormKey);
		// these should probably manage themselves?
		unregister(queryIdFormKey);
		unregister(providerFormKey);
		// unregister(conversionsFormKey);
		// unregister(parametersFormKey);
	}, [
		parametersFormKey,
		providerFormKey,
		queryIdFormKey,
		unregister,
		withTypeKeyListener,
	]);

	// copy over to creator cotext
	const setQueryId = useCallback(
		(id: string) => {
			if (!id) {
				return;
			}
			console.log({ setQueryId: id });
			setValue(queryIdFormKey, id);
		},
		[queryIdFormKey, setValue]
	);

	return (
		<QueryContext.Provider
			value={{ ...value, ...formKeys, providerConfig, setQueryId }}
		>
			{children}
		</QueryContext.Provider>
	);
};

export const QueryContext = createContext({ ...initialState });
