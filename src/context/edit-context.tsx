import React, { useState } from "react";

type EditContextType = {
	currentPage: string | null;
	setCurrentPageHandler: (route: string) => void;
};

const initiallContext = {
	currentPage: null,
	setCurrentPageHandler: (route: string) => {},
};

export const EditContext =
	React.createContext<EditContextType>(initiallContext);

//Pass in available options via props
//i.e. currentPage
//Page Data
export const EditContextProvider = (props: any) => {
	const [currentPage, setCurrentPage] = useState<string | null>(
		initiallContext.currentPage || props.currentPage
	);
	const setCurrentPageHandler = (route: string) => {
		// I mean here resetthough right?
		setCurrentPage(route);
	};

	return (
		<EditContext.Provider
			value={{
				currentPage: currentPage,
				setCurrentPageHandler,
			}}
		>
			{props.children}
		</EditContext.Provider>
	);
};
