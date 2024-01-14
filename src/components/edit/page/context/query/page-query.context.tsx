import HomeIcon from "@mui/icons-material/Home";
import { HeaderDataType } from "@/src/headers/types";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { EditContext } from "@/src/context/edit-context";
import { getPageByRoute } from "@/src/queries/pages/get-page-queries";
import { useUser } from "@/src/hooks/useUser";

// We can type this
type PageDataType = any;

type PageQueryState = {};

type PageQueryInterface = {
	pageData: PageDataType;
};

const initialState: PageQueryState & PageQueryInterface = {
	pageData: {},
};

// When reload / update, etc - this might cause issues with refetch
// Needs cleaning up and perhaps re struct
// We could just create a hook for getting currentPage and use it where required
// return loading etc - would stop at least some rerenders
// Probably the correct approach
export const PageQueryProvider = ({
	value,
	children,
}: {
	value?: PageQueryState;
	children: ReactNode;
}) => {
	const [pageData, setPageData] = useState({});

	const { currentPage } = useContext(EditContext);

	// create hook?
	// clean the hell up
	useEffect(() => {
		const fetchPageData = async () => {
			// We may need to modify currentPage i.e. remove /

			if (currentPage === null) {
				// NOTIFICATION: wrong something
				// I think we need to check null specifically
				// since we may be using an empty string for home page
				return;
			}

			// try catch
			// how safe is this ?
			// it should have a try catch
			const result = await getPageByRoute(currentPage);
			// setPageData to error state if error
			// Could loading etc
			// should check if error
			setPageData(result);
		};
		fetchPageData();
		// NOTE: We have a check for username in the original
		// i.e. refetch on username change undefined to known perhaps
	}, [currentPage]);

	return (
		<PageQueryContext.Provider value={{ pageData }}>
			{children}
		</PageQueryContext.Provider>
	);
};

export const PageQueryContext = createContext({ ...initialState });
