import HomeIcon from "@mui/icons-material/Home";
import { HeaderDataType } from "@/src/headers/types";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

type HeaderQueryState = {};

type HeaderQueryInterface = {
	currentHeader: HeaderDataType;
	subHeaders: HeaderDataType[];
};

const initialState: HeaderQueryState & HeaderQueryInterface = {
	currentHeader: {},
	subHeaders: [],
};

const initialHeaderData = {
	homeIcon: <HomeIcon />,
	nav: [],
};

// When reload / update, etc - this might cause issues with refetch
// Needs cleaning up and perhaps re struct
export const HeaderQueryProvider = ({
	value,
	children,
}: {
	value?: HeaderQueryState;
	children: ReactNode;
}) => {
	const { reset } = useFormContext();
	const [subHeaders, setSubHeaders] = useState<HeaderDataType[]>([]); //subHeaders
	// header should just be form data
	// Effectively get data and assign to form then use watch
	const [currentHeader, setCurrentHeader] =
		useState<HeaderDataType>(initialHeaderData); //type this

	const { currentPage } = useContext(EditContext);

	// create hook?
	// clean the hell up
	useEffect(() => {
		const fetchHeadersData = async () => {
			// should not be using fetch?
			// @api
			const response = await fetch(`../api/header${currentPage}`);
			const headers = await response.json();

			const filteredHeaders = headers.filter(
				(header: HeaderDataType | null) => header !== null
			);

			const defaultHeader = {
				route: `/${currentPage}`,
				nav: [],
			};

			// do not like this
			const showHeader = !!headers[0];

			setCurrentHeader(showHeader ? { ...filteredHeaders[0] } : defaultHeader);

			filteredHeaders.shift();
			setSubHeaders([...filteredHeaders]);
		};
		fetchHeadersData();
	}, [currentPage, reset]);

	return (
		<HeaderQueryContext.Provider value={{ currentHeader, subHeaders }}>
			{children}
		</HeaderQueryContext.Provider>
	);
};

export const HeaderQueryContext = createContext({ ...initialState });
