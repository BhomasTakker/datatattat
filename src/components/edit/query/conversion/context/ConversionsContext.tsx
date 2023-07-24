import { ReactNode, createContext } from "react";

// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

type ConversionData = {
	id: string;
	type: string; // enum
	props?: any; // key value [string, enum]
};

type ConversionsState = {
	conversions: any[];
	sort: any; // ConversionData[];
	filter: any; //ConversionData[];
	transform: any; //ConversionData[];
};

type ConversionsInterface = {
	// deleteConversion: (conversion: any) => void;
	// moveConversion: (conversion: any) => void;
};

const conversionsInitialState: ConversionsState & ConversionsInterface = {
	conversions: [],
	// deleteConversion: (param: any) => {},
	// moveConversion: (param: any) => {},
	sort: {},
	filter: {},
	transform: {},
};

export const ConversionsContextProvider = ({
	value,
	children,
}: {
	value: ConversionsState & ConversionsInterface;
	children: ReactNode;
}) => {
	return (
		<ConversionsContext.Provider value={{ ...value }}>
			{children}
		</ConversionsContext.Provider>
	);
};

export const ConversionsContext = createContext({ ...conversionsInitialState });
