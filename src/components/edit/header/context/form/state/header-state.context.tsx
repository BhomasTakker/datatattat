import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
} from "react";
import { HeaderQueryContext } from "../../query/header-query.context";
import { useFormContext, useWatch } from "react-hook-form";
import { useUser } from "@/src/hooks/useUser";
import { EditContext } from "@/src/context/edit-context";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";
import { cloneDeep } from "@/src/utils/object";
import { uniqueNumber } from "@/src/utils/math";

const FORM_ID = "nav";

type HeaderStateState = {};

type HeaderStateInterface = {
	// navigation: NavLinkData[];
	navigationId: string;
	addLink: () => void;
	createHeader: () => void;
	deleteLink: (i: number) => void;
	moveLink: (dir: number, i: number) => void;
	backPage: () => void;
	setRoute: (route: string) => void;
};

const initialState: HeaderStateState & HeaderStateInterface = {
	// navigation: [],
	navigationId: FORM_ID,
	addLink: () => {},
	createHeader: () => {},
	deleteLink: () => {},
	moveLink: () => {},
	backPage: () => {},
	setRoute: (route: string) => {},
};

const stripOpeningSlashes = (route: string) => {
	const strippedRoute = route.split("/").filter(Boolean).join("/");
	return strippedRoute.split("/").pop();
};

const reformNavigationRoutes = (navigation: NavLinkData[]) => {
	return navigation.map(({ route, label }) => ({
		label,
		route: stripOpeningSlashes(route) || "",
		key: uniqueNumber(),
	}));
};

export const HeaderStateContextProvider = ({
	value,
	children,
}: {
	value?: HeaderStateState;
	children: ReactNode;
}) => {
	const { currentHeader } = useContext(HeaderQueryContext);
	const { setValue, unregister, getValues } = useFormContext();
	const { nav } = currentHeader || {};
	const reformedNav = useMemo(() => reformNavigationRoutes(nav), [nav]);

	const { user } = useUser();
	const username = user?.username || "";
	const { currentPage, setCurrentPageHandler } = useContext(EditContext);

	// On page update unregister and setValue
	useEffect(() => {
		unregister(FORM_ID);
		setValue(FORM_ID, reformedNav);
	}, [reformedNav, setValue, unregister]);

	/////////////////////////////
	// CONTROLS /////////////////
	/////////////////////////////
	const addLink = useCallback(() => {
		const nav = getValues(FORM_ID);
		const newLink = {
			route: "",
			label: `link${nav.length}`,
		};
		setValue(`${FORM_ID}.${nav.length}`, newLink);
	}, [getValues, setValue]);

	const deleteLink = useCallback(
		(i: number) => {
			const nav = getValues(FORM_ID);
			if (nav.length === 0) {
				return;
			}

			const updateNavigation = cloneDeep(nav);
			updateNavigation.splice(i, 1);

			unregister(FORM_ID);
			setValue(FORM_ID, updateNavigation);
		},
		[getValues, setValue, unregister]
	);

	const moveLink = useCallback(
		(dir: number, i: number) => {
			const nav = getValues(FORM_ID);
			if (nav.length === 0) {
				return;
			}

			if (i === 0 && dir === -1) {
				//no up / I mean do better though right
				return;
			}

			const updateNavigation = cloneDeep(nav);
			const movedNavigation = updateNavigation.splice(i, 1);
			updateNavigation.splice(i + dir, 0, ...movedNavigation);

			// unregister(conversionsFormId);
			setValue(FORM_ID, updateNavigation);
		},
		[getValues, setValue]
	);

	////////////////////////////////////////
	// ROUTE ///////////////////////////////
	////////////////////////////////////////
	// seems void perhaps? / do you want default header
	// or specifically create header
	const createHeader = () => {
		setValue(FORM_ID, []);
	};

	/////////////////////////////////////////
	// TODO: Edit Route Context
	// need clean this
	// potentially route state context
	// at the wider edit level
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

	// also a mess setting page needs something / a state object
	const setRoute = (route: string) => {
		if (!route) {
			// ERROR: show warning alert - no route provided / could it happen? / yes user error
			return;
		}
		const updateRoute =
			currentPage === "/" ? `/${route}` : `${currentPage}/${route}`;

		setCurrentPageHandler(updateRoute);
	};

	return (
		// Would you always spread given value here?
		<HeaderStateContext.Provider
			value={{
				...value,
				// navigation: getValues(FORM_ID) || [],
				addLink,
				deleteLink,
				moveLink,
				createHeader,
				backPage,
				setRoute,
				navigationId: FORM_ID,
			}}
		>
			{children}
		</HeaderStateContext.Provider>
	);
};

export const HeaderStateContext = createContext({ ...initialState });
