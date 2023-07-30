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
export const QueryContextProvider = ({
	value,
	children,
}: {
	value: QueryState;
	children: ReactNode;
}) => {
	const { setValue } = useFormContext();
	const [providerConfig, setProviderConfig] = useState<any>(null);

	const { objectKey, configList } = value;
	const baseFormKey = `${objectKey}`;
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

	const providerListener = useWatch({
		name: providerFormKey,
	});

	useEffect(() => {
		// configList needs to be a set...
		setProviderConfig(configList.get(providerListener));
	}, [configList, providerListener]);

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
