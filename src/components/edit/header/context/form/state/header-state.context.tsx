import { ReactNode, createContext, useContext, useEffect } from "react";
import { HeaderQueryContext } from "../../query/header-query.context";
import { useFormContext } from "react-hook-form";
import { useUser } from "@/src/hooks/useUser";
import { EditContext } from "@/src/context/edit-context";

type HeaderStateState = {};

type HeaderStateInterface = {
	navigation: unknown[];
	addLink: () => void;
	createHeader: () => void;
	backPage: () => void;
};

const initialState: HeaderStateState & HeaderStateInterface = {
	navigation: [],
	addLink: () => {},
	createHeader: () => {},
	backPage: () => {},
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
	const { setValue, watch } = useFormContext();
	const { nav } = currentHeader || {};

	const { user } = useUser();
	const username = user?.username || "";
	const { currentPage, setCurrentPageHandler } = useContext(EditContext);

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

	// need clean this
	const backPage = () => {
		if (currentPage === `/users/${username}` || currentPage === `/`) {
			return;
		}

		let pages = currentPage?.split("/");
		pages?.pop();

		// Back issue was here / need test on user pages
		const backPage = pages?.join("/") || "/";

		setCurrentPageHandler(backPage);
	};

	console.log("FEATURE:105", "CONTEXT:GROUP", "HEADER:STATE", "RENDER");
	return (
		// Would you always spread given value here?
		<HeaderStateContext.Provider
			value={{ ...value, navigation, addLink, createHeader, backPage }}
		>
			{children}
		</HeaderStateContext.Provider>
	);
};

export const HeaderStateContext = createContext({ ...initialState });
