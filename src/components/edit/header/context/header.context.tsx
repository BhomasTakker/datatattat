import { ReactNode, createContext } from "react";
import { HeaderFormContextProvider } from "./form/header-form.context";
import { HeaderQueryProvider } from "../query/context/header-query.context";

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
	// This could be very unperformant - BUT
	// get to a point of simplicity and accuracy
	// then refactor for performance
	return (
		<HeaderContext.Provider value={{ ...value }}>
			<HeaderFormContextProvider value={{ debug: true }}>
				<HeaderQueryProvider>{children}</HeaderQueryProvider>
			</HeaderFormContextProvider>
		</HeaderContext.Provider>
	);
};

export const HeaderContext = createContext({ ...initialState });
