import {
	ReactNode,
	createContext,
	useRef,
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
	const isMounted = useRef(false);
	const { setValue, unregister, resetField } = useFormContext();
	const [providerConfig, setProviderConfig] = useState<any>(null);
	const [formerState, setFormerState] = useState(null);

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

	const withTypeKeyListener = useWatch({
		name: withTypeKey,
	});

	useEffect(() => {
		// Looks fairly safe - should we be protecting this from undue setting, etc
		setProviderConfig(configList.get(providerListener));
	}, [configList, providerListener, queryFormKey, resetField]);

	// This was a previous major issue
	// We were unregistering on first render
	// but also unregistering on strict mode render / which means update render <- which was an occasional bug
	// i.e On away from focus and come back, you will re-render (the reason for strict mode) and unregister which would be wrong
	useEffect(() => {
		// Just used to protect against resetting when
		// First render, strict mode, etc
		if (formerState !== null && formerState != withTypeKeyListener) {
			// Reset query when withTypeKeyChanges
			// We are somewhat assuming that everything comes through query toughh right
			unregister(queryFormKey);
		}

		setFormerState(withTypeKeyListener);
	}, [formerState, queryFormKey, unregister, withTypeKey, withTypeKeyListener]);

	// copy over to creator cotext
	const setQueryId = useCallback(
		(id: string) => {
			if (!id) {
				return;
			}

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
