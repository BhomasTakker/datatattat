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
export const PageQueryProvider = ({
	value,
	children,
}: {
	value?: PageQueryState;
	children: ReactNode;
}) => {
	const [pageData, setPageData] = useState({});
	const { user } = useUser();
	const username = user?.username || "";
	// const [subHeaders, setSubHeaders] = useState<HeaderDataType[]>([]); //subHeaders
	// header should just be form data
	// Effectively get data and assign to form then use watch
	// const [currentHeader, setCurrentHeader] =
	// 	useState<HeaderDataType>(initialHeaderData); //type this

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
			const result = await getPageByRoute(currentPage);
			// setPageData to error state if error
			// Could loading etc
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
