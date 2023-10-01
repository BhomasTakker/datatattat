import { ReactNode, createContext } from "react";
import { Conversion } from "../types";

// Rename me or the other one

type ConversionState = {};

export type DeleteConversion = (id: string, index: number) => void;
export type MoveConversion = (dir: number, index: number) => void;
export type UpdateConversion = (index: number, data: Conversion) => void;

type ConversionInterface = {
	// these are / or are going to be individual references to the conversionsContext
	deleteConversion: (str: string) => DeleteConversion;
	moveConversion: (dir: number) => MoveConversion;
	updateConversion: (data: Conversion) => UpdateConversion;
};

const conversionInitialState: ConversionState & ConversionInterface = {
	deleteConversion: (str: string) => (id: string, index: number) => {},
	moveConversion: (dir: number) => (dir: number, index: number) => {},
	updateConversion:
		(data: Conversion) => (index: number, data: Conversion) => {},
};

export const ConversionContextProvider = ({
	value,
	children,
}: {
	value: ConversionState & ConversionInterface;
	children: ReactNode;
}) => {
	return (
		<ConversionContext.Provider value={{ ...value }}>
			{children}
		</ConversionContext.Provider>
	);
};

export const ConversionContext = createContext({ ...conversionInitialState });
