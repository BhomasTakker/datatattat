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

export const QueryContextProvider = ({
	value,
	children,
}: {
	value: QueryState;
	children: ReactNode;
}) => {
	const { setValue, unregister } = useFormContext();
	const [providerConfig, setProviderConfig] = useState<object | undefined>(
		undefined
	);
	// const { queryId = "" } = providerConfig;

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

	const setQueryId = (id: string) => {
		if (!id) {
			return;
		}
		console.log({ setQueryId: id });
		setValue(queryIdFormKey, id);
	};

	return (
		<QueryContext.Provider
			value={{ ...value, ...formKeys, providerConfig, setQueryId }}
		>
			{children}
		</QueryContext.Provider>
	);
};

export const QueryContext = createContext({ ...initialState });
