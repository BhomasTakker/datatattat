// Should really make a plop file

import { ReactNode, createContext } from "react";

type ContentComponentState = {
	config: any;
};

type ContentComponentInterface = {};

const initialState: ContentComponentState & ContentComponentInterface = {
	config: null,
};

export const ContentComponentContextProvider = ({
	value,
	children,
}: {
	value: ContentComponentState;
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
