import { ReactNode, createContext } from "react";
import { HeaderFormContextProvider } from "./form/header-form.context";

type HeaderState = {};

type HeaderInterface = {};

const initialState: HeaderState & HeaderInterface = {};

export const HeaderContextProvider = ({
	value,
	children,
}: {
	value?: HeaderState;
	children: ReactNode;
}) => {
	return (
		<HeaderContext.Provider value={{ ...value }}>
			<HeaderFormContextProvider>{children}</HeaderFormContextProvider>
		</HeaderContext.Provider>
	);
};

export const HeaderContext = createContext({ ...initialState });
