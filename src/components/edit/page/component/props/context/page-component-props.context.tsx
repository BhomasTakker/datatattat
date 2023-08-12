// Should really make a plop file

import { ReactNode, createContext } from "react";

type PageComponentPropsState = {
	props: unknown[];
};

type PageComponentPropsInterface = {};

const initialState: PageComponentPropsState & PageComponentPropsInterface = {
	props: [],
};

export const PageComponentPropsContextProvider = ({
	value,
	children,
}: {
	value: PageComponentPropsState;
	children: ReactNode;
}) => {
	return (
		// Would you always spread given value here?
		<PageComponentPropsContext.Provider value={{ ...value }}>
			{children}
		</PageComponentPropsContext.Provider>
	);
};

export const PageComponentPropsContext = createContext({ ...initialState });
