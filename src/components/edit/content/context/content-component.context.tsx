// Should really make a plop file

import { ReactNode, createContext } from "react";

type ContentComponentState = {};

type ContentComponentInterface = {};

const initialState: ContentComponentState & ContentComponentInterface = {};

export const ContentComponentContextProvider = ({
	value,
	children,
}: {
	value?: ContentComponentState;
	children: ReactNode;
}) => {
	return (
		// Would you always spread given value here?
		<ContentComponentContext.Provider value={{ ...value }}>
			{children}
		</ContentComponentContext.Provider>
	);
};

export const ContentComponentContext = createContext({ ...initialState });
