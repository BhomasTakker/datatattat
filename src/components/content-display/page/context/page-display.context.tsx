import { ReactNode, createContext } from "react";
import { PageData } from "../types";

type PageDisplayState = {
	pageData: PageData;
};

type PageDisplayInterface = {
	container: { type: string };
	meta: any;
	props: any;
	content: any;
	components: any[];
};

const initialState: PageDisplayState & PageDisplayInterface = {
	pageData: {},
	meta: {},
	content: {},
	container: { type: "" },
	props: {},
	components: [],
};

export const PageDisplayContextProvider = ({
	value,
	children,
}: {
	value: PageDisplayState;
	children: ReactNode;
}) => {
	const { pageData } = value;
	const { content, meta } = pageData || {};
	const { container, props, components } = content || {};
	return (
		// Would you always spread given value here?
		<PageDisplayContext.Provider
			value={{ ...value, content, meta, container, props, components }}
		>
			{children}
		</PageDisplayContext.Provider>
	);
};

export const PageDisplayContext = createContext({ ...initialState });
