// Should really make a plop file

import { ReactNode, createContext } from "react";
import { useWatch } from "react-hook-form";
import { Config } from "../../types";

type PageContainerState = {
	objectKey: string;
	config: Config;
};

type PageContainerInterface = {
	container: any;
	containerTypeKey: string;
};

const initialState: PageContainerState & PageContainerInterface = {
	objectKey: "",
	config: {
		props: {},
		select: [],
		info: "", // initial / initial
		label: "",
		type: "",
	},
	container: null,
	containerTypeKey: "",
};

export const PageContainerContextProvider = ({
	value,
	children,
}: {
	value: PageContainerState;
	children: ReactNode;
}) => {
	const { objectKey, config } = value;
	const containerTypeKey = `${objectKey}.containerType`;
	// we need a type
	const container = useWatch({
		// control,
		name: containerTypeKey,
	});
	return (
		// Would you always spread given value here?
		<PageContainerContext.Provider
			value={{ ...value, container, containerTypeKey }}
		>
			{children}
		</PageContainerContext.Provider>
	);
};

export const PageContainerContext = createContext({ ...initialState });
