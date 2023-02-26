import React, { useState } from "react";

const initiallContext = {
	currentPage: "",
	setCurrentPageHandler: (route: string) => {},
};

export const EditContext = React.createContext(initiallContext);

export const EditContextProvider = (props: any) => {
	const [currentPage, setCurrentPage] = useState<string>(
		initiallContext.currentPage
	);
	const setCurrentPageHandler = (route: string) => {
		console.log({ route });
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
