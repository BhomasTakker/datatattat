// Should really make a plop file

import { ReactNode, createContext } from "react";
import { PageContainerConfig } from "../../types";

type PageComponentState = {
	config: PageContainerConfig;
};

type PageComponentInterface = PageContainerConfig & {};

const initialState: PageComponentInterface = {
	id: "",
	info: "",
	title: "",
	props: [],
	components: "",
};

export const PageComponentContextProvider = ({
	value,
	children,
}: {
	value: PageComponentState;
	children: ReactNode;
}) => {
	const { config } = value;
	return (
		// Would you always spread given value here?
		<PageComponentContext.Provider value={{ ...config }}>
			{children}
		</PageComponentContext.Provider>
	);
};

export const PageComponentContext = createContext({ ...initialState });
