import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
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
	// const forceUpdate = useReducer((bool) => !bool, true)[1];
	const { currentPage } = useContext(EditContext);
	const { setValue, unregister, reset } = useFormContext();
	const { pageData } = useContext(PageQueryContext);

	console.log("ISSUE:12345", "PAGE:STATE:CONTEXT", { currentPage });
	console.log("ISSUE:12345", "PAGE:STATE:CONTEXT", { pageData });
	useEffect(() => {
		const page = pageData?.page || null;
		if (!page) {
			return;
		}

		const { content } = page;

		// We get message ok etc from page data
		// setValue(FORM_ID, { ...page, route: `${currentPage}` });

		/////////////////////////
		// ERROR HERE PERHAPS
		/////////////////////////

		// register("route");
		// register("content");

		setValue("route", currentPage);
		setValue("content", content, {
			shouldValidate: true,
		});

		// forceUpdate();
		// reset works but setValue didn't
		// not entirely sure why
		// reset(
		// 	{
		// 		...page,
		// 		route: `${currentPage}`
		// 	},
		// 	{
		// 		keepValues: false,
		// 	}
		// );
	}, [currentPage, pageData, setValue]);

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
