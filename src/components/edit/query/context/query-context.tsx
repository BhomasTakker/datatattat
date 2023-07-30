import { ReactNode, createContext, useEffect, useState } from "react";
import { useWatch } from "react-hook-form";

type QueryState = {
	objectKey: string;
	configList: any[];
};

type QueryInterface = {
	providerConfig: any | null; // Map?
	baseFormKey: string;
	queryFormKey: string;
	queryIdFormKey: string;
	providerFormKey: string;
	parametersFormKey: string;
	conversionsFormKey: string;
};

const initialState: QueryState & QueryInterface = {
	providerConfig: null,
	objectKey: "",
	configList: [],
	baseFormKey: "",
	queryFormKey: "",
	queryIdFormKey: "",
	providerFormKey: "",
	parametersFormKey: "",
	conversionsFormKey: "",
};

export const QueryContextProvider = ({
	value,
	children,
}: {
	value: QueryState;
	children: ReactNode;
}) => {
	const [providerConfig, setProviderConfig] = useState(null);
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
		setProviderConfig(configList[providerListener]);
	}, [configList, providerListener]);

	return (
		<QueryContext.Provider value={{ ...value, ...formKeys, providerConfig }}>
			{children}
		</QueryContext.Provider>
	);
};

export const QueryContext = createContext({ ...initialState });
