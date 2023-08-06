// Should really make a plop file

import { ReactNode, createContext, useContext, useEffect } from "react";
import { PageQueryContext } from "../query/page-query.context";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

/////////////////////////////////////////////////////////////
// What is setting the rest - this seems off
// Go through - we really need this to be a single state object
// with responsibility for form state and interactions etc
/////////////////////////////////////////////////////////////
const FORM_ID = "content.container";

type PageStateState = {};

type PageStateInterface = {
	pageFormId: string;
};

const initialState: PageStateState & PageStateInterface = {
	pageFormId: FORM_ID,
};

export const PageStateContextProvider = ({
	value,
	children,
}: {
	value?: PageStateState;
	children: ReactNode;
}) => {
	const { currentPage } = useContext(EditContext);
	const { setValue, reset } = useFormContext();
	const { pageData } = useContext(PageQueryContext);

	useEffect(() => {
		const page = pageData?.page || null;
		if (!page) {
			return;
		}
		console.log("FEATURE:205", "REFACTOR:PAGE", "SET:FORM:VALUE", { pageData });
		// We get message ok etc from page data
		// setValue(FORM_ID, { ...page, route: `${currentPage}` });

		// reset works but setValue didn't
		// not entirely sure why
		reset(
			{
				...page,
				route: `${currentPage}`,
			},
			{
				keepValues: false,
			}
		);
	}, [currentPage, pageData, reset]);

	return (
		// Should we be passing data?
		<PageStateContext.Provider value={{ pageFormId: FORM_ID }}>
			{children}
		</PageStateContext.Provider>
	);
};

export const PageStateContext = createContext({ ...initialState });
