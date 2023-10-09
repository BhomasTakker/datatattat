import { ReactNode, createContext, useContext, useEffect } from "react";
import { PageQueryContext } from "../query/page-query.context";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

/////////////////////////////////////////////////////////////
// What is setting the rest - this seems off
// Go through - we really need this to be a single state object
// with responsibility for form state and interactions etc
/////////////////////////////////////////////////////////////
const FORM_ID = "content";
const CONTAINER_ID = "container";
const PROPS_ID = "props";
const COMPONENTS_ID = "components";

const pageFormId = FORM_ID;
const pageContainerId = `${FORM_ID}.${CONTAINER_ID}`;
const pagePropsId = `${FORM_ID}.${PROPS_ID}`;
const pageComponentsId = `${FORM_ID}.${COMPONENTS_ID}`;

type PageStateState = {};

type PageStateInterface = {
	pageFormId: string;
	pageContainerId: string;
	pagePropsId: string;
	pageComponentsId: string;
};

const initialState: PageStateState & PageStateInterface = {
	pageFormId: FORM_ID,
	pageContainerId: `${FORM_ID}.${CONTAINER_ID}`,
	pagePropsId: `${FORM_ID}.${PROPS_ID}`,
	pageComponentsId: `${FORM_ID}.${COMPONENTS_ID}`,
};

export const PageStateContextProvider = ({
	value,
	children,
}: {
	value?: PageStateState;
	children: ReactNode;
}) => {
	const { currentPage } = useContext(EditContext);
	const { setValue, unregister } = useFormContext();
	const { pageData } = useContext(PageQueryContext);

	// Seperating seems to have fixed our issue
	// It's not too pretty perhaps but works
	useEffect(() => {
		unregister("content", { keepValue: false });
		setValue("route", currentPage);
	}, [currentPage, setValue, unregister]);

	useEffect(() => {
		// Why is this check here?
		// split this up / make better
		// PageData is always null originally since it's derived from a query
		// we should - if loading - ignore
		const page = pageData?.page || null;

		if (!page) {
			// moving outside caused minor issue - Selected container was wiped (UI) on change page
			// I think we made the change thinking it was safer
			unregister("content", { keepValue: false });
			return;
		}
		const { content } = page;

		setValue("content", content, {
			shouldValidate: true,
		});
	}, [pageData, setValue, unregister]);

	return (
		// Should we be passing data?
		<PageStateContext.Provider
			value={{
				pageFormId,
				pageComponentsId,
				pageContainerId,
				pagePropsId,
			}}
		>
			{children}
		</PageStateContext.Provider>
	);
};

export const PageStateContext = createContext({ ...initialState });
