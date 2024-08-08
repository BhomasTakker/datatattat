import { ReactNode, createContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";

type PageComponentPropsState = {
	propsId: string;
	props: any[];
	resetComponent: any;
};

type PageComponentPropsInterface = {
	// propsFormId: string;
};

const initialState: PageComponentPropsState & PageComponentPropsInterface = {
	props: [],
	propsId: "",
	resetComponent: null,
};

export const ComponentPropsContextProvider = ({
	value,
	children,
}: {
	value: PageComponentPropsState;
	children: ReactNode;
}) => {
	const { unregister } = useFormContext();

	const { resetComponent, propsId, props } = value;

	// If propsId changes remove any stored value
	useEffect(() => {
		unregister(propsId);
	}, [resetComponent, propsId, unregister]);

	return (
		<PageComponentPropsContext.Provider
			value={{ resetComponent, propsId, props }}
		>
			{children}
		</PageComponentPropsContext.Provider>
	);
};

export const PageComponentPropsContext = createContext({ ...initialState });
