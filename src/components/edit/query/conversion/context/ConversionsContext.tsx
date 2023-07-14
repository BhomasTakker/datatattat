import { ReactNode, createContext } from "react";

// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

type ConversionsState = {
	objectKey: null | string;
};

type ConversionsInterface = {
	deleteConversion: (conversion: any) => void;
	moveConversion: (conversion: any) => void;
};

const conversionsInitialState: ConversionsState & ConversionsInterface = {
	objectKey: null,
	deleteConversion: (param: any) => {},
	moveConversion: (param: any) => {},
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
