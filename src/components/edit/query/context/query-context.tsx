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

	const providerListener = useWatch({
		name: providerFormKey,
	});

	// ISSUE:54321
	// This is to reset all with data when the type changes - i.e. when change from api to rss
	// need to go through it because it looks wrong - but in some way required
	const withTypeKeyListener = useWatch({
		name: withTypeKey,
	});

	useEffect(() => {
		// configList needs to be a set...
		setProviderConfig(configList.get(providerListener));
	}, [configList, providerListener]);

	useEffect(() => {
		unregister(queryIdFormKey);
		// Okay removing this fixed it / but why was it here??
		// if remove one all should be removed no?
		// I feel like we're bouncing between bugs!
		// unregister(providerFormKey);

		// unregister(conversionsFormKey);
		//this in use with useUnregisterForm is/was/will be an epic bug
		// you need to properly understand what's going on and refactor/fix
		// I don't think it works / I don't fucking need this
		// The reset - we're unregistering but never again setValue?
		// So you make a change here and resave and the thing reset to ''
		// anything in this area is problematic - works now but fuuuuck.
		// Think conversions will be the same or similar
		unregister(parametersFormKey);
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
