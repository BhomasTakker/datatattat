import { ReactNode, createContext, useContext, useEffect } from "react";
import { PageQueryContext } from "../query/page-query.context";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";
import { getNestedValue } from "@/src/utils/object";

/////////////////////////////////////////////////////////////
// What is setting the rest - this seems off
// Go through - we really need this to be a single state object
// with responsibility for form state and interactions etc
/////////////////////////////////////////////////////////////
const FORM_ID = "content";
const CONTAINER_ID = "container";
const PROPS_ID = "props";
const COMPONENTS_ID = "components";

const META_ID = "meta";
const PROFILE_ID = "profile";
const STYLE_ID = "style";

// Meta and form are top level
const pageFormId = FORM_ID;
const pageMetaId = `${META_ID}`;
const pageProfileId = `${PROFILE_ID}`;
const pageStyleId = `${STYLE_ID}`;

const pageContainerId = `${FORM_ID}.${CONTAINER_ID}`;
const pagePropsId = `${FORM_ID}.${PROPS_ID}`;
const pageComponentsId = `${FORM_ID}.${COMPONENTS_ID}`;

type PageStateState = {};

type PageStateInterface = {
	pageFormId: string;
	pageMetaId: string;
	pageStyleId: string;
	pageProfileId: string;
	pageContainerId: string;
	pagePropsId: string;
	pageComponentsId: string;
	getValue: (id: string) => any;
};

const initialState: PageStateState & PageStateInterface = {
	pageFormId: FORM_ID,
	pageProfileId: `${PROFILE_ID}`,
	pageMetaId: `${META_ID}`,
	pageStyleId: STYLE_ID,
	pageContainerId: `${FORM_ID}.${CONTAINER_ID}`,
	pagePropsId: `${FORM_ID}.${PROPS_ID}`,
	pageComponentsId: `${FORM_ID}.${COMPONENTS_ID}`,
	getValue(id) {},
};

// BUG, ISSUE, !!!
// This is probably where our edit issue is.
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

	// We probably want a dedicated context or store for this?
	// This is our source of truth / the data we have loaded
	// We 'should' be reading this for start data
	const getValue = (id: string) => {
		const { page } = pageData;
		const ret = getNestedValue(`${id}`, page);
		return ret;
	};

	// Sort out edit state
	// Seperating seems to have fixed our issue
	// It's not too pretty perhaps but works
	useEffect(() => {
		unregister("content", { keepValue: false });
		unregister("meta", { keepValue: false });
		unregister(STYLE_ID, { keepValue: false });
		unregister("profile", { keepValue: false });
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
			unregister("meta", { keepValue: false });
			unregister(STYLE_ID, { keepValue: false });
			unregister("profile", { keepValue: false });
			return;
		}
		const { content, meta, profile, style } = page || {};

		setValue("content", content, {
			shouldValidate: true,
		});
		setValue("meta", meta, {
			shouldValidate: true,
		});

		setValue(STYLE_ID, style, {
			shouldValidate: true,
		});
		setValue("profile", profile, {
			shouldValidate: true,
		});
	}, [pageData, setValue, unregister]);

	return (
		// Should we be passing data?
		<PageStateContext.Provider
			value={{
				pageFormId,
				pageMetaId,
				pageStyleId,
				pageProfileId,
				pageComponentsId,
				pageContainerId,
				pagePropsId,
				getValue,
			}}
		>
			{children}
		</PageStateContext.Provider>
	);
};

export const PageStateContext = createContext({ ...initialState });
