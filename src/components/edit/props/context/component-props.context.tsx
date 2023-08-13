import { ReactNode, createContext, useContext, useEffect } from "react";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { useFormContext } from "react-hook-form";
import { PageContainerContext } from "../../page/context/container/page-container.context";

type PageComponentPropsState = {
	propsId: string;
	props: unknown[];
	resetComponent: any;
};

type PageComponentPropsInterface = {
	// propsFormId: string;
};

const initialState: PageComponentPropsState & PageComponentPropsInterface = {
	props: [],
	propsId: "",
	resetComponent: null,
	// propsFormId: "",
};

export const ComponentPropsContextProvider = ({
	value,
	children,
}: {
	value: PageComponentPropsState;
	children: ReactNode;
}) => {
	// const { pagePropsId } = useContext(PageStateContext);
	// This may need to chage
	// const { container } = useContext(PageContainerContext);
	const { unregister } = useFormContext();

	const { resetComponent, propsId } = value;

	// pass in what to to reset on
	useEffect(() => {
		// set props to empty / no need to reset value?
		// perhaps reset would be better but damn simple
		unregister(propsId);
	}, [resetComponent, propsId, unregister]);

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
