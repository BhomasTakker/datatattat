import { ReactNode, createContext } from "react";
import { HeaderFormContextProvider } from "./form/header-form.context";
import { HeaderQueryProvider } from "./query/header-query.context";
import { HeaderStateContextProvider } from "./form/state/header-state.context";

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
	//////////////////////////////////
	// Should query wrap all else?
	// When we change everything changes / but we don't change for anything / except
	return (
		<HeaderContext.Provider value={{ ...value }}>
			<HeaderFormContextProvider value={{ debug: true }}>
				<HeaderQueryProvider>
					<HeaderStateContextProvider>{children}</HeaderStateContextProvider>
				</HeaderQueryProvider>
			</HeaderFormContextProvider>
		</HeaderContext.Provider>
	);
};

export const HeaderContext = createContext({ ...initialState });
