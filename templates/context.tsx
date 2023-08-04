// Should really make a plop file

import { ReactNode, createContext } from "react";

type XXX_State = {};

type XXX_Interface = {};

const initialState: XXX_State & XXX_Interface = {};

export const XXX_ContextProvider = ({
	value,
	children,
}: {
	value?: XXX_State;
	children: ReactNode;
}) => {
	return (
		// Would you always spread given value here?
		<XXX_Context.Provider value={{ ...value }}>{children}</XXX_Context.Provider>
	);
};

export const XXX_Context = createContext({ ...initialState });
