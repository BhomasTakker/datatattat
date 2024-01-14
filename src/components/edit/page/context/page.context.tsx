import { ReactNode, createContext } from "react";
import { PageFormContextProvider } from "./form/page-form.context";
import { PageQueryProvider } from "./query/page-query.context";
import { PageStateContextProvider } from "./state/page-state.context";

type PageState = {};

type PageInterface = {};

const initialState: PageState & PageInterface = {};

export const PageContextProvider = ({
	value,
	children,
}: {
	value?: PageState;
	children: ReactNode;
}) => {
	// console.log("ISSUE:12345", "PAGE:CONTEXT:PROVIDER");
	return (
		<PageContext.Provider value={{ ...value }}>
			<PageFormContextProvider>
				<PageQueryProvider>
					<PageStateContextProvider>{children}</PageStateContextProvider>
				</PageQueryProvider>
			</PageFormContextProvider>
		</PageContext.Provider>
	);
};

export const PageContext = createContext({ ...initialState });
