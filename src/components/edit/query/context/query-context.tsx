import {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

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
	endpointsFormKey: string;
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
	endpointsFormKey: "",
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
	// Need be null for first render
	const [formerWithKeyState, setFormerWithKeyState] = useState(null);
	const [formerProviderFormKeyState, setFormerProviderFormKeyState] =
		useState(null);

	const { objectKey, configList } = value;
	const baseFormKey = `${objectKey}`;
	// pos not here
	const withTypeKey = `${objectKey}.type`;
	const queryFormKey = `${objectKey}.query`;
	const queryIdFormKey = `${queryFormKey}.queryId`;
	const providerFormKey = `${queryFormKey}.provider`;
	const parametersFormKey = `${queryFormKey}.params`;
	const endpointsFormKey = `${queryFormKey}.endpoints`;
	const conversionsFormKey = `${queryFormKey}.conversions`;
	const formKeys = {
		baseFormKey,
		queryFormKey,
		queryIdFormKey,
		providerFormKey,
		endpointsFormKey,
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
		if (
			formerProviderFormKeyState !== null &&
			formerProviderFormKeyState != providerListener
		) {
			// Big issue was here / ISSUE:0003
			// We are not actually getting rid of endpoint keys
			// They are still present but set to undefined with the below allocation
			// Note:- On a subsequent change the undefined fields are removed
			// On a 'console log re-render' they are not
			// Suggests that we can delete them properly - not sure the cause of this
			// Not quite the issue but related / and worth noting
			setValue(endpointsFormKey, {});
		}

		setProviderConfig(configList.get(providerListener));
		setFormerProviderFormKeyState(providerListener);
	}, [
		configList,
		endpointsFormKey,
		formerProviderFormKeyState,
		providerListener,
		setValue,
	]);
	// queryFormKey

	// This was a previous major issue
	// We were unregistering on first render
	// but also unregistering on strict mode render / which means update render <- which was an occasional bug
	// i.e On away from focus and come back, you will re-render (the reason for strict mode) and unregister which would be wrong
	useEffect(() => {
		// Just used to protect against resetting when
		// First render, strict mode, etc
		if (
			formerWithKeyState !== null &&
			formerWithKeyState != withTypeKeyListener
		) {
			// Reset query when withTypeKeyChanges
			// We are somewhat assuming that everything comes through query though right
			unregister(queryFormKey);
		}

		setFormerWithKeyState(withTypeKeyListener);
	}, [
		formerWithKeyState,
		queryFormKey,
		unregister,
		withTypeKey,
		withTypeKeyListener,
	]);

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
