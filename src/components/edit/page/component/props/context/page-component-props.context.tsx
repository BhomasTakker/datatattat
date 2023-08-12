import { ReactNode, createContext } from "react";

type PageComponentPropsState = {
	objectKey: string;
	props: unknown[];
};

type PageComponentPropsInterface = {
	// propsFormId: string;
};

const initialState: PageComponentPropsState & PageComponentPropsInterface = {
	props: [],
	objectKey: "",
	// propsFormId: "",
};

export const PageComponentPropsContextProvider = ({
	value,
	children,
}: {
	value: PageComponentPropsState;
	children: ReactNode;
}) => {
	// We are just passing props at the moment
	// no need to watch props
	// if there is a saved value it will be shown - or it should be
	// might need to come up with something if using default values
	// check / test form / container changes etc
	return (
		// Would you always spread given value here?
		<PageComponentPropsContext.Provider value={{ ...value }}>
			{children}
		</PageComponentPropsContext.Provider>
	);
};

export const PageComponentPropsContext = createContext({ ...initialState });
