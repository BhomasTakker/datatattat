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
	newLink: () => void;
	createHeader: () => void;
};

const initialState: HeaderQueryState & HeaderQueryInterface = {
	currentHeader: {},
	subHeaders: [],
	newLink: () => {},
	createHeader: () => {},
};

const initialHeaderData = {
	homeIcon: <HomeIcon />,
	nav: [],
};

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
	const [currentHeader, setCurrentHeader] =
		useState<HeaderDataType>(initialHeaderData); //type this

	const { currentPage } = useContext(EditContext);

	// create hook?
	// clean the hell up
	useEffect(() => {
		const fetchHeadersData = async () => {
			// should not be using fetch?
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

			// Quite possibly where one of our errors is
			reset(
				{
					nav: [],
				},
				{
					keepErrors: true,
					keepDirty: true,
				}
			);
		};
		fetchHeadersData();
	}, [currentPage, reset]);

	// we can ssplit this up
	// get Nav
	// should pass data
	const newLink = () => {
		const { nav } = currentHeader;
		const navLength = nav.length;
		//If a user creates 2 links of the same name you will get a key error
		//May need to pass key?
		const newLink = {
			route: "",
			label: `link${navLength}`,
		};

		setCurrentHeader({ ...currentHeader, nav: [...nav, newLink] });
	};

	const createHeader = () => {
		console.log("Create Header");

		//clear current form header data / why?
		reset(
			{
				nav: [],
			},
			{
				keepErrors: true,
				keepDirty: true,
			}
		);

		setCurrentHeader({ ...initialHeaderData, nav: [] });
	};

	// for ONE source of truth we would want to update THIS store

	return (
		// Would you always spread given value here?
		<HeaderQueryContext.Provider
			value={{ currentHeader, subHeaders, newLink, createHeader }}
		>
			{children}
		</HeaderQueryContext.Provider>
	);
};

export const HeaderQueryContext = createContext({ ...initialState });
