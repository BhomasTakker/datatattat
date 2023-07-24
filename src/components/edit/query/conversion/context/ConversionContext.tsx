import { ReactNode, createContext } from "react";

type ConversionState = {};

export type DeleteConversion = (id: string, index: number) => void;
export type MoveConversion = (dir: number, id: string, index: number) => void;

type ConversionInterface = {
	deleteConversion: (e: MouseEvent) => DeleteConversion;
	moveConversion: (dir: number) => MoveConversion;
};

const conversionInitialState: ConversionState & ConversionInterface = {
	deleteConversion: (e: MouseEvent) => (id: string, index: number) => {},
	moveConversion:
		(dir: number) => (dir: number, id: string, index: number) => {},
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
