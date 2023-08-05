import { ReactNode, createContext, useContext, useEffect } from "react";
import { HeaderQueryContext } from "../../query/header-query.context";
import { useFormContext } from "react-hook-form";
import { cloneDeep } from "@/src/utils/object";

type HeaderStateState = {};

type HeaderStateInterface = {
	navigation: unknown[];
	addLink: () => void;
	createHeader: () => void;
};

const initialState: HeaderStateState & HeaderStateInterface = {
	navigation: [],
	addLink: () => {},
	createHeader: () => {},
};

const FORM_ID = "nav";

export const HeaderStateContextProvider = ({
	value,
	children,
}: {
	value?: HeaderStateState;
	children: ReactNode;
}) => {
	const { currentHeader } = useContext(HeaderQueryContext);
	const { setValue, watch, unregister } = useFormContext();
	const { nav } = currentHeader || {};

	const navigation: unknown[] = watch(FORM_ID, []);

	useEffect(() => {
		// stringify nav? & check the string value
		setValue(FORM_ID, nav);
	}, [nav, setValue]);

	const addLink = () => {
		console.log("FEATURE:105", "HEADER:STATE", "ADD:LINK");

		const newLink = {
			route: "",
			label: `link${navigation.length}`,
		};
		setValue(`${FORM_ID}.${navigation.length}`, newLink);
	};

	// seems void perhaps? / do you want default header
	// or specifically create header
	const createHeader = () => {
		console.log("FEATURE:105", "HEADER:STATE", "CREATE:HEADER");
		setValue(FORM_ID, []);
	};

	console.log("FEATURE:105", "CONTEXT:GROUP", "HEADER:STATE", "RENDER");
	return (
		// Would you always spread given value here?
		<HeaderStateContext.Provider
			value={{ ...value, navigation, addLink, createHeader }}
		>
			{children}
		</HeaderStateContext.Provider>
	);
};

export const HeaderStateContext = createContext({ ...initialState });
